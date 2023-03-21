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
                    <ion-title>BON DE TÊTE-À-TÊTE</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-button id="open-modal" expand="block" color="danger" style="margin-bottom: 20px;">A :</ion-button>

                <ion-list style="margin-top: 30px;" >
                    <ion-item>
                        <ion-select interface="popover" placeholder="Initié par :" >
                            <IonSelectOption value="interne">Moi-même</IonSelectOption>
                        </ion-select>
                    </ion-item>
                </ion-list>
                
                <ion-item style="margin-top: 15px;">
                    <ion-input placeholder="Où vous-êtes vous rencontrés ?"></ion-input>
                </ion-item>

                <ion-item style="margin-top: 15px;">
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
  
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime" color="red"></ion-datetime>
                    </ion-modal>
                </ion-item>
                
                <ion-list style="margin-top: 30px;">
                    <ion-item>
                        <ion-textarea placeholder="Sujet de conversation :"></ion-textarea>
                    </ion-item>
                </ion-list>

                <ion-button expand="block" color="danger" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 30px; border-radius: 50px;">Confirmer</ion-button>

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
    IonSelect,
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonTextarea,

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
        IonSelect,
        IonSelectOption,
        IonInput,
        IonDatetime,
        IonDatetimeButton,
        IonTextarea,
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

:root {
    --ion-color-red: red;
    --ion-color-red-rgb: 131,24,67;
    --ion-color-red-contrast: #ffffff;
    --ion-color-red-contrast-rgb: 255,255,255;
    --ion-color-red-shade: red;
    --ion-color-red-tint: red;
  }

.ion-color-red {
    --ion-color-base: var(--ion-color-red);
    --ion-color-base-rgb: var(--ion-color-red-rgb);
    --ion-color-contrast: var(--ion-color-red-contrast);
    --ion-color-contrast-rgb: var(--ion-color-red-contrast-rgb);
    --ion-color-shade: var(--ion-color-red-shade);
    --ion-color-tint: var(--ion-color-red-tint);
  }

ion-datetime {
    --background: #ffffff;
    --background-rgb: 255,241,242;
    
    border-radius: 16px;
    box-shadow: rgba(var(--ion-color-red-rgb), 0.3) 0px 10px 15px -3px;
  }
</style>