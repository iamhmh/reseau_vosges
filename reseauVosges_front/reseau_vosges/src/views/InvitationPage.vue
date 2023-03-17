<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button>
                <a href="/tabs/tab1"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
              </ion-button>
            </ion-buttons>
            <ion-title>INVITÉS</ion-title>
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
    }
    ion-title {
      text-align: center;
      color: #3a3a3a;
    }
    .header-collapse-condense ion-toolbar:first-of-type {
      padding-top: 0px;
    }
  </style>