<template>
    <ion-item-sliding>
        <ion-item-options side="start">
            <ion-item-option color="success">
            <ion-icon slot="start" :icon="archive"></ion-icon>
            Editer
            </ion-item-option>
        </ion-item-options>
        <ion-item>
            <ion-label>{{ props.groupname }}</ion-label>
        </ion-item>
        <ion-item-options side="end">
            <ion-item-option>
            <ion-icon slot="start" :icon="heart"></ion-icon>
            Favorite
            </ion-item-option>
            <ion-item-option color="danger">
            <ion-icon slot="start" :icon="trash"></ion-icon>
            Delete
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script lang="ts" setup>
import { IonItem, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonLabel} from '@ionic/vue';
import { archive, heart, trash } from 'ionicons/icons';
import { defineProps } from 'vue';

interface Props {
    groupname: string;
}
  
const props = defineProps<Props>();

</script>

<style scoped>

</style>