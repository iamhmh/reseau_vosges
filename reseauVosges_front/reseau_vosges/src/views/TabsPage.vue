<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="readerOutline" />
          <ion-label>Bons</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
          <ion-label>Rechercher</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="mailOpenOutline" />
          <ion-label>Invités</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="menuOutline" size="large" />
          <ion-label>Plus</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { readerOutline, searchOutline, home, menuOutline, mailOpenOutline  } from 'ionicons/icons';
</script>

<style>
  ion-tab-button {
    --background: #ffffff;
    --color: #ffffff;
    --color-selected: #ffffff;
    --background-selected: #ffffff;
  }
  ion-tab-button ion-icon {
    --color: #ffffff;
    --color-selected: #ffffff;
  }
  ion-tab-button ion-label {
    --color: #ffffff;
    --color-selected: #ffffff;
    font-weight: bold;
    padding-bottom: 3px;
  }
  ion-tab-button ion-label:active {
    --color: #ffffff;
    --color-selected: #ffffff;
    font-weight: bold;
    padding-bottom: 3px;
    border-bottom: 3px solid #ffffff;
    border-radius: 2px;
  }

  ion-tab-bar {
    height: 90px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
    border-radius: 25px;
    --padding-top: 15px;
    --padding-bottom: 15px;
  }
  ion-tab-button {
    --background: red;
  }
</style>