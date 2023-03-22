<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="center">
        <ion-fab-button style="--background: red;--background-activated: red;--background-hover: red;">
          <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button style="--background: red;--background-activated: red;--background-hover: red; vertical-align: text-bottom;">
            <a href="/tabs/addrecommendation" style="color: white; font-size: 0.7em; font-weight: bold; text-decoration: none;">
            <ion-icon :icon="addOutline" style="color: white;"></ion-icon>
            <ion-icon :icon="handLeftOutline" style="color: white;"></ion-icon>
            Recommandations</a>
          </ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="start">
          <ion-fab-button style="--background: red;--background-activated: red;--background-hover: red;">
            <a href="/tabs/addmpb" style="color: white; font-size: 0.7em; font-weight: bold; text-decoration: none;">
            <ion-icon :icon="addOutline" style="color: white;"></ion-icon>
            <ion-icon :icon="colorPalette" style="color: white;"></ion-icon>
            MPB</a>
          </ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="end">
          <ion-fab-button style="--background: red;--background-activated: red;--background-hover: red;">
            <a href="/tabs/addfacetoface" style="color: white; font-size: 0.7em; font-weight: bold; text-decoration: none;">
            <ion-icon :icon="addOutline" style="color: white;"></ion-icon>
            <ion-icon :icon="globe" style="color: white;"></ion-icon>
            Tête-à-tête</a>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
</template>

<script lang="ts" setup>
import { IonFab, IonFabButton, IonFabList, IonIcon,  } from '@ionic/vue';
import { handLeftOutline, addOutline, colorPalette, globe } from 'ionicons/icons';
</script>

<style scoped>
ion-fab-list ion-fab-button {
  width: 60px;
  height: 60px;
}
</style>