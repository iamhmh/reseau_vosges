<template>
  <div class="container">
    <ion-card class="shadow-lg rounded-lg" id="bonAAnnoncer">
      <ion-card-header class="px-5 py-3 flex justify-between items-center">
          <ion-card-title class="text-gray-600 md:text-base ml-14 pl-10 text-xs">BON A ANNONCER</ion-card-title>
          <ion-button fill="clear" @click="openModal()" >
            <ion-icon aria-hidden="true" :icon="eyeOutline" class="text-gray-600" />
          </ion-button>
      </ion-card-header>
      <ion-card-content>

        <BoutonBonAAnnoncerVue number="0" :icon="peopleCircleOutline" url="/tabs/addmpb" label=" Merci pour le business" />
        <BoutonBonAAnnoncerVue number="0" :icon="peopleCircleOutline" url="/tabs/addrecommendation" label=" Recommandations" />
        <BoutonBonAAnnoncerVue number="0" :icon="chatbubbleEllipsesOutline" url="/tabs/addfacetoface" label=" Tête-à-tête" />

      </ion-card-content>
    </ion-card>

    <ion-modal :is-open="isModalOpen" ref="modal" trigger="open-bonAannoncer">
      <ion-header>
        <ion-toolbar>
          <ion-title>BONS DE LA RÉUNION</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">
              <ion-icon aria-hidden="true" :icon="closeOutline" class="text-red-500" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <BonAAnnoncerModal/>
      
    </ion-modal>
  </div>
</template>
  
<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonButtons, IonModal, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { peopleCircleOutline, chatbubbleEllipsesOutline, eyeOutline, closeOutline, } from 'ionicons/icons';
import BonAAnnoncerModal from './modals/BonAAnnoncerModal.vue';
import BoutonBonAAnnoncerVue from './home/tools/boutons/BoutonBonAAnnoncer.vue';
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
#bonAAnnoncer {
    margin: 0 auto;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
  