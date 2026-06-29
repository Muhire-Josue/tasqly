import axios from "axios";
import { apiClient } from "../../../utils/axiosInstance";

export type SignupRole = "TENANT" | "LANDLORD";

export type SignupRequest = {
  name: string;
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

export type FieldErrorResponse = {
  field: string;
  message: string;
};

export type ValidationErrorResponse = ApiErrorResponse & {
  fields?: FieldErrorResponse[];
};

export type SignupResult =
  | {
      success: true;
      data: SignupResponse;
    }
  | {
      success: false;
      error: ValidationErrorResponse;
    };

export async function signup(payload: SignupRequest): Promise<SignupResult> {
  try {
    const response = await apiClient.post<SignupResponse>(
      "/api/auth/signup",
      payload,
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError<ValidationErrorResponse>(error)) {
      if (error.response) {
        return {
          success: false,
          error: error.response.data,
        };
      }

      return {
        success: false,
        error: {
          timestamp: new Date().toISOString(),
          status: 0,
          error: "Network Error",
          message: "Service not available. Please check your internet connection.",
          path: "/api/auth/signup",
        },
      };
    }

    return {
      success: false,
      error: {
        timestamp: new Date().toISOString(),
        status: 0,
        error: "Unexpected Error",
        message: "Something went wrong. Please try again.",
        path: "/api/auth/signup",
      },
    };
  }
}
