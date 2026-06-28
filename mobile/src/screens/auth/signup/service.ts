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

export class ApiRequestError extends Error {
  status: number;
  error: string;
  path?: string;
  fields?: FieldErrorResponse[];

  constructor(response: ValidationErrorResponse) {
    super(response.message);
    this.name = "ApiRequestError";
    this.status = response.status;
    this.error = response.error;
    this.path = response.path;
    this.fields = response.fields;
  }

}

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
  try {
    const response = await apiClient.post<SignupResponse>(
      "/api/auth/signup",
      payload

    );
    console.log({response});
    return response.data;
  } catch (error) {
    console.error({error});
    if (axios.isAxiosError<ValidationErrorResponse>(error) && error.response) {

      throw new ApiRequestError(error.response.data);
    }
    throw new Error("Unable to connect to the server");
  }
}
