<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense" style="position: sticky;">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button>
                        <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
                        </ion-button>
                    </ion-buttons>
                    <ion-title>ADMIN</ion-title>
                    
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-accordion-group expand="inset">
                    <ion-accordion value="first">
                        <ion-item slot="header" style="color: red; font-weight: bold;">
                            <ion-label>Gestion des Membres</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Ajouter un membre</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Modifier un membre</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Supprimer un membre</a>
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
                <ion-accordion-group expand="inset">
                    <ion-accordion value="second">
                        <ion-item slot="header" style="color: red; font-weight: bold;">
                            <ion-label>Gestion des Groupes</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Créer un groupe</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Modifier un groupe</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Ajouter un membre à un groupe</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Supprimer un membre à un groupe</a>
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
                <ion-accordion-group expand="inset">
                    <ion-accordion value="third">
                        <ion-item slot="header" style="color: red; font-weight: bold;">
                            <ion-label>Gestion de la Réunion</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Créer une réunion</a>
                        </div>
                        <div class="ion-padding" slot="content">
                            <a href="/admin"><ion-icon aria-hidden="true" :icon="chevronForwardOutline" style="color: red;"/>Modifier une réunion</a>
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </ion-content>
    </ion-page>
    </template>
    
    <script lang="ts" setup>
    import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,  } from '@ionic/vue';
    import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
    </script>
    
    <style scoped>
    ion-content ion-list {
        margin-top: 20px;
    }
    ion-content ion-list ion-label#labelList {
        font-size: 0.8em;
        color: #3a3a3a;
        padding-left: 20px;
        padding-top: 10px;
    }
    ion-content ion-list ion-item ion-label {
        font-weight: bold;
    }
    .header-collapse-condense ion-toolbar {
        --background: #f6f4f4;
    }
    ion-title {
        text-align: center;
        color: #3a3a3a;
    }
    .header-collapse-condense ion-toolbar:first-of-type {
        padding-top: 0px;
    }
    </style>