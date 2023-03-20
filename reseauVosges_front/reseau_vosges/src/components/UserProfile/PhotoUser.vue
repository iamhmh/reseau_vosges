<template>
    <ion-page>
        <ion-header collapse="condense">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <a href="/tabs/userprofile"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
                    </ion-button>
                </ion-buttons>
                <ion-title>PHOTO</ion-title>
            </ion-toolbar>
        </ion-header>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon} from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
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