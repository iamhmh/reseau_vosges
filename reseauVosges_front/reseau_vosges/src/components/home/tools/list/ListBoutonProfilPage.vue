<template>
    <ion-item>
      <ion-label>
        <a :href="props.url">{{ props.label }}</a>
      </ion-label>
      <ion-icon :icon="props.icon" slot="end" :style="{ color: props.color }"></ion-icon>
    </ion-item>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import { IonIcon, IonItem, IonLabel, } from '@ionic/vue';
  
interface Props {
    url: string;
    label: string;
    icon: any;
    color?: string;
}
  
const props = defineProps<Props>();
  
</script>
  
<style scoped>
</style>