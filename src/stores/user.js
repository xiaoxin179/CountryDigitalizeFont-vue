import { defineStore } from 'pinia'   // 导入 defineStore

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {}
    }),
    getters: {
        getUserId() {
            return this.user ? this.user.id : 0
        },
        getUser() {
            return this.user ||{}
        }
    },
    actions: {
        setUser(user) {
            this.user = user
        }
    },
    // 开启数据持久化
    persist: true
})

