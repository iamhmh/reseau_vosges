<template>
    <a href="/tabs/userprofile" style="text-decoration: none;">
        <ion-grid>
            <ion-row>
                <ion-col size="3" size-sm="3" id="avatar">
                    <ion-avatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </ion-avatar>
                </ion-col>
                <ion-col size="8" size-sm="3">
                    <h6><strong>Loic LETANG</strong></h6>
                    <p id="text">88-03 BNI REMIREMONT Porte des Hautes Vosges</p>
                    <p id="renouvellement">Renouvellement en cours</p>
                    <p id="renouvellement">Date de renouvellement: 01/03/2024</p>
                </ion-col>
                <ion-col size="1" size-sm="3" style="margin-top: auto; margin-bottom: auto;">
                    <ion-icon :icon="chevronForwardOutline" style="color: red"></ion-icon>
                </ion-col>
            </ion-row>
        </ion-grid>
    </a>
</template>
  
<script setup lang="ts">
import { IonCol, IonGrid, IonRow, IonAvatar, IonIcon } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

defineComponent({
    components: { IonCol, IonGrid, IonRow, IonAvatar, IonIcon, },
});
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