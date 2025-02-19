<template>
  <page>
   <page-header>
    <template #header-title>

      <div class="text-weight-bolder my-font text-secondary">
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
      <q-btn rounded unelevated text-color="white" class="q-mr-sm" color="secondary" size="9px" label="All" no-caps />

      <q-btn rounded unelevated class="q-mr-sm" color="grey-5" size="9px" label="Groups" no-caps />

      <q-btn rounded unelevated class="q-mr-sm" color="grey-5" size="9px" label="Status" no-caps />

      <q-btn rounded unelevated color="grey-5" size="9px" label="Channels" no-caps />

    </div>

   <q-item
      clickable
      to="/chat/channel"
      v-ripple>
        <q-item-section top avatar>
          <q-avatar>
            <img src="1.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <strong>
              Fred Jumbe
            </strong>
          </q-item-label>
          <q-item-label caption>
            Secondary line text.
            Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="10k" />
        </q-item-section>
      </q-item>
   </page-body>
   <page-footer>
     <footer-Tabs></footer-Tabs>
   </page-footer>
  </page>
</template>

<script setup>
// 
</script>
