<template>
    <ion-grid>
        <ion-row>
            <ion-col size="10" id="bons">
            <a :href="props.url" style="text-decoration: none; color: black;">
                <ion-icon slot="start" :icon="props.icon" ></ion-icon>{{ props.label }}
            </a>
            </ion-col>
            <ion-col id="bonsChiffre">
            <a :href="props.url" style="text-decoration: none;">
                <h4><strong>{{ props.number }}</strong>+</h4>
            </a>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/vue';
import { defineProps } from 'vue';

interface Props {
    url: string;
    label: string;
    number: string;
    icon: any;
    text_decoration?: string;
}
  
const props = defineProps<Props>();
</script>

<style scoped>
h4{
  color: red;
  font-size: 2em;
}
#bons {
  display: flex; 
  justify-content: flex-start; 
  margin-top: auto; 
  margin-bottom: auto;
}
#bonsChiffre {
  display: flex; 
  justify-content: flex-end; 
  font-size: 0.9em; 
}
</style>