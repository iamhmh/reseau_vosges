<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>ACCUEIL</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-grid>
            <ion-row>
              <ion-card-title>PROCHAINE RÉUNION</ion-card-title>
              <ion-button fill="clear">
                <ion-icon aria-hidden="true" :icon="eyeOutline" />
              </ion-button>
            </ion-row>
          </ion-grid>

        </ion-card-header>
        <ion-card-subtitle>Jeudi, Mars 16, 2023</ion-card-subtitle>
        <ion-card-content>
          Réunion: <strong>En Personne</strong>
          <br>
          MPB: <strong>€22.25k</strong>
          <br>
          CONFERENCIERS: <strong>1</strong> VISITEURS: <strong>3</strong>
        </ion-card-content>


      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>BONS A ANNONCER</ion-card-title>
        </ion-card-header>

        <ion-button fill="clear">
          <ion-icon slot="start" :icon="peopleCircleOutline"></ion-icon>
          Merci pour le business
          0+
        </ion-button>
        <ion-button fill="clear">
          <ion-icon slot="start" :icon="peopleCircleOutline"></ion-icon>
          Recommandations
          0+ 
        </ion-button>
        <ion-button fill="clear">
          <ion-icon slot="start" :icon="chatbubbleEllipsesOutline"></ion-icon>
          Tête-à-tête
          0+
        </ion-button>


        <ion-card-content>
        </ion-card-content>
      </ion-card>

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

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBadge, IonItem, IonLabel, IonList, IonGrid, IonRow } from '@ionic/vue';
import { eyeOutline, peopleCircleOutline, chatbubbleEllipsesOutline } from 'ionicons/icons';

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

ion-button {
  text-align: center;
  color: #3a3a3a;
  font-size: 1em;
}

.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {
  color: #3a3a3a;
  font-size: 0.7em;
  font-weight: bold;
}

</style>