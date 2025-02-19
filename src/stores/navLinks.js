import { defineStore, acceptHMRUpdate } from 'pinia'
import { uid } from 'quasar'
import { ref } from 'vue'

export const useFooterNavLinkStore = defineStore('footerNavLink', () => {

  const navLinks = ref([
    {
      id: uid(),
      icon_outline: 'mdi-chat-outline',
      name: 'chat',
      label: 'Chats',
      path: '/chat'
    },
    {
      id: uid(),
      icon_outline: 'mdi-account-multiple-outline',
      name: 'people',
      label: 'People',
      path: '/people'
    },
    {
      id: uid(),
      icon_outline: 'mdi-phone-outline',
      name: 'call',
      label: 'Calls',
      path: '/call'
    },
    {
      id: uid(),
      icon_outline: 'mdi-account-outline',
      name: 'me',
      label: 'Me',
      path: '/profile'
    }
  ])

  const tab = ref('me')

  return {
    navLinks,
    tab
  }

})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFooterNavLinkStore, import.meta.hot))
}
