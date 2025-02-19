<template>
  <page>
    <page-header bordered>
      <template #left-button>
        <q-btn flat round icon="mdi-arrow-left" />

      </template>
      <template #header-title>
        <div class="name text-weight-bold">
          <q-avatar>
            <img src="1.jpg">
          </q-avatar>
          <span class="text-subtitle2 text-weight-bolder">
            Philomena Jumbe
          </span>
        </div>
      </template>
    </page-header>
    <page-Body>
      <div class="row q-pa-sm">
     <div style="width: 100%; ">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
    </page-Body>
    <page-Footer>
      <div class="row items-end">
        <div class="col">
          <q-input
        v-model="text"
        input-class="input"
        class="q-mx-md"
        autogrow
        autofocus
        borderless
        placeholder="Message" />
        </div>
        <div class="col-shrink">
          <q-btn round class="q-mb-sm q-mr-sm" color="secondary" icon="mdi-send" />
        </div>
      </div>
    </page-Footer>
  </page>
</template>

<script setup>
//
</script>
