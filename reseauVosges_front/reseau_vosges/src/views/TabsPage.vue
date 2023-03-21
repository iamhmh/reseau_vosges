<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="actualite" href="/tabs/actualite">
          <ion-icon aria-hidden="true" :icon="readerOutline" />
          <ion-label>Bons</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="rechercher" href="/tabs/rechercher">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
          <ion-label>Rechercher</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="invitation" href="/tabs/invitation">
          <ion-icon aria-hidden="true" :icon="mailOpenOutline" />
          <ion-label>Invités</ion-label>
        </ion-tab-button>

        <ion-tab-button @click="openModal()">
          <ion-icon aria-hidden="true" :icon="menuOutline" size="large" />
          <ion-label>Plus</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

      <ion-modal :is-open="isModalOpen" ref="modal" id="modalMenu">
        <ion-header>
          <ion-toolbar id="modalToolbar">
            <ion-buttons slot="end">
              <ion-button @click="closeModal()">
                <ion-icon aria-hidden="true" :icon="closeOutline" style="color: white;"/>
              </ion-button>
            </ion-buttons>
            <ion-grid>
              <ion-row>
                <ion-col size="12" style="display: flex; justify-content: center; color: white; margin-left: 22px;">
                  <h4><strong>RESEAU<br>VOSGES</strong></h4>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-toolbar>
        </ion-header>

        <MenuModal/>
        
      </ion-modal>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonModal, IonHeader, IonToolbar, IonButtons, IonButton,} from '@ionic/vue';
import { readerOutline, searchOutline, home, menuOutline, mailOpenOutline, closeOutline } from 'ionicons/icons';
import MenuModal from '../components/modals/MenuModal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}
 
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style>
  ion-tab-button {
    --background: #ffffff;
    --color: #ffffff;
    --color-selected: #ffffff;
    --background-selected: #ffffff;
  }
  ion-tab-button ion-icon {
    --color: #ffffff;
    --color-selected: #ffffff;
  }
  ion-tab-button ion-label {
    --color: #ffffff;
    --color-selected: #ffffff;
    font-weight: bold;
    padding-bottom: 3px;
  }
  ion-label:active {
    border-bottom: #ffffff 2px solid;
  }
  ion-tab-bar {
    height: 90px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
    border-radius: 25px;
    --padding-top: 15px;
    --padding-bottom: 15px;
  }
  ion-tab-button {
    --background: red;
  }
</style>