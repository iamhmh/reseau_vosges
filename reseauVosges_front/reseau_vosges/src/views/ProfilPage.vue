<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button>
              <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
            </ion-button>
          </ion-buttons>
          <ion-title>MON PROFIL</ion-title>
        </ion-toolbar>
       <FicheUser />
        <a href="/tabs/userprofile/photo" style="text-decoration: none; color: red; margin-left: 40px; "><ion-icon :icon="cameraOutline"></ion-icon></a>
      </ion-header>
      <ion-content>

      <ion-item>
        <ion-label>
          <a href="">PARTAGER MON PROFIL</a>
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/mybusiness">MON BUSINESS</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/address">ADRESSE</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/contact">CONTACT</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/user_account_params">PARAMETRE DU COMPTE</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/maj_username">MISE A JOUR DU NOM D'UTILISATEUR</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-label>
          <a href="/tabs/userprofile/maj_password">MISE A JOUR DU MOT DE PASSE</a> 
        </ion-label>
        <ion-icon :icon="chevronForwardOutline" slot="end" style="color: red;"></ion-icon>
      </ion-item>

    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonItem, IonLabel, IonIcon, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue';
import { cameraOutline, chevronForwardOutline, chevronBackOutline,  } from 'ionicons/icons';
import FicheUser from '@/components/FicheUser.vue';

</script>
  
<style>
ion-header {
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-collapse-condense ion-toolbar {
  --background: #f6f4f4;
}
ion-title {
  text-align: center;
  color: #3a3a3a;
}
.header-collapse-condense ion-toolbar:first-of-type {
  padding-top: 0px;
}
ion-item ion-label a {
  color: red;
  text-decoration: none;
  font-size: 0.8em;
}
</style>