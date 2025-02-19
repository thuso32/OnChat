<!-- header -->
<template>
  <q-header
     class="bg-white text-black">
        <q-toolbar>
          <slot name="left-button" />

          <q-toolbar-title>
            <slot name="header-title" />
          </q-toolbar-title>

          <slot name="right-button" />
        </q-toolbar>
  </q-header>
</template>
