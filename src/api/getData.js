import {getRequest, postRequest} from "../config/axios";

/**
 * 用户注册
 * @param params
 * @returns {*}
 */
export const registerUser = params => postRequest("register",params)
