<template>
    <ion-content class="ion-padding" id="modalContent">
        <ion-list lines="none" style="margin-top: 100px;">
            <ion-item id="modalItem">
                <ion-label id="modalLabel"><a href="/tabs/userprofile" id="modalLabelA">Profil</a></ion-label>
            </ion-item>
            <ion-item id="modalItem">
                <ion-label id="modalLabel"><a href="/tabs/home" id="modalLabelA">Résumé de la réunion</a></ion-label>
            </ion-item>
            <ion-item id="modalItem">
                <ion-label id="modalLabel"><a href="/tabs/settings" id="modalLabelA">Réglages</a></ion-label>
            </ion-item>
            <ion-item id="modalItem">
                <ion-label id="modalLabel"><a href="#" id="modalLabelA">Admin</a></ion-label>
            </ion-item>
            <ion-item id="modalItem">
                <ion-label id="modalLabel"><a href="/login" id="modalLabelA">Déconnexion</a></ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
</template>

<script lang="ts" setup>
import { IonLabel, IonContent, IonList, IonItem } from '@ionic/vue';
</script>

<style>
#modalMenu {
    background-color: #efefef;
    --border-radius: 40px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}
#modalToolbar {
    --background: rgb(255, 0, 0);
    height: 100px;
}
#modalContent {
    --background: rgb(255, 0, 0);
}
#modalItem {
    --background: red;
}
#modalLabel {
    text-align: center;
}
#modalLabelA {
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}
</style>