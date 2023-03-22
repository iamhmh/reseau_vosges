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
          <ion-title>PARAMETRES</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>

        <ion-list>
          <ion-label id="labelList">Autorisations</ion-label>
          <ion-item>
            <ion-label>Appareil Photo</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Contacts</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Bibliothèque Photo</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-label id="labelList">Notifications Push</ion-label>
          <ion-item>
            <ion-label>Recommandation Reçue</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Tête-à-Tête Reçu</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Nouveau Membre Dans Votre Groupe</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-label id="labelList">Suivi de la recommandation</ion-label>
          <ion-item>
            <ion-label>Notification Push</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>E-mail</ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonList, IonItem, IonLabel, IonToggle, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,  } from '@ionic/vue';
import { chevronBackOutline, } from 'ionicons/icons';

</script>

<style scoped>
ion-content ion-list {
  margin-top: 20px;
}
ion-content ion-list ion-label#labelList {
  font-size: 0.8em;
  color: #3a3a3a;
  padding-left: 20px;
  padding-top: 10px;
}
ion-content ion-list ion-item ion-label {
  font-weight: bold;
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

ion-toggle {
    height: 10px;
    width: 65px;

    padding: 12px;

    --background: #ddd;
    --background-checked: #ddd;

    --handle-background: #ffffff;
    --handle-background-checked: red;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 50px;
    --handle-box-shadow:  0px 5px 5px rgba(0, 0, 0, 0.205);

    overflow: visible;
    contain: none;
  }
</style>