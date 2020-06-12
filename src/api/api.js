import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "da2dd5a2-f7ca-4f57-b857-22bd9b8bb713"
  }
})

export const getUsersReq = (currentPage, pageSize) => {
  return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    .then(res => res.data)
}

export const authMeReq = () => {
  return instance.get(`/auth/me`)
    .then(res => res.data)
}

export const followReq = (userId) => {
  return instance.post(`/follow/${userId}`, {})
    .then(res => res.data)
}

export const unFollowReq = (userId) => {
  return instance.delete(`/follow/${userId}`)
    .then(res => res.data)
}

export const getProfileReq = (userId) => {
  return instance.get(`/profile/${userId}`)
    .then(res => res.data)
}

export const getStatus = (userId) => {
  return instance.get(`/profile/status/${userId}`)
    .then(res => res.data)
}

export const updateStatus = (statusText) => {
  return instance.put(`/profile/status`, {status: statusText})
    .then(res => res.data)
}

export const loginReq = (email, password, rememberMe = false) => {
  return instance.post(`/auth/login`, {email, password, rememberMe})
    .then(res => res.data)
}

export const logoutReq = () => {
  return instance.delete(`/auth/login`)
    .then(res => res.data)
}
