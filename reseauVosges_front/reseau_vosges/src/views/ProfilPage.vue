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

      <ListBoutonProfilPage url="#" label="PARTAGER MON PROFIL" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/mybusiness" label="MON BUSINESS" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/address" label="ADRESSE" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/contact" label="CONTACT" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/user_account_params" label="PARAMETRE DU COMPTE" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/maj_username" label="MISE A JOUR DU NOM D'UTILISATEUR" :icon="chevronForwardOutline" color="red" />
      <ListBoutonProfilPage url="/tabs/userprofile/maj_password" label="MISE A JOUR DU MOT DE PASSE" :icon="chevronForwardOutline" color="red" />

    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonIcon, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue';
import { cameraOutline, chevronForwardOutline, chevronBackOutline, } from 'ionicons/icons';
import FicheUser from '@/components/FicheUser.vue';
import ListBoutonProfilPage from '@/components/home/tools/list/ListBoutonProfilPage.vue';

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