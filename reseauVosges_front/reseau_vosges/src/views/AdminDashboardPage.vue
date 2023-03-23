<template>
<ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Admin Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
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
</ion-menu>
<ion-page id="main-content">
    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button>
                <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
            </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
            <ion-menu-button style="color: red;"></ion-menu-button>
        </ion-buttons>
        <ion-title>Admin</ion-title>
        </ion-toolbar>
        <FicheAdmin />
    </ion-header>
    <ion-content class="ion-padding">

        <!--User List-->
        <ion-list>
            <ion-label id="labelList">Liste des membres</ion-label>
            <ListMember lastname="NOM" firstname="Prénom" />
            <ListMember lastname="NOM" firstname="Prénom" />
            <ListMember lastname="NOM" firstname="Prénom" />
            <ion-label id="labelLink"><a href="" style="color: red;">Voir plus</a></ion-label>
        </ion-list>

        <!--Group List-->
        <ion-list>
            <ion-label id="labelList">Liste des groupes</ion-label>
            <ListGroup groupname="Nom du groupe" />
            <ListGroup groupname="Nom du groupe" />
            <ion-label id="labelLink"><a href="" style="color: red;">Voir plus</a></ion-label>
        </ion-list>

        <!--Meeting List-->
        <ion-list>
            <ion-label id="labelList">Réunions</ion-label>
            <ListReunion meeting="Nom de la réunion"/>
            <ion-label id="labelLink"><a href="" style="color: red;">Voir plus</a></ion-label>
        </ion-list>

        <!--Analyse des données-->
        <ion-list>
            <ion-label id="labelList">Analyse des données</ion-label>
            <DataAnalyze :number="0" numberOf="Nombre de membres" />
            <DataAnalyze :number="0" numberOf="Nombre de groupes" />
            <DataAnalyze :number="0" numberOf="Nombre de réunions" />
        </ion-list>

    </ion-content>
</ion-page>
</template>

<script lang="ts" setup>
import { IonList, IonMenu, IonMenuButton, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,  } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline, } from 'ionicons/icons';
import FicheAdmin from '@/components/FicheAdmin.vue';
import ListMember from '@/components/admin/components/ListMember.vue';
import ListGroup from '@/components/admin/components/ListGroup.vue';
import ListReunion from '@/components/admin/components/ListReunion.vue';
import DataAnalyze from '@/components/admin/components/DataAnalyze.vue';
</script>

<style scoped>
ion-content ion-list {
    margin-top: 20px;
}
ion-content ion-list ion-label#labelList {
    font-size: 0.9em;
    font-weight: bold;
    text-decoration: underline;
    color: #3a3a3a;
    padding-left: 20px;
    padding-top: 10px;
}
ion-content ion-list ion-label#labelLink {
    font-size: 0.9em;
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