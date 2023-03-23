<template>
    <ion-item>
        <ion-label>{{ props.numberOf }}</ion-label>
        <ion-badge style="color: white; background-color: red;">{{ props.number }}</ion-badge>
    </ion-item>
</template>

<script lang="ts" setup>
import { IonItem, IonLabel, IonBadge} from '@ionic/vue';
import { defineProps } from 'vue';

interface Props {
    numberOf: string;
    number: number;
}
  
const props = defineProps<Props>();

</script>

<style scoped>

</style>