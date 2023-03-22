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
                    <ion-title style="font-size: 0.9em;">BON DE RECOMMANDATION</ion-title>
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
                            <p style="margin: 0; font-size: 0.8em;">De : Loïc LETANG</p>
                            <p style="margin: 0; font-size: 0.8em;">Date : 16/03/23</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <p id="textMPB">À : </p>
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

            <ion-grid>
                <ion-row>
                    <ion-col size="12" size-sm="6">
                        <p id="textMPBCard">Type de recommandation : </p>
                        <h6 style="margin-left: 3px;"><strong>Externe</strong></h6>
                    </ion-col>
                    <ion-col size="12" size-sm="6">
                        <p id="textMPBCard">Status de la recommandation : </p>
                        <h6><strong>Lui ai dit que vous l'appelleriez</strong></h6>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <p id="textMPB">Pour une recommandations d'un montant de : </p>
            <ion-card color="medium" style="margin-top: 10px; margin-bottom: 10px;">
                <ion-card-header>
                    <ion-card-subtitle style="font-size: 1em; color: #3a3a3a;"><strong>John Doe</strong></ion-card-subtitle> 
                </ion-card-header>
                <ion-card-content style="color: red;">
                    <ion-icon aria-hidden="true" :icon="callOutline" style="color: red; margin-right: 10px;"/>
                    <strong>+ 33 6 06 06 06 06</strong>
                </ion-card-content>
            </ion-card>
            <ion-card color="medium" style="margin-top: 0px;">
                <ion-card-content style="font-size: 1em; color: #3a3a3a; padding: 10px;">
                    Cornimont
                </ion-card-content>
            </ion-card>

            <p id="textMPB">Commentaires : </p>
            <p style="margin-left: 15px; margin-top: 5px;">John Doe lorem ipsum, alnsdbhhsbjsfbdsfgfgffsgfgs</p>

            <p id="textMPB">Comment est cette recommandation ?</p>
            <ion-range :min="0" :max="5" :value="5" :pin="true" :ticks="true" :snaps="true" style="width: 80%;"></ion-range>
            
            </ion-content>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonRange, IonCardContent, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { callOutline, chevronBackOutline, handLeftOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonRange, IonCardContent, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonItem, IonGrid, IonRow, IonCol },
    

    data() {
      return {
        callOutline: callOutline,
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


ion-range::part(tick) {
    background: rgb(89, 89, 89);
  }

  ion-range::part(tick-active) {
    background: rgb(89, 89, 89);
  }

  ion-range::part(pin) {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: red;
    color: #fff;

    border-radius: 50%;
    transform: scale(1.01);

    top: -20px;

    min-width: 28px;
    height: 28px;
    transition: transform 120ms ease, background 120ms ease;
  }

  ion-range::part(pin)::before {
    content: none;
  }

  ion-range::part(knob) {
    background: red;
  }

  ion-range::part(bar) {
    background: rgb(89, 89, 89);
  }

  ion-range::part(bar-active) {
    background: rgb(89, 89, 89);
  }
</style>