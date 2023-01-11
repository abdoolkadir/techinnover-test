import { LoginSubmitForm, UserSubmitForm } from "../types/types";
import axiosInstance from "./axios";
import { authEndpoints } from "./endpoints";

export const signup = async (data: UserSubmitForm) => {
    const response = await axiosInstance.post(authEndpoints.signup, data)
    return response
}

export const login = async (data: LoginSubmitForm) => {
    const response = await axiosInstance.post(authEndpoints.login, data)
    return response
}