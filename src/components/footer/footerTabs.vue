<template>
<q-tabs
        class="text-blck"
        v-model="tab"
        no-caps
        indicator-color="transparent"
      >
     <q-route-tab
          v-for="link in navLinks"
          :key="link.id"
          :ripple="false"
          :to="link.path"
          :name="link.name"
          :icon="activeTab === link.name ? link.icon_filled : link.icon_outline"
          :label="link.label" />

      </q-tabs>
</template>

<script setup>
import { useFooterNavLinkStore } from 'src/stores/navLinks'

const { navLinks, tab } = useFooterNavLinkStore()
</script>
