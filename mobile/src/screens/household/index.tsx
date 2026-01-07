import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";

import styles from "./style";
import HouseImage from "../../assets/house.jpg";
import BottomTabBar from "../../components/BottomTabBar";
import { MEMBERS_MOCK } from "../../mocks/members";

const DROPDOWN_WIDTH = 340;

const HouseSettings: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [houseName, setHouseName] = useState("The Smith’s Home");
  const [inviteLink] = useState("tasqly.io/invite/K7P3L");
  const [copied, setCopied] = useState(false);

  const addBtnRef = useRef<View>(null);

  const [memberMenuVisible, setMemberMenuVisible] = useState(false);
  const [memberMenuPos, setMemberMenuPos] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [memberQuery, setMemberQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const q = memberQuery.trim().toLowerCase();
    if (!q) return MEMBERS_MOCK;

    return MEMBERS_MOCK.filter((m) => m.name.toLowerCase().includes(q));
  }, [memberQuery]);

  const openMemberMenu = () => {
    addBtnRef.current?.measureInWindow((x, y, w, h) => {
      const screenW = Dimensions.get("window").width;

      const width = Math.min(DROPDOWN_WIDTH, screenW - 48);
      const desiredLeft = x + w / 2 - width / 2;

      const left = Math.max(24, Math.min(desiredLeft, screenW - width - 24));
      const top = y + h + 10;

      setMemberMenuPos({ top, left });
      setMemberQuery("");
      setMemberMenuVisible(true);
    });
  };

  const closeMemberMenu = () => {
    setMemberMenuVisible(false);
    setMemberMenuPos(null);
  };

  const handleSelectMember = () => {
    // TODO: add to house members list (backend later)
    closeMemberMenu();
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

    if (!result.canceled) {
      setHouseImageUri(result.assets[0].uri);
    }
  };

  const handleCopyInvite = async () => {
    await Clipboard.setStringAsync(inviteLink);

    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

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
            contentContainerStyle={{ paddingBottom: 40 }}
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

              <View ref={addBtnRef} collapsable={false}>
                <Pressable
                  onPress={openMemberMenu}
                  style={({ pressed }) => [
                    styles.addMemberBtn,
                    pressed && { opacity: 0.9 },
                  ]}
                >
                  <Ionicons name="person-add-outline" size={22} color="#FFF" />
                  <Text style={styles.addMemberText}>Add Member</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

        {/* Add Member Dropdown */}
        <Modal
          visible={memberMenuVisible}
          transparent
          animationType="fade"
          onRequestClose={closeMemberMenu}
        >
          <Pressable
            style={styles.memberMenuOverlay}
            onPress={closeMemberMenu}
          />

          {memberMenuPos && (
            <View
              style={[
                styles.memberMenu,
                { top: memberMenuPos.top, left: memberMenuPos.left },
              ]}
            >
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

              <View style={styles.memberResults}>
                {filteredMembers.length === 0 ? (
                  <Text style={styles.memberNotFound}>User not found</Text>
                ) : (
                  filteredMembers.slice(0, 6).map((m) => (
                    <Pressable
                      key={m.id}
                      onPress={() => handleSelectMember()}
                      style={({ pressed }) => [
                        styles.memberResultRow,
                        pressed && { opacity: 0.85 },
                      ]}
                    >
                      <View style={styles.memberAvatarWrap}>
                        {m.avatar ? (
                          <Image
                            source={m.avatar}
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

                      <Text style={styles.memberResultName}>{m.name}</Text>
                    </Pressable>
                  ))
                )}
              </View>
            </View>
          )}
        </Modal>
      </View>

      <BottomTabBar activeTab="profile" />
    </>
  );
};

export default HouseSettings;
