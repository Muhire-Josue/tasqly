import { apiClient } from "../../../utils/axiosInstance";

export type SignupRole = "TENANT" | "LANDLORD";

export type SignupRequest = {
  email: string;
  password: string;
  role: SignupRole;
};

export type SignupResponse = {
  id: number;
  name: string;
  email: string;
  role: SignupRole;
  token: string;
};

export type ApiErrorResponse = {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
};

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
  const response = await apiClient.post<SignupResponse>(
    "/api/auth/signup",
    payload
  );
  return response.data;
}
