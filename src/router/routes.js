import chat from 'src/pages/chat/chat.vue'
import calls from 'src/pages/call/calls.vue'
import search from 'src/pages/random/search.vue'
import channels from 'src/pages/chat/channels.vue'
import groups from 'src/pages/chat/groups.vue'
import status from 'src/pages/chat/status.vue'
import profile from 'src/pages/profile/profile.vue'
import message from 'src/pages/chat/message.vue'


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/chat'
      },
      {
        path: '/chat',
        component: chat,
        children: [
          {
            path: '/chat/groups',
            component: groups
          },
          {
            path: '/chat/status',
            component: status
          },
          {
            path: '/chat/channels',
            component: channels
          },
          {
            path: '/chat/message',
            component: message
          }
        ]
      },
      {
        path: '/calls',
        component: calls
      },

      {
        path: '/profile',
        component: profile
      },
      {
        path: '/Search',
        component: search
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
