<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="uiStore.toggleSideMenu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="uiStore.isSideMenuOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import type { EssentialLinkProps } from 'components/EssentialLink.vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useUiStore } from 'src/stores/ui';

const uiStore = useUiStore();

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Typography',
    caption: 'Quasar letter types',
    icon: 'lab la-font-awesome',
    to: 'typography'
  },
  {
    title: 'Flex Layout',
    caption: 'Styles using flex',
    icon: 'las la-pager',
    to: 'flex'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'las la-book',
    href: 'https://quasar.dev',
    target: '_blank'
  }
];
</script>
