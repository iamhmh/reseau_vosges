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
                    <ion-title>BON DE RECOMMANDATIONS</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-button id="open-modal" expand="block" color="danger" style="margin-bottom: 20px;">A :</ion-button>

                <ion-item style="margin-top: 15px;">
                    <ion-label >Type de recommandation</ion-label>
                </ion-item>
                <ion-item style="margin-top: 10px;">
                    <ion-segment value="custom">
                        <ion-segment-button value="custom">
                            <ion-label>Interne</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="segment">
                            <ion-label>Externe</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </ion-item>
                
                <ion-item style="margin-top: 15px;">
                    <ion-label >Status de la recommandation</ion-label>
                </ion-item>
                <ion-item>
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>Lui ai dit que vous l'appelleriez</ion-label>
                </ion-item>
                <ion-item>
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>Ai remis votre carte de visite</ion-label>
                </ion-item>
                
                <ion-item style="margin-top: 15px;">
                    <ion-input placeholder="Recommandation"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-input placeholder="Téléphone"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-input type="email" placeholder="Email"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-input placeholder="Adresse"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-input placeholder="Commentaires"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-label>Comment est cette recommandations ?</ion-label>
                </ion-item>
                <ion-range :min="0" :max="5" :value="5" :pin="true" :ticks="true" :snaps="true"></ion-range>    

                <ion-button expand="block" color="danger" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 30px;">Confirmer</ion-button>

                <ion-modal ref="modal" trigger="open-modal" :initial-breakpoint="0.25" :breakpoints="[0, 0.25, 0.5, 0.75]">
                <ion-content class="ion-padding">
                    <ion-searchbar @click="$refs.modal.$el.setCurrentBreakpoint(0.75)" placeholder="Rechercher dans les membres"></ion-searchbar>
                    <ion-list>
                    <ion-item>
                        <ion-avatar slot="start">
                            <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                        </ion-avatar>
                        <ion-label>
                        <h2>Connor Smith</h2>
                        <p>Sales Rep</p>
                        </ion-label>
                    </ion-item>
                    </ion-list>
                </ion-content>
                </ion-modal>
            </ion-content>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonModal,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
    IonSearchbar,
    IonButton,
    IonIcon,
    IonButtons,
    IonSegment,
    IonSegmentButton,
    IonCheckbox,
    IonInput,
    IonRange,
} from '@ionic/vue';
import { logoEuro, chevronBackOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonModal,
        IonItem,
        IonList,
        IonAvatar,
        IonImg,
        IonLabel,
        IonSearchbar,
        IonButton,
        IonIcon,
        IonButtons,
        IonSegment,
        IonSegmentButton,
        IonCheckbox,
        IonInput,
        IonRange,
    },
    data() {
      return {
        logoEuro: logoEuro,
        chevronBackOutline: chevronBackOutline,
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
ion-checkbox {
    --size: 32px;
    --background-checked: red;
  }
ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid red;
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