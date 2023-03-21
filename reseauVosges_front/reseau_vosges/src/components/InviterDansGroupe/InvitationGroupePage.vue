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
            <ion-title style="font-size: 0.9em;">INVITER DANS UN GROUPE</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>

          <ion-grid>
            <ion-row>
              <ion-col style="display: flex; justify-content: center;">
                <h6><strong>Détails du groupe</strong></h6>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="display: flex; justify-content: flex-start;">
                <ion-list>
                  <ion-item>
                    <ion-select interface="popover" placeholder="France">
                      <IonSelectOption value="-">-</IonSelectOption>
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="display: flex; justify-content: flex-start;">
                <ion-list>
                  <ion-item>
                    <ion-select interface="popover" placeholder="88 - Vosges">
                      <IonSelectOption value="88 - Vosges">88 - Vosges</IonSelectOption>
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="display: flex; justify-content: flex-start;">
                <ion-list>
                  <ion-item>
                    <ion-select interface="popover" placeholder="Groupe">
                      <IonSelectOption value="88-01 Epinal Les Images">88-01 Epinal Les Images</IonSelectOption>
                      <IonSelectOption value="88-02 St-Dié Amérigo">88-02 St-Dié Amérigo</IonSelectOption>
                    </ion-select>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
  
          <ion-grid style="margin-top: 340px;">
            <ion-row>
              <ion-col></ion-col>
              <ion-col>
                <ion-button expand="full" id="boutonSuivant">
                  <strong>PARTAGER</strong>
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