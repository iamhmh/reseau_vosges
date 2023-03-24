<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="bg-gray-100 fixed border-b border-gray-300">
        <PageTitle title="ACCUEIL" />
        <FicheUser/>
      </ion-header>

      <ProchaineReunion/>

      <BonAAnnoncer/>

      <HistoriqueUser/>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader } from '@ionic/vue';
import PageTitle from '@/components/home/PageTitle.vue';
import FicheUser from '@/components/FicheUser.vue';
import ProchaineReunion from '@/components/ProchaineReunion.vue';
import BonAAnnoncer from '@/components/BonAAnnoncer.vue';
import HistoriqueUser from '@/components/HistoriqueUser.vue';


</script>

<style>
.ion-toolbar[collapse="condense"] {
  --background: #f4f4f4;
}
ion-button {
  /*text-center text-gray-700 text-base;*/
}
</style>