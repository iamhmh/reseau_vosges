<template>
  <ion-page>
    <ion-header class="sticky top-0 z-10" collapse="condense">
        <ion-toolbar class="bg-white">
          <ion-buttons slot="start">
            <ion-button>
              <a href="/tabs/home">
                <ion-icon aria-hidden="true" :icon="chevronBackOutline" class="text-red-500" />
              </a>
            </ion-button>
          </ion-buttons>
          <ion-title class="text-gray-800">FIL D'ACTUALITÉS</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ListRechercherVue/>
    
  </ion-page>
</template>

<script lang="ts" setup>
import { IonIcon, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import ListRechercherVue from '@/components/home/tools/list/ListRechercher.vue';
</script>

<style>
.header-collapse-condense ion-toolbar {
    --background: #f4f4f4;
}
</style>