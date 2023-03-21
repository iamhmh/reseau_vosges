<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start">
              <ion-button>
                <a href="/tabs/invitation"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
              </ion-button>
            </ion-buttons>
          <ion-title style="font-size: 0.9em;">ENREGISTER UNE VISITE</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid style="background-color: #f4f4f4;">
          <ion-row style="display: flex; justify-content: center; margin-top: 5px; margin-bottom: 5px;">
            <img :src="Step5" alt="mon SVG"/>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import Step5 from '../../assets/Step5.svg';

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