export type RootStackParamList = {
  splash: undefined;
  signup: undefined;
  signin: undefined;
  "reset-password": undefined;
  "otp-code": undefined;
  "task-list": undefined;
  "create-task": undefined;
  "task-details": { taskId: string };
  "edit-task": { taskId: string; header: string };
  "repair-list": undefined;
};
