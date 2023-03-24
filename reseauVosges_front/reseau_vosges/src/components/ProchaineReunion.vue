<template>
  <div class="container mx-auto">
    <ion-card class="shadow-lg rounded-lg" id="prochaineReunion">
        <ion-card-header class="px-5 py-3 flex justify-between items-center">
          <ion-card-title class="text-gray-600 md:text-base ml-14 pl-8 text-xs">PROCHAINE RÉUNION</ion-card-title>
          <ion-button fill="clear" @click="openModal()" >
            <ion-icon aria-hidden="true" :icon="eyeOutline" class="text-gray-600" />
          </ion-button>
        </ion-card-header>


        <ion-card-subtitle class="text-red-600 font-bold text-lg capitalize mt-3">Jeudi, Mars 16, 2023</ion-card-subtitle>
        <ion-card-content class="px-5 py-3">
          <ion-grid class="text-gray-700 text-sm md:text-base">
            <ion-row class="my-2">
              <ion-col size="12" size-sm="3" class="text-xs">
                Réunion: <strong>En Personne</strong>
              </ion-col>
            </ion-row>
            <ion-row class="my-2">
              <ion-col size="3" size-sm="3" class="flex justify-start text-xs">
                MPB: 
              </ion-col>
              <ion-col size="3" size-sm="3" class="flex justify-start text-xs">
                <strong>€22.25k</strong>
              </ion-col>
            </ion-row>
            <ion-row class="my-2">
              <ion-col size="3" size-sm="3" class="text-gray-600 text-xs">
              CONFERENCIERS:
              </ion-col>
              <ion-col size="3" size-sm="3" class="text-gray-600 text-xs">
              <strong>1</strong>
              </ion-col>
              <ion-col size="6" size-sm="3" class="text-gray-600 text-xs">
                VISITEURS: <strong>3</strong>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-card-content>
    </ion-card>

    <ion-modal :is-open="isModalOpen" ref="modal" trigger="open-modal" >
      <ion-header>
        <ion-toolbar>
          <ion-title class="text-sm md:text-base">RÉSUMÉ DE LA RÉUNION</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">
              <ion-icon aria-hidden="true" :icon="closeOutline" class="text-red-600" />
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
#prochaineReunion {
    margin: 0 auto;
    width: 90%;
    margin-top: 150px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>