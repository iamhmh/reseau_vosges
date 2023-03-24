<template>
    <ion-page>
        <ion-header>
            <ion-thumbnail>
                <img alt="Silhouette of mountains" src="@/assets/images/bniconnnect.png" />
            </ion-thumbnail>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Identifiant</ion-label>
                    <ion-input v-model="creds.email" type="email" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Mot de passe</ion-label>
                    <ion-input v-model="creds.password" type="password" required></ion-input>
                </ion-item>
            </ion-list>
            <ion-button @click="login" expand="block" color="danger" :loading="loading">Connexion</ion-button>
            <a href="">Mot de passe oublié ?</a>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonThumbnail } from '@ionic/vue';

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const creds = ref({ email: "", password: "" });

const loading = ref(false);

const login = async () => {
    loading.value = true;
    try {
        await store.dispatch("login", creds.value);
        router.push("/");
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};

</script>

<style>
ion-thumbnail {
    --size: 140px;
    --border-radius: 14px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}
ion-content ion-list {
    margin-top: 100px;
}
ion-content ion-button {
    margin-top: 80px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
ion-content a {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #000;
}
</style>
