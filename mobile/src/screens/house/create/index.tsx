import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";

import styles from "./style";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";
import { type Member, MEMBERS_MOCK } from "../../../mocks/members";
import BgImage from "../../../assets/Image-Icon.jpg";

type CreateHouseForm = {
  name: string;
  description: string;
  // keep loose (you already use local assets + uri fallback)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  members: Member[];
};

const CreateHouse: React.FC = () => {
  const [form, setForm] = useState<CreateHouseForm>({
    name: "",
    description: "",
    image: BgImage,
    members: [],
  });

  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);

  // ✅ reuse the same modal approach as your Create screen
  const [showMemberModal, setShowMemberModal] = useState(false);

  // optional: don’t show already added members inside the modal
  const selectableMembers = useMemo(() => {
    const selected = new Set(form.members.map((m) => m.id));
    return MEMBERS_MOCK.filter((m) => !selected.has(m.id));
  }, [form.members]);

  const handlePickHouseImage = async () => {
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

  const handleAddMember = (member: Member) => {
    setForm((prev) => {
      const exists = prev.members.some((m) => m.id === member.id);
      if (exists) return prev;
      return { ...prev, members: [...prev.members, member] };
    });

    setShowMemberModal(false);

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

  return (
    <View style={styles.root}>
      {/* Image area */}
      <View style={styles.imageWrapper}>
        <Image
          source={
            houseImageUri ? { uri: houseImageUri } : (form.image ?? BgImage)
          }
          style={styles.houseImage}
        />

        {/* ✅ full overlay shade */}
        <View style={styles.imageShade} />

        <Pressable
          onPress={handlePickHouseImage}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <Text style={styles.createTitle}>Create new House</Text>

          {/* House Name */}
          <Text style={styles.fieldLabel}>House Name</Text>
          <View style={styles.inputRow}>
            <FontAwesome5 name="home" size={26} color="#111" />
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
              size={26}
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

          {/* ✅ Borrow the same modal trigger pattern (button opens modal) */}
          <View style={styles.addMemberButtonWrapper}>
            <Pressable
              style={styles.addMemberBtn}
              onPress={() => setShowMemberModal(true)}
            >
              <Ionicons
                name="person-add-outline"
                size={22}
                color="#FFFFFF"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.addMemberText}>Add Member</Text>
            </Pressable>
          </View>

          {/* Members List */}
          <View style={styles.membersCard}>
            <View style={styles.membersInner}>
              {form.members.length === 0 ? (
                <View style={styles.membersEmptyWrap}>
                  <Text style={styles.membersEmptyTitle}>No members yet</Text>
                  <Text style={styles.membersEmptySub}>
                    Tap “Add Member” to start adding people to this house.
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

          {/* ✅ Members Modal (same structure as your Create screen) */}
          <Modal
            visible={showMemberModal}
            transparent
            animationType="fade"
            onRequestClose={() => setShowMemberModal(false)}
          >
            <View style={styles.assigneeOverlay}>
              <View style={styles.assigneeCard}>
                <View style={styles.assigneeHeader}>
                  <Text style={styles.assigneeTitle}>Select Member</Text>
                  <Pressable onPress={() => setShowMemberModal(false)}>
                    <Ionicons name="close" size={22} color="#111" />
                  </Pressable>
                </View>

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                >
                  {selectableMembers.length === 0 ? (
                    <Text style={styles.memberNotFound}>
                      All members already added
                    </Text>
                  ) : (
                    selectableMembers.map((member) => (
                      <Pressable
                        key={member.id}
                        style={styles.assigneeRow}
                        onPress={() => handleAddMember(member)}
                      >
                        {member.avatar ? (
                          <Image
                            source={member.avatar}
                            style={styles.assigneeAvatar}
                          />
                        ) : (
                          <View style={styles.assigneeAvatarPlaceholder}>
                            <Ionicons
                              name="person-outline"
                              size={18}
                              color="#9CA3AF"
                            />
                          </View>
                        )}

                        <Text style={styles.assigneeName}>{member.name}</Text>
                      </Pressable>
                    ))
                  )}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateHouse;
