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
            <img :src="Step3" alt="mon SVG"/>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col style="display: flex; justify-content: center;">
              <h6><strong>Détails du contact</strong></h6>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-item>
                  <ion-label position="floating">Téléphone</ion-label>
                  <ion-input placeholder="Entrez votre téléphone ici"></ion-input>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input placeholder="Entrez votre email ici"></ion-input>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-item>
                  <ion-label position="floating">Numéro de mobile</ion-label>
                  <ion-input placeholder="Entrez votre numéro de mobile ici"></ion-input>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>


        <ion-grid style="margin-top: 230px;">
          <ion-row>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation/invitation2">
                <strong>Retour</strong>
                <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation/invitation4">
                <strong>Suivant</strong>
                <ion-icon slot="end" :icon="chevronForwardOutline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonInput, IonLabel, IonList, IonItem, IonCol, IonGrid, IonRow, IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import Step3 from '../../assets/images/svg/step/Step3.svg';

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

ion-button#boutonSuivant {
    --background: red;
    --background-hover: red;
    --background-activated: red;
    --background-focused: red;

    --color: white;

    --box-shadow: 3px 5px 6px 0 rgb(0, 0, 0, 0.5);

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
</style>