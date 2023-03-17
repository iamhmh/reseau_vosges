<template>
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-card-title>BONS A ANNONCER</ion-card-title>
        <ion-button fill="clear" id="open-bonAannoncer">
          <ion-icon aria-hidden="true" :icon="eyeOutline" />
        </ion-button>
      </ion-card-header>
      <ion-card-content>
        <a href="/tabs/addmpb" style="text-decoration: none; color: black;"><ion-icon slot="start" :icon="peopleCircleOutline" ></ion-icon>Merci pour le business</a> 0+
        <br>
        <a href="" style="text-decoration: none; color: black;"><ion-icon slot="start" :icon="peopleCircleOutline"></ion-icon>Recommandations</a> 0+
        <br>
        <a href="" style="text-decoration: none; color: black;"><ion-icon slot="start" :icon="chatbubbleEllipsesOutline"></ion-icon>Tête-à-tête</a> 0+
      </ion-card-content>
    </ion-card>

    <ion-modal ref="modal" trigger="open-bonAannoncer">
      <ion-header>
        <ion-toolbar>
          <ion-title style="font-size: 0.9em;">BONS DE LA RÉUNION</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="cancel()">
              <ion-icon aria-hidden="true" :icon="closeOutline" style="color: red;" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-list-header style="background: red; height: 15px;">
            <ion-label style="color: white; font-size: 0.7em;">MPB</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-grid>
                <ion-row>
                  <ion-col size="2" size-sm="3" style="display: flex; justify-content: center;">
                    <ion-icon aria-hidden="true" :icon="handLeftOutline" />
                  </ion-col>
                  <ion-col size="8" size-sm="3" style="font-size: 0.9em;">
                    Mars 16 2023
                    <br>
                    <a href="" target="_blank" style="color: red;">Aurélien MILLOTTE - €960</a>
                  </ion-col>
                  <ion-col size="2" size-sm="3">
                    <ion-button fill="clear" id="open-modal">
                      <ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
  </div>
</template>
  
<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonButtons, IonModal, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/vue';
import { peopleCircleOutline, chatbubbleEllipsesOutline, eyeOutline, closeOutline, chevronForwardOutline, handLeftOutline } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core/components';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
  },
  data() {
    return {
      eyeOutline: eyeOutline,
      closeOutline: closeOutline,
      peopleCircleOutline: peopleCircleOutline,
      chatbubbleEllipsesOutline: chatbubbleEllipsesOutline,
      chevronForwardOutline: chevronForwardOutline,
      handLeftOutline: handLeftOutline,
      message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
    };
  },
  methods: {
    cancel() {
      this.$refs.modal.$el.dismiss(null, 'cancel');
    },
  },
});
</script>
  
<style scoped>
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
  