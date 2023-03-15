<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>FIL D'ACTUALITÉS</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style>
  .header-collapse-condense ion-toolbar {
    --background: #f4f4f4;
  }
  ion-title {
    text-align: center;
    color: #3a3a3a;
  }
  .header-collapse-condense ion-toolbar:first-of-type {
    padding-top: 0px;
  }
</style>