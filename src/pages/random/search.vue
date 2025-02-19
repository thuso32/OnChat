<template>
  <page>
    <page-Header>
      <template #left-button>
        <q-btn flat round icon="mdi-arrow-left" />

      </template>
      <template #header-title>
        <q-input
        v-model="text"
        input-class="input"
        autofocus
        borderless
        placeholder="Search OnChat" />
      </template>
    </page-Header>
    <page-Body>
      <div class="absolute-center">
        <h6>
          Search Page
        </h6>
      </div>
    </page-Body>
  </page>
</template>

<script setup>
import { ref } from 'vue';

//
const text = ref('')
</script>
