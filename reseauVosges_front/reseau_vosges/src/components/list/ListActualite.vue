<template>
    <ion-item style="padding: 0;">
        <ion-grid>
            <ion-row>
                <ion-col size="2" size-sm="3" style="display: flex; justify-content: center;">
                    <ion-icon aria-hidden="true" :icon="props.icon1" />
                </ion-col>
                <ion-col size="8" size-sm="3" style="font-size: 0.9em;">
                    {{ props.date }}
                    <br>
                    <a :href="props.url" target="_blank" :style="{ color: props.color }">{{ props.name }} - {{ props.amount }}</a>
                </ion-col>
                <ion-col size="2" size-sm="3">
                    <ion-button fill="clear" id="open-modal">
                        <ion-icon aria-hidden="true" :icon="props.icon2" :style="{ color: props.color }"/>
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<script lang="ts" setup>
import { IonItem, IonGrid, IonRow, IonCol, IonButton, IonIcon} from '@ionic/vue';
import { defineProps } from 'vue';

interface Props {
    url: string;
    name: string;
    date: string;
    amount: string;
    icon1: any;
    icon2: any;
    color?: string;
}
  
const props = defineProps<Props>();

</script>

<style scoped>

</style>