<template>
    <ion-page>
        <ion-header collapse="condense">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <a href="/tabs/userprofile"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
                    </ion-button>
                </ion-buttons>
                <ion-title>CONTACT</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-item >
                <ion-input style="margin-top: 70px;" placeholder="Numéro de téléphone"></ion-input>
            </ion-item>

            <ion-item >
                <ion-input style="margin-top: 20px;" placeholder="Numéro de téléphone 2"></ion-input>
            </ion-item>

            <ion-item >
                <ion-input style="margin-top: 20px;" type="email" placeholder="Adresse email"></ion-input>
            </ion-item>

            <ion-item >
                <ion-input style="margin-top: 20px;" placeholder="Url site web"></ion-input>
            </ion-item>

            <ion-button expand="block" color="danger" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 30px;">Confirmer</ion-button>
        </ion-content>
        
    </ion-page>
</template>
<script  lang="ts">
import { IonInput, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonItem, IonContent} from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonItem,  IonContent },
    setup() {
      return {
        chevronBackOutline: chevronBackOutline,
      }
    }
  });
</script>
<style scoped>
.header-collapse-condense ion-toolbar {
  --background: #f4f4f4;
}

ion-header {
    background: #f4f4f4;
    position: fixed;
    border-bottom: 1px solid #e5e5e5;
}
ion-title {
  text-align: center;
  color: #3a3a3a;
}
</style>