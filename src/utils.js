import axios from "axios";

const baseUrl = "http://localhost:3000/"
const requestList = {
    "mine": baseUrl + "info/mine?token={token}"
}
/**
 * 暗黑模式切换
 */
import { useDark, useToggle } from '@vueuse/core'

/**
 * 判断登录态
 * @returns true/false
 */
const isLogin = () => {
    return !(localStorage.getItem("login") == null || localStorage.getItem("login") === false)
}
/**
 * 获取Token的Values
 * @param {String} key
 */
const getJwtValue = (key) => {
    const token = localStorage.getItem("token")
    const base64Data = token.split(".")[1]
    const jsonData = window.atob(base64Data)
    const data = JSON.parse(jsonData)
    return data[key]
}
/**
 * 判断Auth的合法性
 * @returns 1：不存在 2：过期 3：正常
 */
const checkAuth = () => {
    if (localStorage.getItem("token") == null) {
        return 1
    }
    const exp = parseInt(getJwtValue('exp'))
    const now = parseInt(new Date().getTime() / 1000)
    if (exp <= now) return 2
    return 3
}

/**
 * 发起请求
 * @param key 请求Key
 * @param params 请求参数
 */
export async function request(key, params) {
    let url = requestList[key]
    // token直接替换
    url = url.replace("{token}",localStorage.getItem("token"))
    for (let key in params) {
        url = url.replace("{"+key+"}", params[key])
    }
    let response = await axios.get(url)
    return response.data
    
}
/**
 * 获取学号
 * @returns number
 */
export function getStudentKey() {
    if (checkAuth() === 3) {
        return parseInt(getJwtValue("sub"))
    }
}

/**
 * 设置Token
 */
export function setToken(data) {
    return localStorage.setItem("token", data)
}

/**
 * 判断Token是否存在和有效
 * @param {ElNotification} ElNotification
 * @param {router} router
 */
export function checkToken(ElNotification, router) {
    const info = (msg) => {
        ElNotification({
            title: '信息',
            message: msg,
            type: 'info',
        })
    }

    if (isLogin() === false) {
        info("未初始化")
        router.push({ path: "Start" })
    } else {
        let flag = checkAuth()
        if (flag === 1) {
            info("未填写Token")
            router.push({ path: "Start" })
        } else if (flag === 2) {
            info("Token已过期")
            router.push({ path: "Setting" })
        }
    }
}

export const isDark = useDark();
export const toggleDark = useToggle(isDark);