<template>
    <ion-searchbar :debounce="1000" @ionChange="handleChange($event)" placeholder="Chercher par nom, spécialité professionnelle"></ion-searchbar>

    <ion-list>
        <ion-item v-for="result in results" :key="result">
            <ion-avatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label >
                <strong style="color: red;">{{ result }}</strong>
                <br>
                <p>Poste</p>
            </ion-label>
            <ion-button fill="clear">
                <a href="/tabs/profilmembre"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/></a>
            </ion-button>
        </ion-item>
    </ion-list>
</template>

<script lang="ts">

import { IonLabel, IonIcon, IonAvatar, IonButton, IonItem, IonList, IonSearchbar } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { IonLabel, IonIcon, IonAvatar, IonButton, IonItem, IonList, IonSearchbar },
    setup() {
      const data = ['Alicia BERTHELOT', 'Aurélien MILLOTTE', 'Axelle MAITHEREU', 'Cyril GALMICHE', 'Daniel FERREIRA', 'Elisa GORNET', 'Francis THIERY', 'Giovanni ZINNI', 'Jean-Noel MORIZOT', 'Julie XOLIN', 'Laurent BONNET', 'Lionel BONNET', 'djbjbfjbhdjb'];
      const results = ref(data);

      return { data, results };
    },
    data() {
    return {
      chevronForwardOutline: chevronForwardOutline,
    };
  },
    methods: {
      handleChange(event : any) {
        const query = event.target.value.toLowerCase();
        this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
      },
    },
  });

</script>

<style scoped>
</style>