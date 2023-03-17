<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start">
              <ion-button>
                <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
              </ion-button>
            </ion-buttons>
          <ion-title>RECHERCHER</ion-title>
        </ion-toolbar>
      </ion-header>


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
          <ion-button fill="clear" id="open-modal">
            <ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>
          </ion-button>
        </ion-item>
      </ion-list>
      
      

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonLabel, IonIcon, IonAvatar, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonSearchbar } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { IonLabel, IonIcon, IonAvatar, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonSearchbar },
    setup() {
      const data = ['Alicia BERTHELOT', 'Aurélien MILLOTTE', 'Axelle MAITHEREU', 'Cyril GALMICHE', 'Daniel FERREIRA', 'Elisa GORNET', 'Francis THIERY', 'Giovanni ZINNI', 'Jean-Noel MORIZOT', 'Julie XOLIN', 'Laurent BONNET', 'Lionel BONNET', 'djbjbfjbhdjb'];
      const results = ref(data);

      return { data, results };
    },
    data() {
    return {
      chevronForwardOutline: chevronForwardOutline,
      chevronBackOutline: chevronBackOutline,
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

<style>
  .header-collapse-condense ion-toolbar {
    --background: #f4f4f4;
  }
  ion-title {
    text-align: center;
    color: #3a3a3a;
  }
  .header-collapse-condense ion-toolbar:first-of-type {
    padding-top: 0px;
  }
</style>