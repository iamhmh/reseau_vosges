<template>
  <div class="container">
    <ion-card class="w-90 my-20 mb-10 rounded-lg shadow-md">
      <ion-card-header class="py-5">
        <ion-grid>
          <ion-row class="justify-end">
            <ion-buttons>
              <ion-button class="text-black"><a href="" class="text-sm hover:text-red-600 focus:text-red-600 active:text-red-600 visited:text-red-600">6 MOIS</a></ion-button>
              <ion-button class="text-black"><a href="" class="text-sm hover:text-red-600 focus:text-red-600 active:text-red-600 visited:text-red-600">12 MOIS</a></ion-button>
              <ion-button class="text-black"><a href="" class="text-sm hover:text-red-600 focus:text-red-600 active:text-red-600 visited:text-red-600">HISTORIQUE</a></ion-button>
            </ion-buttons>
          </ion-row>
        </ion-grid>
      </ion-card-header>

      <ion-list>
        <ion-item>
          <ion-label>Tête-à-tête</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations données</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations reçues</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires apporté</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires reçu</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Visiteurs</ion-label>
          <ion-badge class="bg-red-500" style="color: white;">00</ion-badge>
        </ion-item>
      </ion-list>

      <ion-card-content></ion-card-content>
    </ion-card>
  </div>
</template>
  
<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonBadge, IonList, IonItem, IonLabel, IonGrid, IonRow, IonButtons, IonButton, } from '@ionic/vue';
</script>
  
<style scoped>
ion-card {
  margin: 0 auto;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>