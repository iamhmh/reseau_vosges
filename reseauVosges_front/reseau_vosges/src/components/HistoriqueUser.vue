<template>
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-card-title>HISTORIQUE</ion-card-title>
      </ion-card-header>
      <ion-list>
        <ion-item>
          <ion-label>Tête-à-tête</ion-label>
          <ion-badge color="primary">22k</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations données</ion-label>
          <ion-badge color="secondary">118k</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations reçues</ion-label>
          <ion-badge color="tertiary">34k</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires apporté</ion-label>
          <ion-badge color="success">80</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires reçu</ion-label>
          <ion-badge color="warning">70</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Visiteurs</ion-label>
          <ion-badge color="danger">1000</ion-badge>
        </ion-item>
      </ion-list>

      <ion-card-content>
      </ion-card-content>
    </ion-card>
  </div>
</template>
  
<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonList, IonItem, IonLabel } from '@ionic/vue';
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

ion-card-title {
  text-align: center;

  color: #3a3a3a;
  font-size: 0.8em;
}

ion-card-subtitle {
  text-align: center;
  color: red;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2em;
  margin-top: 10px;
}

ion-card-content {
  text-align: center;
  color: #3a3a3a;
  font-size: 0.5em;
}
</style>