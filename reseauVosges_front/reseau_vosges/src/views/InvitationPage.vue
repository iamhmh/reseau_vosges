<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="header-collapse-condense">
        <ion-toolbar class="bg-gray-500">
          <ion-buttons slot="start">
            <ion-button>
              <a href="/tabs/home" class="text-red-500"><ion-icon aria-hidden="true" :icon="chevronBackOutline" /></a>
            </ion-button>
          </ion-buttons>
          <ion-title class="text-center text-gray-600">INVITÉS</ion-title>
        </ion-toolbar>
      </ion-header>
  
        <InviterGroupe />

      </ion-content>
    </ion-page>
 </template>
  
<script setup lang="ts">
import { IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import InviterGroupe from '@/components/InviterGroupe.vue';
</script>

<style>
.header-collapse-condense ion-toolbar {
    --background: #f4f4f4;
    border-bottom: 1px solid #e5e5e5;
}
</style>