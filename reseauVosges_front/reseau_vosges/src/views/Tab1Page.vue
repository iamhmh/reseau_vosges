<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>ACCUEIL</ion-title>
        </ion-toolbar>
        <FicheUser/>
      </ion-header>

      <ProchaineReunion/>

      <BonAAnnoncer/>

      <HistoriqueUser/>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
import FicheUser from '@/components/FicheUser.vue';
import ProchaineReunion from '@/components/ProchaineReunion.vue';
import BonAAnnoncer from '@/components/BonAAnnoncer.vue';
import HistoriqueUser from '@/components/HistoriqueUser.vue';

</script>

<style>
.header-collapse-condense ion-toolbar {
  --background: #f4f4f4;
}

ion-header {
    background: #f4f4f4;
    position: fixed;
}
ion-title {
  text-align: center;
  color: #3a3a3a;
}
ion-button {
  text-align: center;
  color: #3a3a3a;
  font-size: 1em;
}
</style>