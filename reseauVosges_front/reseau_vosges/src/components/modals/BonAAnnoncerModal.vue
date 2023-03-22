<template>
    <ion-content class="ion-padding">
        <ion-list>
          <ion-list-header style="background: red; height: 15px;">
            <ion-label style="color: white; font-size: 0.7em;">MPB</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-grid>
                <ion-row>
                  <ion-col size="2" size-sm="3" style="display: flex; justify-content: center;">
                    <ion-icon aria-hidden="true" :icon="handLeftOutline" />
                  </ion-col>
                  <ion-col size="8" size-sm="3" style="font-size: 0.9em;">
                    Mars 16 2023
                    <br>
                    <a href="/tabs/bonmpb" style="color: red;">Aurélien MILLOTTE - €960</a>
                  </ion-col>
                  <ion-col size="2" size-sm="3">
                    <ion-button fill="clear">
                      <a href="/tabs/bonmpb"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/></a>
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
          </ion-item>
        </ion-list>
      </ion-content>
</template>

<script lang="ts" setup>
import { IonButton, IonIcon, IonContent, IonList, IonListHeader, IonLabel, IonItem, IonGrid, IonRow, IonCol, } from '@ionic/vue';
import { chevronForwardOutline, handLeftOutline } from 'ionicons/icons';
</script>

<style>
ion-list {
  margin-top: 50px;
}
</style>