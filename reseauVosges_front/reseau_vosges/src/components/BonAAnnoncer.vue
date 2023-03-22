<template>
  <div id="container">
    <ion-card>
        <ion-card-header>
          <ion-grid>
            <ion-row>
              <ion-col size="8" size-sm="3" style="display: flex; justify-content: flex-end;">
                <ion-card-title>BONS A ANNONCER</ion-card-title>
              </ion-col>
              <ion-col size="4" size-sm="3" style="display: flex; justify-content: flex-end;">
                <ion-button fill="clear" @click="openModal()">
                <ion-icon aria-hidden="true" :icon="eyeOutline" />
              </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
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

    <ion-modal :is-open="isModalOpen" ref="modal" trigger="open-bonAannoncer">
      <ion-header>
        <ion-toolbar>
          <ion-title>BONS DE LA RÉUNION</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">
              <ion-icon aria-hidden="true" :icon="closeOutline" style="color: red;" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <BonAAnnoncerModal />
      
    </ion-modal>
  </div>
</template>
  
<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonButtons, IonModal, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, } from '@ionic/vue';
import { peopleCircleOutline, chatbubbleEllipsesOutline, eyeOutline, closeOutline, } from 'ionicons/icons';
import BonAAnnoncerModal from './modals/BonAAnnoncerModal.vue';
import { ref} from 'vue';

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
}
ion-card-header ion-grid ion-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-list {
  margin-top: 50px;
}
ion-card {
  margin: 0 auto;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
ion-card-title {
  text-align: center;
  color: #3a3a3a;
  font-size: 0.8em;
}
ion-card-content {
  color: #3a3a3a;
  font-size: 1em;
}
</style>
  