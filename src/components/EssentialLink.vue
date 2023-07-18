<template>
  <q-item
    clickable
    tag="a"
    :to="to"
    :href="href"
    :target="target"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
interface EssentialLinkBase {
  title: string;
  caption?: string;
  icon?: string;
  target?: string;
}

interface EssentialLinkTo extends EssentialLinkBase {
  href?: undefined;
  to: string;
}

interface EssentialLinkHref extends EssentialLinkBase {
  href: string;
  to?: undefined;
}

export type EssentialLinkProps = EssentialLinkTo | EssentialLinkHref

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  icon: '',
});
</script>
