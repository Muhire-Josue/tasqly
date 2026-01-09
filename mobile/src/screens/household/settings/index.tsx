// screens/house-settings/HouseSettings.tsx
import React from "react";
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
import { Household } from "../../../mocks/household";
import { Member } from "../../../mocks/members";
import styles from "./style";
import Spinner from "../../../components/Spinner";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../../theme/colors";
import HouseImage from "../../../assets/house.jpg";
import BottomTabBar from "../../../components/BottomTabBar";

type Props = {
  household: Household;

  houseImageUri: string | null;
  copied: boolean;

  memberDialogVisible: boolean;
  memberQuery: string;
  isSearchingMembers: boolean;
  memberResults: Member[];

  confirmDeleteVisible: boolean;

  onChangeHouseImage: () => void | Promise<void>;
  onCopyInvite: () => void | Promise<void>;

  onOpenMemberDialog: () => void;
  onCloseMemberDialog: () => void;
  onChangeMemberQuery: (q: string) => void;
  onSelectMember: (memberId: string) => void;
  onRemoveMember: (memberId: string) => void;

  onDeleteHouse: () => void;
  onCancelDeleteHouse: () => void;
  onConfirmDeleteHouse: () => void;

  onSaveHouse: () => void;

  onChangeHouseName: (name: string) => void;
  onChangeDescription: (desc: string) => void;
};

const HouseSettings: React.FC<Props> = ({
  household,
  houseImageUri,
  copied,
  memberDialogVisible,
  memberQuery,
  isSearchingMembers,
  memberResults,
  confirmDeleteVisible,
  onChangeHouseImage,
  onCopyInvite,
  onOpenMemberDialog,
  onCloseMemberDialog,
  onChangeMemberQuery,
  onSelectMember,
  onRemoveMember,
  onDeleteHouse,
  onCancelDeleteHouse,
  onConfirmDeleteHouse,
  onSaveHouse,
  onChangeHouseName,
  onChangeDescription,
}) => {
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
            onPress={onChangeHouseImage}
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
                  onChangeText={onChangeHouseName}
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
                  onPress={onCopyInvite}
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
                onPress={onOpenMemberDialog}
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
                {household.members.length === 0 ? (
                  <View style={styles.emptyMembersState}>
                    <Ionicons name="people" size={40} color="#9CA3AF" />
                    <Text style={styles.emptyMembersTitle}>No members yet</Text>
                    <Text style={styles.emptyMembersSubtitle}>
                      Add members to start sharing tasks and managing your
                      household together.
                    </Text>
                  </View>
                ) : (
                  household.members.map((m, index) => {
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
                            onPress={() => onRemoveMember(m.id)}
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
                  onChangeText={onChangeDescription}
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
              onRequestClose={onCancelDeleteHouse}
            >
              <Pressable
                style={styles.confirmOverlay}
                onPress={onCancelDeleteHouse}
              >
                <Pressable onPress={() => {}} style={styles.confirmCard}>
                  <Text style={styles.confirmTitle}>Confirm deletion</Text>
                  <Text style={styles.confirmBody}>
                    Are you sure you want to delete this house? This action
                    cannot be undone.
                  </Text>

                  <View style={styles.confirmButtonsRow}>
                    <Pressable
                      onPress={onCancelDeleteHouse}
                      style={({ pressed }) => [
                        styles.confirmCancelBtn,
                        pressed && { opacity: 0.9 },
                      ]}
                    >
                      <Ionicons name="close" size={18} color="#111" />
                      <Text style={styles.confirmCancelText}>Cancel</Text>
                    </Pressable>

                    <Pressable
                      onPress={onConfirmDeleteHouse}
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
                onPress={onDeleteHouse}
                style={({ pressed }) => [
                  styles.dangerButton,
                  pressed && { opacity: 0.9 },
                ]}
              >
                <Ionicons name="trash-outline" size={22} color="#FFF" />
                <Text style={styles.dangerButtonText}>Delete</Text>
              </Pressable>

              <Pressable
                onPress={onSaveHouse}
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
          onRequestClose={onCloseMemberDialog}
        >
          <Pressable
            style={styles.memberDialogOverlay}
            onPress={onCloseMemberDialog}
          />

          <SafeAreaView edges={["bottom"]} style={styles.memberDialogSafe}>
            <View style={styles.memberDialogCard}>
              <View style={styles.memberDialogHeader}>
                <Text style={styles.memberDialogTitle}>Add Member</Text>

                <Pressable
                  onPress={onCloseMemberDialog}
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
                  onChangeText={onChangeMemberQuery}
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
                    onPress={() => onSelectMember(item.id)}
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
