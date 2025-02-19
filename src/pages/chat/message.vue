<template>
  <transition
  appear
  enter-active-class="animated fadeIn slower delay-8s repeat-2"
  leave-active-class="animated fadeOut slower delay-8s repeat-2">
  <page>
    <page-Header>
    </page-Header>
    <page-Body>
      <div class="row justify-between items-end q-ma-md">
        <div style="width: 100%;">
          <q-chat-message
           stamp="7 minutes ago"
           sent>
        <div>
          Hey there!
        </div>
        <div>
          Have you seen Quasar?
        </div>
      </q-chat-message>

      <q-chat-message>
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
    </page-Body>
    <page-Footer>
      <div class="row items-end">
        <div class="col">
          <q-input
          borderless
          v-model="message"
          placeholder="Message"
          input-class="input"
          class="q-px-md"
          autogrow
          autofocus>
          </q-input>
        </div>
        <div class="col-shrink">
          <q-btn
          round
          color="secondary"
          class="q-ma-sm q-mr-md"
          icon="mdi-send-variant" />
        </div>
      </div>
    </page-Footer>
  </page>
</transition>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
</script>
