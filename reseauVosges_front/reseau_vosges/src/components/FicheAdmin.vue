<template>
    <ion-grid style="background: #f6f4f4 ;border-bottom: 1px solid #bbbbbb;">
        <ion-row>
            <ion-col size="3" size-sm="3" id="avatar">
                <ion-avatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
            </ion-col>
            <ion-col size="8" size-sm="3">
                <h6><strong>John DOE</strong></h6>
                <p id="text">Status : <strong>Super Admin</strong></p>
            </ion-col>
            <ion-col size="1" size-sm="3" style="margin-top: auto; margin-bottom: auto;">
                <ion-icon :icon="chevronForwardOutline" style="color: red"></ion-icon>
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
}
</style>