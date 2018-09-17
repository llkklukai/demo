import {getRequest, postRequest} from "../config/axios";

/**
 * 用户注册
 * @param params
 * @returns {*}
 */
export const registerUser = params => postRequest("register",params)

/**
 * 用户登录
 * @param params
 * @returns {*}
 */

export const login = params => postRequest("login",params)
