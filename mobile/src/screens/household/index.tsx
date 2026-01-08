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

const HouseSettings: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [houseName, setHouseName] = useState("The Smith’s Home");
  const [inviteLink] = useState("tasqly.io/invite/K7P3L");
  const [copied, setCopied] = useState(false);
  const [isSearchingMembers, setIsSearchingMembers] = useState(false);
  const [memberResults, setMemberResults] = useState(MEMBERS_MOCK);
  const [members, setMembers] = useState(MEMBERS_MOCK);

  const [memberDialogVisible, setMemberDialogVisible] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");

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
    await Clipboard.setStringAsync(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const openMemberDialog = () => {
    setMemberQuery("");
    setMemberDialogVisible(true);
  };

  const closeMemberDialog = () => {
    setMemberDialogVisible(false);
  };

  const handleSelectMember = () => {
    // TODO: backend later (add member to house)
    closeMemberDialog();
  };

  const handleRemoveMember = (memberId: string) => {
    // TODO: backend call -> removeMemberFromHouse(memberId)
    // for now, just optimistic UI:
    setMembers((prev) => prev.filter((m) => m.id !== memberId));
  };

  useEffect(() => {
    if (!memberDialogVisible) return;

    const q = memberQuery.trim();
    setIsSearchingMembers(true);

    const t = setTimeout(async () => {
      try {
        // TODO: replace with real API call later
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
            source={houseImageUri ? { uri: houseImageUri } : HouseImage}
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
                  value={houseName}
                  onChangeText={setHouseName}
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
                  value={inviteLink}
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
                <Ionicons name="person-add-outline" size={22} color="#FFF" />
                <Text style={styles.addMemberText}>Add Member</Text>
              </Pressable>
            </View>
            <Text style={styles.sectionTitle}>Members</Text>

            <View style={styles.membersCard}>
              <View style={styles.membersInner}>
                {members.map((m, index) => {
                  const isLast = index === members.length - 1;

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
          </ScrollView>
        </SafeAreaView>

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
              {/* Header */}
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
                    onPress={handleSelectMember}
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
