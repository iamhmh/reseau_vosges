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
                    <ion-title>BON MPB</ion-title>
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
                            <p style="margin: 0; font-size: 0.8em;">De la part de : Loïc LETANG</p>
                            <p style="margin: 0; font-size: 0.8em;">Date : 16/03/23</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <p id="textMPB">Merci à : </p>
            <ion-item lines="none" >
                <ion-grid >
                    <ion-row style="padding: 0;">
                        <ion-col size="3" size-sm="3" id="avatar">
                            <ion-avatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </ion-avatar>
                        </ion-col>
                        <ion-col size="9" size-sm="3">
                            <h6><strong>Aurélien MILLOTTE</strong></h6>
                            <p id="text">88-03 BNI REMIREMONT Porte des Hautes Vosges</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <p id="textMPB">Pour une recommandations d'un montant de : </p>
            <ion-card color="dark" style="margin-top: 10px;">
                <ion-card-header>
                    <ion-card-title style="vertical-align: middle;">
                        <ion-icon aria-hidden="true" :icon="logoEuro" style="color: white; margin-right: 10px;"/>
                        960
                    </ion-card-title>
                </ion-card-header>
            </ion-card>

            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-sm="6">
                        <p id="textMPBCard">Type de business : </p>
                        <h6 style="margin-left: 3px;"><strong>Nouveau</strong></h6>
                    </ion-col>
                    <ion-col size="6" size-sm="6">
                        <p id="textMPBCard">Type de recommandation : </p>
                        <h6><strong>Externe</strong></h6>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <p id="textMPB">Commentaires : </p>
            <p style="margin-left: 15px;">John Balland site vitrine et rédaction</p>
            

            </ion-content>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { logoEuro, chevronBackOutline, handLeftOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol },
    

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