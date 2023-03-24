<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useStore } from "vuex";

const store = useStore();
store.dispatch("getUser");
</script>

<style>
</style>