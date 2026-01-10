import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";

import { PRIMARY_COLOR_RED } from "../../../theme/colors";
import { MEMBERS_MOCK, type Member } from "../../../mocks/members";
import BgImage from "../../../assets/Image-Icon.jpg";
import styles from "./style";

type CreateHouseForm = {
  name: string;
  description: string;
  inviteLink: string;
  image?: ImageSourcePropType;
  members: Member[];
};

const CreateHouse: React.FC = () => {
  const [form, setForm] = useState<CreateHouseForm>({
    name: "",
    description: "",
    inviteLink: "",
    image: BgImage,
    members: [],
  });

  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);

  // --- HouseSettings-style member dialog state ---
  const [memberDialogVisible, setMemberDialogVisible] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");
  const [isSearchingMembers, setIsSearchingMembers] = useState(false);
  const [memberResults, setMemberResults] = useState<Member[]>(MEMBERS_MOCK);

  const selectableMemberResults = useMemo(() => {
    // optional polish: hide members already added
    const picked = new Set(form.members.map((m) => m.id));
    return memberResults.filter((m) => !picked.has(m.id));
  }, [memberResults, form.members]);

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

  const openMemberDialog = () => {
    setMemberQuery("");
    setMemberResults(MEMBERS_MOCK);
    setMemberDialogVisible(true);
  };

  const closeMemberDialog = () => setMemberDialogVisible(false);

  const handleSelectMember = (memberId: string) => {
    const picked = MEMBERS_MOCK.find((m) => m.id === memberId);
    if (!picked) return;

    setForm((prev) => {
      const exists = prev.members.some((m) => m.id === memberId);
      if (exists) return prev;
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
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.id !== memberId),
    }));

    showMessage({
      message: "Member removed successfully",
      type: "success",
      icon: "success",
    });
  };

  // Simulated “backend search” (same pattern as HouseSettingsContainer)
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
    <View style={styles.root}>
      {/* Top image area */}
      <View style={styles.imageWrapper}>
        <Image
          source={
            houseImageUri ? { uri: houseImageUri } : (form.image ?? BgImage)
          }
          style={styles.houseImage}
        />

        {/* ✅ Full shade covering the entire image area */}
        <View style={styles.imageShade} />

        <Pressable
          onPress={handleChangeHouseImage}
          style={({ pressed }) => [
            styles.uploadBtn,
            pressed && { opacity: 0.9 },
          ]}
        >
          <Ionicons name="pencil" size={18} color="#FFF" />
          <Text style={styles.uploadBtnText}>Upload</Text>
        </Pressable>
      </View>

      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Text style={styles.createTitle}>Create new House</Text>

          {/* House Name */}
          <Text style={styles.fieldLabel}>House Name</Text>
          <View style={styles.inputRow}>
            <FontAwesome5 name="home" size={28} color="#111" />
            <TextInput
              value={form.name}
              onChangeText={(name) => setForm((p) => ({ ...p, name }))}
              placeholder="Ex: Rideau Apartment"
              placeholderTextColor="#A0A0A0"
              style={styles.input}
            />
          </View>

          {/* Description */}
          <View style={styles.descHeaderRow}>
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="#111"
            />
            <Text style={styles.descLabel}>Description</Text>
          </View>

          <View style={styles.textAreaWrap}>
            <TextInput
              value={form.description}
              onChangeText={(description) =>
                setForm((p) => ({ ...p, description }))
              }
              placeholder=""
              placeholderTextColor="#A0A0A0"
              style={styles.textArea}
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* Add Member button (same as HouseSettings) */}
          <Pressable
            onPress={openMemberDialog}
            style={({ pressed }) => [
              styles.addMemberBtn,
              pressed && { opacity: 0.9 },
            ]}
          >
            <FontAwesome5 name="user-plus" size={26} color="#FFF" />
            <Text style={styles.addMemberText}>Add Member</Text>
          </Pressable>

          {/* Members list (starts empty) */}
          <View style={styles.membersCard}>
            <View style={styles.membersInner}>
              {form.members.length === 0 ? (
                <View style={styles.emptyMembersState}>
                  <Ionicons name="people" size={40} color="#9CA3AF" />
                  <Text style={styles.emptyMembersTitle}>No members yet</Text>
                  <Text style={styles.emptyMembersSubtitle}>
                    Add members to start sharing tasks and managing your house
                    together.
                  </Text>
                </View>
              ) : (
                form.members.map((m, index) => {
                  const isLast = index === form.members.length - 1;

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
                })
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* ✅ Add Member Dialog (same as House Settings) */}
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

            {isSearchingMembers && (
              <Text style={styles.memberNotFound}>Searching…</Text>
            )}

            <FlatList
              data={selectableMemberResults}
              keyExtractor={(item) => item.id}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
              ListEmptyComponent={
                !isSearchingMembers ? (
                  <Text style={styles.memberNotFound}>
                    {memberResults.length === 0
                      ? "User not found"
                      : "No more users to add"}
                  </Text>
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
                      <Image source={item.avatar} style={styles.memberAvatar} />
                    ) : (
                      <Ionicons name="person-outline" size={18} color="#888" />
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
  );
};

export default CreateHouse;
