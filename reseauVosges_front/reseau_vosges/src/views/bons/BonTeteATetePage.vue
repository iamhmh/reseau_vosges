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
                    <ion-title>TÊTE-À-TÊTE</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
            <ion-item lines="none" id="topItem">
                <ion-grid >
                    <ion-row >
                        <ion-col size="2">
                            <ion-icon aria-hidden="true" :icon="handLeftOutline" style=" margin-right: 10px;"/>
                        </ion-col>
                        <ion-col size="10">
                            <p style="margin: 0; font-size: 0.8em;">Suivi de tête-à-tête</p>
                            <p style="margin: 0; font-size: 0.8em;">Groupe : 88-03 BNI REMIREMONT Porte des Hautes Vosges</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <p id="textMPB">Rencontre avec : </p>
            <ion-item lines="none" >
                <ion-grid>
                    <ion-row style="padding: 0;">
                        <ion-col size="3" size-sm="3" id="avatar">
                            <ion-avatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </ion-avatar>
                        </ion-col>
                        <ion-col size="9" size-sm="3" style="margin-top: auto; margin-bottom: auto;">
                            <h6><strong>Aurélien MILLOTTE</strong></h6>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-sm="6">
                        <p id="textMPBCard">Initié par : </p>
                        <h6 style="margin-left: 3px;"><strong>Aurélien MILLOTTE</strong></h6>
                    </ion-col>
                    <ion-col size="6" size-sm="6">
                        <p id="textMPBCard">Date : </p>
                        <h6><strong>02 Novembre 2022</strong></h6>
                    </ion-col>
                </ion-row>
                <ion-row style="margin-top: 10px;">
                    <ion-col size="12" size-sm="6">
                        <p id="textMPBCard">Lieu : </p>
                        <h6 style="margin-left: 3px;"><strong>Bureau</strong></h6>
                    </ion-col>
                </ion-row>
                <ion-row style="margin-top: 10px;">
                    <ion-col size="12" size-sm="6">
                        <p id="textMPBCard">Sujet de conversation : </p>
                        <h6 style="margin-left: 3px;"><strong>Sujet commun transverse</strong></h6>
                    </ion-col>
                </ion-row>
            </ion-grid>

            </ion-content>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { logoEuro, chevronBackOutline, handLeftOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol },
    

    data() {
      return {
        logoEuro: logoEuro,
        chevronBackOutline: chevronBackOutline,
        handLeftOutline: handLeftOutline,
      };

    },
});
</script>
<style>
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

ion-item#topItem {
  --background: #cecece;
}
#avatar {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
}

h6 {
    color: #3a3a3a;
    margin: 0;
}

p#text {
    color: #3a3a3a;
    margin: 0;
    font-size: 0.9em;
}
#textMPB {
    color: #3a3a3a;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 0px;
    font-size: 0.9em;
}
#textMPBCard {
    color: #3a3a3a;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 0.9em;
}
</style>