// screens/house-settings/HouseSettingsContainer.tsx
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";
import { showMessage } from "react-native-flash-message";

import { MEMBERS_MOCK, Member } from "../../mocks/members";
import { HOUSEHOLD_MOCK } from "../../mocks/household";
import { validateHouseholdForm } from "../../validators/household";

import HouseSettings from "./settings";

export type Household = {
  id?: string;
  name: string;
  inviteLink: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any; // keep as-is since you use local asset fallback; you can tighten later
  members: Member[];
};

const HouseSettingsContainer: React.FC = () => {
  const [household, setHousehold] = useState<Household>(HOUSEHOLD_MOCK);

  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [memberDialogVisible, setMemberDialogVisible] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");
  const [isSearchingMembers, setIsSearchingMembers] = useState(false);
  const [memberResults, setMemberResults] = useState<Member[]>(MEMBERS_MOCK);

  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  // --- Handlers (stay in parent) ---
  const handleDeleteHouse = () => setConfirmDeleteVisible(true);

  const confirmDeleteHouse = () => {
    setConfirmDeleteVisible(false);
    // TODO: backend call (delete house) + navigate away
  };

  const handleSaveHouse = () => {
    const errors = validateHouseholdForm(household.name);
    if (errors.length > 0) {
      showMessage({ message: errors[0], type: "danger", icon: "danger" });
      return;
    }

    // TODO: backend call (save)
    showMessage({
      message: "House settings saved successfully",
      type: "success",
      icon: "success",
    });
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
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
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

  const updateHouseName = (name: string) => {
    setHousehold((prev) => ({ ...prev, name }));
  };

  const updateDescription = (description: string) => {
    setHousehold((prev) => ({ ...prev, description }));
  };

  // --- Simulated backend search (side-effect stays in parent) ---
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
    <HouseSettings
      household={household}
      houseImageUri={houseImageUri}
      copied={copied}
      memberDialogVisible={memberDialogVisible}
      memberQuery={memberQuery}
      isSearchingMembers={isSearchingMembers}
      memberResults={memberResults}
      confirmDeleteVisible={confirmDeleteVisible}
      onChangeHouseImage={handleChangeHouseImage}
      onCopyInvite={handleCopyInvite}
      onOpenMemberDialog={openMemberDialog}
      onCloseMemberDialog={closeMemberDialog}
      onSelectMember={handleSelectMember}
      onRemoveMember={handleRemoveMember}
      onDeleteHouse={handleDeleteHouse}
      onConfirmDeleteHouse={confirmDeleteHouse}
      onCancelDeleteHouse={() => setConfirmDeleteVisible(false)}
      onSaveHouse={handleSaveHouse}
      onChangeMemberQuery={setMemberQuery}
      onChangeHouseName={updateHouseName}
      onChangeDescription={updateDescription}
    />
  );
};

export default HouseSettingsContainer;
