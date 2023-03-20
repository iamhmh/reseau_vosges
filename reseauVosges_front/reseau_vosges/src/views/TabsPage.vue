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

      <ion-modal :is-open="isModalOpen" ref="modal" trigger="plus-modal" id="modalMenu">
      <ion-header>
        <ion-toolbar id="modalToolbar">
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">
              <ion-icon aria-hidden="true" :icon="closeOutline" style="color: white;"/>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" id="modalContent">
        <ion-list lines="none" style="margin-top: 100px;">
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">BNI Business Builder</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="/tabs/userprofile" id="modalLabelA">Profil</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Résumé de la réunion</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Réglages</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Tuto nouvel utilisateur</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Nouveautés</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Support</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Commentaires</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Centre de ressources</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">A propos</a></ion-label>
          </ion-item >
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Conditions d'utilisation</a></ion-label>
          </ion-item>
          <ion-item id="modalItem">
            <ion-label id="modalLabel"><a href="#" id="modalLabelA">Déconnexion</a></ion-label>
          </ion-item>
        </ion-list>


      </ion-content>
  </ion-modal>
    </ion-tabs>

    
  
  </ion-page>
</template>

<script lang="ts" setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonModal, IonImg, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonList, IonItem } from '@ionic/vue';
import { readerOutline, searchOutline, home, menuOutline, mailOpenOutline, closeOutline } from 'ionicons/icons';
import {reactive, ref} from 'vue';

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
  #modalMenu {
    background-color: #efefef;
    --border-radius: 40px;
    padding-top : 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  #modalToolbar {
    --background: rgb(255, 0, 0);
    height: 100px;
  }
  #modalContent {
    --background: rgb(255, 0, 0);
  }
  #modalItem {
    --background: red;
  }
  #modalLabel {
    text-align: center;
  }
  #modalLabelA {
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
  }
</style>