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
            <img :src="Step2" alt="mon SVG"/>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col style="display: flex; justify-content: center;">
              <h6><strong>Détails de la langue</strong></h6>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: center;">
              <ion-list>
                <ion-item>
                  <ion-select interface="popover" placeholder="Langage">
                    <IonSelectOption value="Français">Français</IonSelectOption>
                    <IonSelectOption value="Anglais">Anglais</IonSelectOption>
                    <IonSelectOption value="Allemand">Allemand</IonSelectOption>
                    <IonSelectOption value="Espagnole">Espagnole</IonSelectOption>
                    <IonSelectOption value="Portugais">Portugais</IonSelectOption>
                    <IonSelectOption value="Chinois">Chinois</IonSelectOption>
                    <IonSelectOption value="Japonais">Japonais</IonSelectOption>
                    <IonSelectOption value="Arabe">Arabe</IonSelectOption>
                    <IonSelectOption value="Grec">Grec</IonSelectOption>
                    <IonSelectOption value="Italien">Italien</IonSelectOption>
                    <IonSelectOption value="Russe">Russe</IonSelectOption>
                    <IonSelectOption value="Turc">Turc</IonSelectOption>
                    <IonSelectOption value="Autre">Autre</IonSelectOption>
                  </ion-select>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>


        <ion-grid style="margin-top: 410px;">
          <ion-row>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation/invitation1">
                <strong>Retour</strong>
                <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation/invitation3">
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
import { IonList, IonItem, IonSelect, IonSelectOption, IonCol, IonGrid, IonRow, IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import Step2 from '../../assets/Step2.svg';

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