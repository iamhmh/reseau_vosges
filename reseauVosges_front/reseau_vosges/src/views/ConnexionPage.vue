<template>
    <ion-page>
        <ion-header>
            <ion-thumbnail>
                <img alt="Silhouette of mountains" src="../bniconnnect.png" />
            </ion-thumbnail>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Identifiant</ion-label>
                    <ion-input type="email" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Mot de passe</ion-label>
                    <ion-input type="password" required></ion-input>
                </ion-item>
            </ion-list>
            <ion-button expand="block" color="danger">Connexion</ion-button>
            <a href="">Mot de passe oublié ?</a>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonThumbnail,
    },
});
</script>
<style>
    ion-thumbnail {
    --size: 140px;
    --border-radius: 14px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  ion-content ion-list {
    margin-top: 100px;
  }
  ion-content ion-button {
    margin-top: 80px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
    ion-content a {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        text-align: center;
        text-decoration: none;
        color: #000;
    }
</style>
