import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";

import styles from "./style";
import HouseImage from "../../assets/house.jpg";
import BottomTabBar from "../../components/BottomTabBar";
import { MEMBERS_MOCK } from "../../mocks/members";
import Spinner from "../../components/Spinner";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../theme/colors";
import { HOUSEHOLD_MOCK } from "../../mocks/household";
import { showMessage } from "react-native-flash-message";

const HouseSettings: React.FC = () => {
  const [household, setHousehold] = useState(HOUSEHOLD_MOCK);

  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [memberDialogVisible, setMemberDialogVisible] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");
  const [isSearchingMembers, setIsSearchingMembers] = useState(false);
  const [memberResults, setMemberResults] = useState(MEMBERS_MOCK);

  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  const handleDeleteHouse = () => setConfirmDeleteVisible(true);

  const confirmDeleteHouse = () => {
    setConfirmDeleteVisible(false);
    // TODO: backend call (delete house) + navigate away
  };

  const handleSaveHouse = () => {
    // TODO: backend call (save house settings)
  };

  const handleChangeHouseImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) setHouseImageUri(result.assets[0].uri);
  };

  const handleCopyInvite = async () => {
    await Clipboard.setStringAsync(household.inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openMemberDialog = () => {
    setMemberQuery("");
    setMemberResults(MEMBERS_MOCK);
    setMemberDialogVisible(true);
  };

  const closeMemberDialog = () => {
    setMemberDialogVisible(false);
  };

  const handleSelectMember = (memberId: string) => {
    // TODO: backend later (add member to house)
    // for now, optimistic UI: add if not already present
    setHousehold((prev) => {
      const exists = prev.members.some((m) => m.id === memberId);
      if (exists) return prev;

      const picked = MEMBERS_MOCK.find((m) => m.id === memberId);
      if (!picked) return prev;

      return { ...prev, members: [...prev.members, picked] };
    });

    closeMemberDialog();

    showMessage({
      message: "Member added successfully",
      type: "success",
      icon: "success",
    });
  };

  const handleRemoveMember = (memberId: string) => {
    // TODO: backend call -> removeMemberFromHouse(memberId)
    setHousehold((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.id !== memberId),
    }));
    showMessage({
      message: "Member removed successfully",
      type: "success",
      icon: "success",
    });
  };
  // Simulated “backend search”
  useEffect(() => {
    if (!memberDialogVisible) return;

    const q = memberQuery.trim();
    setIsSearchingMembers(true);

    const t = setTimeout(() => {
      try {
        const lowered = q.toLowerCase();
        const results = !q
          ? MEMBERS_MOCK
          : MEMBERS_MOCK.filter((m) => m.name.toLowerCase().includes(lowered));

        setMemberResults(results);
      } finally {
        setIsSearchingMembers(false);
      }
    }, 300);

    return () => clearTimeout(t);
  }, [memberQuery, memberDialogVisible]);

  return (
    <>
      <View style={styles.root}>
        <View style={styles.imageWrapper}>
          <Image
            source={
              houseImageUri
                ? { uri: houseImageUri }
                : (household.image ?? HouseImage)
            }
            style={styles.houseImage}
          />

          <Pressable
            onPress={handleChangeHouseImage}
            hitSlop={10}
            style={({ pressed }) => [
              styles.editBadge,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Ionicons name="pencil" size={18} color="#FFF" />
          </Pressable>
        </View>

        <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
          >
            <View style={styles.headerRow}>
              <Ionicons name="settings-outline" size={26} color="#111" />
              <Text style={styles.headerTitle}>House Settings</Text>
            </View>

            <Text style={styles.sectionTitle}>General</Text>

            <View style={styles.generalCard}>
              <View style={styles.generalHeaderRow}>
                <FontAwesome5 name="home" size={28} color="#111" />
                <Text style={styles.generalHeaderLabel}>House Name</Text>
              </View>

              <View style={styles.generalInputWrap}>
                <TextInput
                  value={household.name}
                  onChangeText={(text) =>
                    setHousehold((prev) => ({ ...prev, name: text }))
                  }
                  placeholder="House Name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.generalInput}
                />
              </View>
            </View>

            <Text style={styles.sectionTitle}>Add New Members</Text>

            <View style={styles.inviteCard}>
              <View style={styles.inviteHeaderRow}>
                <Ionicons name="link-outline" size={26} color="#111" />
                <Text style={styles.inviteHeaderLabel}>
                  Invite a member using group’s link
                </Text>
              </View>

              <View style={styles.inviteRow}>
                <TextInput
                  value={household.inviteLink}
                  editable={false}
                  style={styles.inviteInput}
                  selectTextOnFocus
                />

                <Pressable
                  onPress={handleCopyInvite}
                  hitSlop={10}
                  style={({ pressed }) => [
                    styles.copyButton,
                    pressed && { opacity: 0.8 },
                  ]}
                >
                  <Ionicons
                    name={copied ? "checkmark" : "copy-outline"}
                    size={22}
                    color="#111"
                  />
                </Pressable>
              </View>

              <Pressable
                onPress={openMemberDialog}
                style={({ pressed }) => [
                  styles.addMemberBtn,
                  pressed && { opacity: 0.9 },
                ]}
              >
                <FontAwesome5 name="user-plus" size={22} color="#FFF" />
                <Text style={styles.addMemberText}>Add Member</Text>
              </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Members</Text>

            <View style={styles.membersCard}>
              <View style={styles.membersInner}>
                {household.members.map((m, index) => {
                  const isLast = index === household.members.length - 1;

                  return (
                    <View key={m.id}>
                      <View style={styles.memberRow}>
                        <View style={styles.memberLeft}>
                          <View style={styles.memberAvatarWrap}>
                            {m.avatar ? (
                              <Image
                                source={m.avatar}
                                style={styles.memberAvatar}
                              />
                            ) : (
                              <Ionicons
                                name="person-outline"
                                size={22}
                                color="#9CA3AF"
                              />
                            )}
                          </View>

                          <Text style={styles.memberName}>{m.name}</Text>
                        </View>

                        <Pressable
                          onPress={() => handleRemoveMember(m.id)}
                          hitSlop={10}
                          style={({ pressed }) => [
                            styles.removeBtn,
                            pressed && { opacity: 0.8 },
                          ]}
                        >
                          <Ionicons
                            name="trash-outline"
                            size={22}
                            color={PRIMARY_COLOR_RED}
                          />
                        </Pressable>
                      </View>

                      {!isLast && <View style={styles.memberSeparator} />}
                    </View>
                  );
                })}
              </View>
            </View>

            <Text style={styles.sectionTitle}>More Information</Text>

            <View style={styles.moreInfoCard}>
              <View style={styles.moreInfoHeaderRow}>
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#111"
                />
                <Text style={styles.moreInfoHeaderLabel}>Description</Text>
              </View>

              <View style={styles.moreInfoInputWrap}>
                <TextInput
                  value={household.description}
                  onChangeText={(text) =>
                    setHousehold((prev) => ({ ...prev, description: text }))
                  }
                  placeholder="Write something about this house..."
                  placeholderTextColor="#9CA3AF"
                  style={styles.moreInfoInput}
                  multiline
                  textAlignVertical="top"
                />
              </View>
            </View>

            {/* Confirm Delete (House) */}
            <Modal
              visible={confirmDeleteVisible}
              transparent
              animationType="fade"
              onRequestClose={() => setConfirmDeleteVisible(false)}
            >
              <Pressable
                style={styles.confirmOverlay}
                onPress={() => setConfirmDeleteVisible(false)}
              >
                <Pressable onPress={() => {}} style={styles.confirmCard}>
                  <Text style={styles.confirmTitle}>Confirm deletion</Text>
                  <Text style={styles.confirmBody}>
                    Are you sure you want to delete this house? This action
                    cannot be undone.
                  </Text>

                  <View style={styles.confirmButtonsRow}>
                    <Pressable
                      onPress={() => setConfirmDeleteVisible(false)}
                      style={({ pressed }) => [
                        styles.confirmCancelBtn,
                        pressed && { opacity: 0.9 },
                      ]}
                    >
                      <Ionicons name="close" size={18} color="#111" />
                      <Text style={styles.confirmCancelText}>Cancel</Text>
                    </Pressable>

                    <Pressable
                      onPress={confirmDeleteHouse}
                      style={({ pressed }) => [
                        styles.confirmDeleteBtn,
                        pressed && { opacity: 0.9 },
                      ]}
                    >
                      <Ionicons name="trash-outline" size={18} color="#FFF" />
                      <Text style={styles.confirmDeleteText}>Delete</Text>
                    </Pressable>
                  </View>
                </Pressable>
              </Pressable>
            </Modal>

            <View style={styles.bottomButtonsRow}>
              <Pressable
                onPress={handleDeleteHouse}
                style={({ pressed }) => [
                  styles.dangerButton,
                  pressed && { opacity: 0.9 },
                ]}
              >
                <Ionicons name="trash-outline" size={22} color="#FFF" />
                <Text style={styles.dangerButtonText}>Delete</Text>
              </Pressable>

              <Pressable
                onPress={handleSaveHouse}
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && { opacity: 0.9 },
                ]}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="#FFF"
                />
                <Text style={styles.primaryButtonText}>Save</Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>

        {/* Add Member Dialog */}
        <Modal
          visible={memberDialogVisible}
          transparent
          animationType="fade"
          onRequestClose={closeMemberDialog}
        >
          <Pressable
            style={styles.memberDialogOverlay}
            onPress={closeMemberDialog}
          />

          <SafeAreaView edges={["bottom"]} style={styles.memberDialogSafe}>
            <View style={styles.memberDialogCard}>
              <View style={styles.memberDialogHeader}>
                <Text style={styles.memberDialogTitle}>Add Member</Text>

                <Pressable
                  onPress={closeMemberDialog}
                  hitSlop={10}
                  style={({ pressed }) => pressed && { opacity: 0.7 }}
                >
                  <Ionicons name="close" size={22} color="#111" />
                </Pressable>
              </View>

              <View style={styles.memberSearchRow}>
                <Ionicons name="search-outline" size={22} color="#111" />
                <TextInput
                  value={memberQuery}
                  onChangeText={setMemberQuery}
                  placeholder="Search member"
                  placeholderTextColor="#9CA3AF"
                  style={styles.memberSearchInput}
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>

              {isSearchingMembers && <Spinner color={PRIMARY_COLOR_BLUE} />}

              <FlatList
                data={memberResults}
                keyExtractor={(item) => item.id}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 10 }}
                ListEmptyComponent={
                  !isSearchingMembers ? (
                    <Text style={styles.memberNotFound}>User not found</Text>
                  ) : null
                }
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleSelectMember(item.id)}
                    style={({ pressed }) => [
                      styles.memberResultRow,
                      pressed && { opacity: 0.85 },
                    ]}
                  >
                    <View style={styles.memberAvatarWrap}>
                      {item.avatar ? (
                        <Image
                          source={item.avatar}
                          style={styles.memberAvatar}
                        />
                      ) : (
                        <Ionicons
                          name="person-outline"
                          size={18}
                          color="#888"
                        />
                      )}
                    </View>

                    <Text style={styles.memberResultName}>{item.name}</Text>
                  </Pressable>
                )}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </View>

      <BottomTabBar activeTab="profile" />
    </>
  );
};

export default HouseSettings;
