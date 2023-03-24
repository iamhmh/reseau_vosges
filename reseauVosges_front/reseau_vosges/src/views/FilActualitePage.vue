<template>
  <ion-page>
    <ion-content :fullscreen="true">
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
        <ion-grid class="p-0">
            <ion-row>
              <ion-segment value="custom">
                <ion-segment-button value="donnes" class="md:text-base md:border-0 md:border-transparent md:py-2 md:mx-2">DONNÉS</ion-segment-button>
                <ion-segment-button value="recus" class="md:text-base md:border-0 md:border-transparent md:py-2 md:mx-2">RECUS</ion-segment-button>
                <ion-segment-button value="options" id="open-custom-dialog" class="md:border-0 md:border-transparent md:py-2 md:mx-2">
                  <ion-label><ion-icon slot="start" :icon="optionsOutline" class="w-5 h-5"></ion-icon></ion-label>
                </ion-segment-button>
              </ion-segment>
            </ion-row>
          </ion-grid>
      </ion-header>

      <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog">
        <ion-list lines="none">
          <ion-item :button="true" :detail="false" @click="dismiss()" class="bg-red-500">
            <ion-icon :icon="personCircle" class="w-6 h-6 mr-2"></ion-icon>
            <ion-label class="text-white">MPB</ion-label>
          </ion-item>
          <ion-item :button="true" :detail="false" @click="dismiss()" class="bg-red-500">
            <ion-icon :icon="personCircle" class="w-6 h-6 mr-2"></ion-icon>
            <ion-label class="text-white">Recommandations</ion-label>
          </ion-item>
          <ion-item :button="true" :detail="false" @click="dismiss()" class="bg-red-500">
            <ion-icon :icon="personCircle" class="w-6 h-6 mr-2"></ion-icon>
            <ion-label class="text-white">Tête-à-tête</ion-label>
          </ion-item>
        </ion-list>
      </ion-modal>
      
      <ListActualite url="#" date="Mars 16 2023" name="Aurélien MILLOTTE" amount="€960" :icon1="personCircle" :icon2="chevronForwardOutline" color="red"/>

      <BoutonFabMulti/>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonModal, IonList, IonButtons, IonItem, IonLabel, IonSegment, IonSegmentButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonButton, IonIcon,  } from '@ionic/vue';
import { chevronBackOutline, optionsOutline, chevronForwardOutline, personCircle, } from 'ionicons/icons';
import BoutonFabMulti from '@/components/home/tools/boutons/BoutonFabMulti.vue';
import ListActualite from '@/components/home/tools/list/ListActualite.vue';

</script>

<style>
ion-segment-button {
    --indicator-color: red;
  }
ion-segment-button.md {
  --color: #000;
  --color-checked: red;
  --indicator-height: 4px;
}
ion-segment-button.ios {
  --color: red;
  --color-checked: #fff;
  --border-radius: 20px;
}
ion-modal#example-modal {
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}
ion-modal#example-modal ion-item {
    --background: red;
    --color: #ffffff;
    --padding-start: 0;
    --padding-end: 0;
} 
ion-modal#example-modal ion-icon {
    margin-right: 6px;
  
    width: 48px;
    height: 48px;
  
    padding: 4px 0;
  
    color: #ffffff;
}
ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
}
</style>