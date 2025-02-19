<template>
  <page>
    <page-header>
    <template #header-title>

      <div class="text-weight-bolder text-primary">
        OnChat
      </div>
    </template>

    <template #right-button>
      <search-Button />

      <q-btn flat round icon="mdi-dots-vertical">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up">
          <q-list style="min-width: 100px">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="bluetooth" />
              </q-item-section>

              <q-item-section>
                Share
              </q-item-section>
            </q-item>

            <q-separator size="5px" />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="bluetooth" />
              </q-item-section>

              <q-item-section>
                Share
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="bluetooth" />
              </q-item-section>

              <q-item-section>
                Share
              </q-item-section>
            </q-item> <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-settings-outline" />
              </q-item-section>

              <q-item-section>
                Settings
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </template>
   </page-header>

   <page-body>

<div class="q-mx-md q-mt-sm q-mb-md">
  <q-btn rounded unelevated class="q-mr-sm" color="grey-4" size="10px" label="All" no-caps />

  <q-btn rounded unelevated class="q-mr-sm" color="grey-4" size="10px" label="Groups" no-caps />

  <q-btn rounded unelevated class="q-mr-sm" color="grey-4" size="10px" label="Status" no-caps />

  <q-btn rounded unelevated color="grey-4" size="10px" label="Channels" no-caps />

</div>
</page-body>
  </page>
</template>

<script setup>
//
</script>
