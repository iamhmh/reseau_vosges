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
            <img :src="Step5" alt="mon SVG"/>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col style="display: flex; justify-content: center;">
              <h6><strong>Détails de la personne</strong></h6>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-item>
                  <ion-datetime-button datetime="datetime"></ion-datetime-button>
                  <ion-modal :keep-contents-mounted="true">
                    <ion-datetime id="datetime" color="red"></ion-datetime>
                  </ion-modal>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-item>
                  <ion-label position="floating">Profession</ion-label>
                  <ion-input placeholder="Entrez votre profession ici"></ion-input>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <h6><strong>Type de visiteur</strong></h6>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col style="display: flex; justify-content: flex-start;">
              <ion-list>
                <ion-radio-group value="visitor_type">
                  <ion-item>
                    <ion-label>Visiteur</ion-label>
                    <ion-radio slot="end" value="Visiteur" color="danger"></ion-radio>
                  </ion-item>

                  <ion-item>
                    <ion-label>Directeur</ion-label>
                    <ion-radio slot="end" value="Directeur" color="danger"></ion-radio>
                  </ion-item>

                  <ion-item>
                    <ion-label>Suppléant</ion-label>
                    <ion-radio slot="end" value="Suppléant" color="danger"></ion-radio>
                  </ion-item>
                </ion-radio-group>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>


        <ion-grid style="margin-top: 135px;">
          <ion-row>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation/invitation4">
                <strong>Retour</strong>
                <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="full" id="boutonSuivant" href="/tabs/invitation">
                <strong>Enregistrer</strong>
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
import { IonDatetime, IonDatetimeButton, IonModal, IonInput, IonLabel, IonList, IonItem, IonRadio, IonRadioGroup, IonCol, IonGrid, IonRow, IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import Step5 from '../../assets/images/svg/step/Step5.svg';

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

  :root {
    --ion-color-red: red;
    --ion-color-red-rgb: 131,24,67;
    --ion-color-red-contrast: #ffffff;
    --ion-color-red-contrast-rgb: 255,255,255;
    --ion-color-red-shade: red;
    --ion-color-red-tint: red;
  }

.ion-color-red {
    --ion-color-base: var(--ion-color-red);
    --ion-color-base-rgb: var(--ion-color-red-rgb);
    --ion-color-contrast: var(--ion-color-red-contrast);
    --ion-color-contrast-rgb: var(--ion-color-red-contrast-rgb);
    --ion-color-shade: var(--ion-color-red-shade);
    --ion-color-tint: var(--ion-color-red-tint);
  }

ion-datetime {
    --background: #ffffff;
    --background-rgb: 255,241,242;
    
    border-radius: 16px;
    box-shadow: rgba(var(--ion-color-red-rgb), 0.3) 0px 10px 15px -3px;
  }
</style>