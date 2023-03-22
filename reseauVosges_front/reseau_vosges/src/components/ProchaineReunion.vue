<template>
  <div id="container">
    <ion-card id="prochaineReunion">
        <ion-card-header>
          <ion-grid>
            <ion-row>
              <ion-col size="8" size-sm="3" style="display: flex; justify-content: flex-end;">
                <ion-card-title>PROCHAINE RÉUNION</ion-card-title>
              </ion-col>
              <ion-col size="4" size-sm="3" style="display: flex; justify-content: flex-end;">
                <ion-button fill="clear" @click="openModal()" >
                  <ion-icon aria-hidden="true" :icon="eyeOutline" />
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-header>
        <ion-card-subtitle style="margin-top: 0px;">Jeudi, Mars 16, 2023</ion-card-subtitle>
        <ion-card-content style="padding-top: 5px; padding-bottom: 0px">
          <ion-grid>
            <ion-row>
              <ion-col size="12" size-sm="3">
                Réunion: <strong>En Personne</strong>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3" size-sm="3" style="display: flex; justify-content: flex-start;">
                MPB: 
              </ion-col>
              <ion-col size="3" size-sm="3" style="display: flex; justify-content: flex-start;">
                <strong>€22.25k</strong>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3" size-sm="3">
              CONFERENCIERS:
              </ion-col>
              <ion-col size="3" size-sm="3">
              <strong>1</strong>
              </ion-col>
              <ion-col size="6" size-sm="3">
                VISITEURS: <strong>3</strong>
              </ion-col>
            </ion-row>
          </ion-grid>
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
      
      <ProchaineReunionModal />

    </ion-modal>

  </div>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonButtons, IonModal, IonHeader, IonToolbar, IonTitle, IonCol } from '@ionic/vue';
import { eyeOutline, closeOutline} from 'ionicons/icons';
import ProchaineReunionModal from './modals/ProchaineReunionModal.vue';
import { ref } from 'vue';

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
  margin-top: 180px;
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