<template>
    <ion-grid class="grid-cols-12">
        <ion-row>
            <ion-col class="flex justify-center items-center h-20" id="avatar">
                <ion-avatar>
                    <a href="/tabs/userprofile" class="no-underline">
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </a>
                </ion-avatar>
            </ion-col>
            <ion-col class="flex justify-center items-center h-20">
                <a href="/tabs/userprofile" class="no-underline">
                    <h6 class="text-red-500"><strong>John DOE</strong></h6>
                    <p class="text-gray-700 text-xs">dsbdhsgjhbsd</p>
                </a>
            </ion-col>
            <ion-col class="flex justify-center items-center h-20 w-20">
                <a href="/tabs/userprofile" class="no-underline"><ion-icon :icon="chevronForwardOutline" class="text-red-500"></ion-icon></a>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
  
<script lang="ts" setup>
import { IonCol, IonGrid, IonRow, IonAvatar, IonIcon } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';

</script>
  
<style>

#avatar {
    margin-top: auto;
    margin-bottom: auto;
}
</style>