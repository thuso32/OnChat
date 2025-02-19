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
          transition-hide="jump-up"
          class="menu">
          <q-list >
            <q-item clickable v-ripple>
              <q-item-section class="col-shrink">
              <q-icon size="sm" name="mdi-account-outline" />
              </q-item-section>
              <q-item-section>
                <strong class="q-m-md">
                  Profile
                </strong>
              </q-item-section>
            </q-item>
            <q-separator size="5px" />
            <q-item clickable v-ripple>
              <q-item-section class="col-shrink">
              <q-icon size="sm" name="mdi-pin-outline" />
              </q-item-section>
              <q-item-section>
                <strong class="q-m-md">
                  Pin
                </strong>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="col-shrink">
              <q-icon size="sm" name="mdi-share-outline" />
              </q-item-section>
              <q-item-section>
                <strong class="q-m-md">
                  Share
                </strong>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="col-shrink">
              <q-icon size="sm" name="mdi-cog-outline" />
              </q-item-section>
              <q-item-section>
                <strong class="q-m-md">
                  Settings
                </strong>
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

        <q-item-section side>
          <q-badge color="secondary" label="8" />
        </q-item-section>
      </q-item>

      <q-item
      to="/calls"
      clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar>
            <img src="2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <strong>
              Pholomena Jumbe
            </strong>
          </q-item-label>
          <q-item-label caption>
            Secondary line text.
            Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="secondary" label="10"/>
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

<style lang="scss">
.menu {
  width: 150px
}
</style>
