<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" style="position: sticky;">
        <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button>
                <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
              </ion-button>
            </ion-buttons>
          <ion-title>FIL D'ACTUALITÉS</ion-title>
        </ion-toolbar>
        <ion-grid style="padding: 0;">
          <ion-row>
            <ion-segment value="custom">
              <ion-segment-button value="donnes">
                <ion-label>DONNÉS</ion-label>
              </ion-segment-button>
              <ion-segment-button value="recus">
                <ion-label>RECUS</ion-label>
              </ion-segment-button>
              <ion-segment-button value="options" id="open-custom-dialog">
                <ion-label><ion-icon slot="start" :icon="optionsOutline"></ion-icon></ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-row>
        </ion-grid>
      </ion-header>
      
      <ListActualite url="#" date="Mars 16 2023" name="Aurélien MILLOTTE" amount="€960" :icon1="handLeftOutline" :icon2="chevronForwardOutline" color="red"/>

      <BoutonFabMulti/>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonButtons, IonLabel, IonSegment, IonSegmentButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonButton, IonIcon} from '@ionic/vue';
import { chevronBackOutline, optionsOutline, handLeftOutline, chevronForwardOutline} from 'ionicons/icons';
import BoutonFabMulti from '@/components/boutons/BoutonFabMulti.vue';
import ListActualite from '@/components/list/ListActualite.vue';

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
ion-header {
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-collapse-condense ion-toolbar {
  --background: #f6f4f4;
}
ion-title {
  text-align: center;
  color: #3a3a3a;
}
.header-collapse-condense ion-toolbar:first-of-type {
  padding-top: 0px;
}
ion-button {
  --background: #f4f4f4;
  --color: #3a3a3a;
  margin: 0;
}

ion-fab-list ion-fab-button {
  width: 60px;
  height: 60px;
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