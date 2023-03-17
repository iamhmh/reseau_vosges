<template>
  <div id="container">
    <ion-card id="prochaineReunion">
        <ion-card-header>
          <ion-grid>
            <ion-row>
              <ion-card-title>PROCHAINE RÉUNION</ion-card-title>
              <ion-button fill="clear" @click="openModal()">
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

    <ion-modal :is-open="isModalOpen" ref="modal" trigger="open-modal" >
      <ion-header>
        <ion-toolbar>
          <ion-title style="font-size: 0.9em;">RÉSUMÉ DE LA RÉUNION</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">
              <ion-icon aria-hidden="true" :icon="closeOutline" style="color: red;"/>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
          <p id="contenuReunion">Réunion: <strong>En personne</strong></p>

          <ion-card id="mpbtotal">
            <ion-card-content>
              <ion-grid>
                <ion-row>
                  <ion-col size="2" size-sm="3">
                    <ion-icon aria-hidden="true" :icon="handLeftOutline" />
                  </ion-col>
                  <ion-col size="5" size-sm="3">
                    MPB Total du groupe
                  </ion-col>
                  <ion-col size="5" size-sm="3">
                    €8.11k
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="mpbtotal">
            <ion-card-header>
                <ion-card-title>MES BONS</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-grid>
            <ion-row>
              <ion-col size="8" size-sm="3" style="display: flex; justify-content: flex-start;">
                <a href="/tabs/addmpb" style="text-decoration: none; color: black;">
                    <ion-icon slot="start" :icon="peopleCircleOutline" ></ion-icon> Merci pour le business
                </a>
              </ion-col>
              <ion-col size="4" size-sm="3" style="display: flex; justify-content: center; font-size: 0.9em; ">
                <a href="/tabs/addmpb" style="text-decoration: none; color: black;">
                    0+
                </a>
              </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid>
            <ion-row>
              <ion-col size="8" size-sm="3" style="display: flex; justify-content: flex-start;">
                <a href="" style="text-decoration: none; color: black;"><ion-icon slot="start" :icon="peopleCircleOutline"></ion-icon> Recommandations</a>
              </ion-col>
              <ion-col size="4" size-sm="3" style="display: flex; justify-content: center; font-size: 0.9em; ">
                <a href="/tabs/addmpb" style="text-decoration: none; color: black;">
                    0+
                </a>
              </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid>
            <ion-row>
              <ion-col size="8" size-sm="3" style="display: flex; justify-content: flex-start;">
                <a href="" style="text-decoration: none; color: black;"><ion-icon slot="start" :icon="chatbubbleEllipsesOutline"></ion-icon> Tête-à-tête</a>
              </ion-col>
              <ion-col size="4" size-sm="3" style="display: flex; justify-content: center; font-size: 0.9em; ">
                <a href="/tabs/addmpb" style="text-decoration: none; color: black;">
                    0+
                </a>
              </ion-col>
            </ion-row>
        </ion-grid>
            </ion-card-content>
          </ion-card>
          
          <ion-card id="mpbtotal">
            <ion-card-header>
                <ion-card-title>CONFERENCIERS</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-avatar slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Item Avatar</ion-label>
                <p>Poste</p>
              </ion-item>
            </ion-card-content>
          </ion-card>
      </ion-content>
    </ion-modal>

  </div>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonButtons, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonAvatar, IonItem, IonLabel, IonCol } from '@ionic/vue';
import { eyeOutline, closeOutline, handLeftOutline, peopleCircleOutline, chatbubbleEllipsesOutline} from 'ionicons/icons';
import {reactive, ref} from 'vue';

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
ion-card-header{
  padding: 5px 5px 0 5px;
  align-items: center;
}
ion-card-header ion-grid ion-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
#mpbtotal {
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
#prochaineReunion {
  margin: 0 auto;
  width: 90%;
  margin-top: 160px;
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
  font-size: 0.85em;
}
#contenuReunion {
  margin-top: 35px;
}
</style>