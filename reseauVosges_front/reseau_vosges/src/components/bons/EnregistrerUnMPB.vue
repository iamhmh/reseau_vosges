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
                    <ion-title>ENREGISTRER UN MPB</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-button id="open-modal" expand="block" color="danger">Merci à :</ion-button>

                <ion-item style="margin-top: 30px;">
                    <ion-icon aria-hidden="true" :icon="logoEuro" style="color: red; margin-right: 10px;"/>
                    <ion-input type="number" placeholder="Montant"></ion-input>
                </ion-item>
                
                <ion-list style="margin-top: 30px;">
                    <ion-item>
                        <ion-select interface="popover" placeholder="Type de business">
                            <IonSelectOption value="nouveau">Nouveau</IonSelectOption>
                            <IonSelectOption value="recurrent">Récurrent</IonSelectOption>
                        </ion-select>
                    </ion-item>
                </ion-list>

                <ion-list style="margin-top: 30px;" >
                    <ion-item>
                        <ion-select interface="popover" placeholder="Type de recommandation" >
                            <IonSelectOption value="interne">Interne</IonSelectOption>
                            <IonSelectOption value="externe">Externe</IonSelectOption>
                            <IonSelectOption value="essaimage">Essaimage</IonSelectOption>
                        </ion-select>
                    </ion-item>
                </ion-list>

                <ion-list style="margin-top: 30px;">
                    <ion-item>
                        <ion-textarea placeholder="Commentaires :"></ion-textarea>
                    </ion-item>
                </ion-list>

                <ion-button expand="block" color="danger" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 30px;">Confirmer</ion-button>

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
    IonInput,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButtons,

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
        IonInput,
        IonIcon,
        IonSelect,
        IonSelectOption,
        IonTextarea,
        IonButtons,
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

</style>