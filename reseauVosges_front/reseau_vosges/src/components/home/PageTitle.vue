<template>
    <ion-toolbar>
        <ion-title>{{ props.title }}</ion-title>
    </ion-toolbar>
</template>

<script setup lang="ts">
import {IonToolbar, IonTitle } from '@ionic/vue';
import { defineProps } from 'vue';

interface Props {
    title: string;
}

const props = defineProps<Props>();

</script>

<style>
.header-collapse-condense ion-toolbar {
--background: #f4f4f4;
}   
</style>