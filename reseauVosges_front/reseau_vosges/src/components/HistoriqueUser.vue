<template>
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-grid>
            <ion-row>
              <ion-buttons>
                <ion-button><a href="">6 MOIS</a></ion-button>
                <ion-button><a href="">12 MOIS</a></ion-button>
                <ion-button><a href="">HISTORIQUE</a></ion-button>
              </ion-buttons>
            </ion-row>
          </ion-grid>
      </ion-card-header>
      <ion-list>
        <ion-item>
          <ion-label>Tête-à-tête</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations données</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Recommandations reçues</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires apporté</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Chiffre d'Affaires reçu</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>Visiteurs</ion-label>
          <ion-badge style="color: white; background-color: red;">00</ion-badge>
        </ion-item>
      </ion-list>

      <ion-card-content>
      </ion-card-content>
    </ion-card>
  </div>
</template>
  
<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonBadge, IonList, IonItem, IonLabel, IonGrid, IonRow, IonButtons, IonButton, } from '@ionic/vue';
</script>
  
<style scoped>
ion-card-header{
  padding: 5px 5px 0 5px;
  align-items: center;
}
ion-card-header ion-grid ion-row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
ion-card-header ion-grid ion-row ion-button {
  --background-color: white;
}
ion-card-header ion-grid ion-row ion-button a {
  text-decoration: none;
  color: black;
  font-size: 0.8em;
}
ion-card-header ion-grid ion-row ion-button a:hover {
  color: red;
}
ion-card-header ion-grid ion-row ion-button a:active {
  color: red;
}
ion-card-header ion-grid ion-row ion-button a:focus {
  color: red;
}
ion-card-header ion-grid ion-row ion-button a:link {
  color: red;
}
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