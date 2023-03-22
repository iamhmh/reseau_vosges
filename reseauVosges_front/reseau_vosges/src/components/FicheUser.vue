<template>
    <ion-grid>
        <ion-row>
            <ion-col size="3" size-sm="3" id="avatar">
                <ion-avatar>
                    <a href="/tabs/userprofile" style="text-decoration: none;">
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </a>
                </ion-avatar>
            </ion-col>
            <ion-col size="8" size-sm="3">
                <a href="/tabs/userprofile" style="text-decoration: none;">
                    <h6><strong>Loic LETANG</strong></h6>
                    <p id="text">88-03 BNI REMIREMONT Porte des Hautes Vosges</p>
                    <p id="renouvellement">Renouvellement en cours</p>
                    <p id="renouvellement">Date de renouvellement: 01/03/2024</p>
                </a>
            </ion-col>
            <ion-col size="1" size-sm="3" style="margin-top: auto; margin-bottom: auto;">
                <a href="/tabs/userprofile" style="text-decoration: none;"><ion-icon :icon="chevronForwardOutline" style="color: red"></ion-icon></a>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
  
<script setup lang="ts">
import { IonCol, IonGrid, IonRow, IonAvatar, IonIcon } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
</script>
  
<style>
#avatar {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
}
h6 {
    color: red;
    margin: 0;
}
p#text {
    color: #3a3a3a;
    margin: 0;
    font-size: 0.9em;
}
p#renouvellement {
    color: #3a3a3a;
    margin: 0;
    font-size: 0.7em;
}</style>