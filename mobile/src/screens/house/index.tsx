// screens/house-settings/HouseSettingsContainer.tsx
import React, { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";
import { showMessage } from "react-native-flash-message";

import { MEMBERS_MOCK, type Member } from "../../mocks/members";
import { validateHouseForm } from "../../validators/house";
import type { House } from "../../mocks/house";
import { HOUSE_MOCK } from "../../mocks/house";

import HouseSettings from "./settings";

const HouseSettingsContainer: React.FC = () => {
  const [house, setHouse] = useState<House>(HOUSE_MOCK);

  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [memberDialogVisible, setMemberDialogVisible] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");
  const [isSearchingMembers, setIsSearchingMembers] = useState(false);
  const [memberResults, setMemberResults] = useState<Member[]>(MEMBERS_MOCK);

  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  // ✅ fix: keep timer cleanup in parent via ref (no returning cleanup from handler)
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- Handlers (stay in parent) ---
  const handleDeleteHouse = () => setConfirmDeleteVisible(true);

  const confirmDeleteHouse = () => {
    setConfirmDeleteVisible(false);
    // TODO: backend call (delete house) + navigate away
  };

  const handleSaveHouse = () => {
    const errors = validateHouseForm(house.name);
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

  const handleCopyInvite = async (): Promise<void> => {
    await Clipboard.setStringAsync(house.inviteLink);

    setCopied(true);

    if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);

    copiedTimerRef.current = setTimeout(() => {
      setCopied(false);
      copiedTimerRef.current = null;
    }, 2000);
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
    setHouse((prev) => {
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
    setHouse((prev) => ({
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
    setHouse((prev) => ({ ...prev, name }));
  };

  const updateDescription = (description: string) => {
    setHouse((prev) => ({ ...prev, description }));
  };

  // cleanup copied timer on unmount
  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
  }, []);

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
      house={house}
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
