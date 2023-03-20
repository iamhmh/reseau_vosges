<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button>
                  <a href="/tabs/home"><ion-icon aria-hidden="true" :icon="chevronBackOutline" style="color: red;"/></a>
                </ion-button>
              </ion-buttons>
            <ion-title>PROFIL DU MEMBRE</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row style="display: flex; justify-content: center;">
                    <ion-avatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </ion-avatar>
                </ion-row>
                <ion-row style="display: flex; justify-content: center;">
                    <h5 style="margin-bottom: 5px;"><strong>Jane DOE</strong></h5>
                </ion-row>
                <ion-row style="display: flex; justify-content: center;">
                    <a href="#" style="text-decoration: none; color: red;">PLURIFINANCES</a>
                </ion-row>
                <ion-row style="display: flex; justify-content: center;">
                    <p style="margin-top: 5px;">Prêts Immobiliers</p>
                </ion-row>
                <ion-row>
                    <ion-col size="3" style="display: flex; justify-content: flex-end;">
                        <ion-fab>
                            <ion-fab-button>
                                <ion-icon :icon="callOutline"></ion-icon>
                            </ion-fab-button>
                        </ion-fab>
                    </ion-col>
                    <ion-col size="2" style="display: flex; justify-content: center;">
                        <ion-fab>
                            <ion-fab-button>
                                <ion-icon :icon="mailOutline"></ion-icon>
                            </ion-fab-button>
                        </ion-fab>
                    </ion-col>
                    <ion-col size="2" style="display: flex; justify-content: center;">
                        <ion-fab>
                            <ion-fab-button id="openShare">
                                <ion-icon :icon="shareSocialOutline"></ion-icon>
                            </ion-fab-button>
                        </ion-fab>
                        <ion-modal id="example-modal" ref="modal" trigger="openShare">
                            <ion-list lines="none">
                                <ion-item :button="true" :detail="false" @click="dismiss()">
                                    <ion-label>Partager la vCard</ion-label>
                                </ion-item>
                                <ion-item :button="true" :detail="false" @click="dismiss()">
                                    <ion-label>Partager le QR Code</ion-label>
                                </ion-item>
                            </ion-list>
                        </ion-modal>
                    </ion-col>
                    <ion-col size="2" style="display: flex; justify-content: center;">
                        <ion-fab>
                            <ion-fab-button>
                                <ion-icon :icon="listOutline" id="openReco"></ion-icon>
                            </ion-fab-button>
                        </ion-fab>
                        <ion-modal id="example-modal" ref="modal" trigger="openReco">
                            <ion-list lines="none" style="background-color: red;padding: 0px;">
                                <ion-item style="border-bottom: 1px solid black; ">
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col size="10" style="display: flex; justify-content: flex-end;">
                                                <ion-label style="color: white; text-align: center; margin-top: auto; margin-bottom: auto;"><strong>Choisissez le type de bons</strong></ion-label>
                                            </ion-col>
                                            <ion-col size="2" style="display: flex; justify-content: flex-end;">
                                                <ion-buttons>
                                                    <ion-button @click="dismiss()">
                                                        <ion-icon aria-hidden="true" :icon="closeOutline" style="color: white; width: 30px;" />
                                                    </ion-button>
                                                </ion-buttons>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-item>
                                <ion-item :button="true" :detail="false" style="text-align: center;">
                                    <ion-label><a href="/tabs/addrecommendation" style="text-decoration: none; color: white;">Recommandation</a></ion-label>
                                </ion-item>
                                <ion-item :button="true" :detail="false" style="text-align: center;">
                                    <ion-label><a href="/tabs/addfacetoface" style="text-decoration: none; color: white;">Tête-à-tête</a></ion-label>
                                </ion-item>
                                <ion-item :button="true" :detail="false" style="text-align: center;">
                                    <ion-label><a href="/tabs/addmpb" style="text-decoration: none; color: white;">MPB</a></ion-label>
                                </ion-item>
                            </ion-list>
                        </ion-modal>
                    </ion-col>
                    <ion-col size="3" style="display: flex; justify-content: flex-start;">
                        <ion-fab>
                            <ion-fab-button>
                                <ion-icon :icon="ellipsisHorizontalOutline" id="openInfo"></ion-icon>
                            </ion-fab-button>
                        </ion-fab>
                        <ion-modal id="example-modal" ref="modal" trigger="openInfo">
                            <ion-list lines="none" style="background-color: red;padding: 0px;">
                                <ion-item style="border-bottom: 1px solid white; margin: 10px;">
                                    <p>EMAIL : <br> jane.doe@email.fr</p>
                                </ion-item>
                                <ion-item style="border-bottom: 1px solid white; margin: 10px;">
                                    <p>Téléphone : <br> 0606060606</p>
                                </ion-item>
                                <ion-item style="border-bottom: 1px solid white; margin: 10px;">
                                    <p>Membre de : <br> 88-03 BNI REMIREMONT Porte des Hautes Vosges</p>
                                </ion-item>
                            </ion-list>
                        </ion-modal>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid style="margin-top: 60px; margin-bottom: 0px;">
                <ion-row>
                    <ion-col size="12" style="text-align: center;">
                        <p style="font-size: 0.8em; margin-bottom: 0px;">8 Place Maréchal de Lattre de Tassigny,<br>REMIREMONT, 88, 88200</p>
                        <br>
                        <a href="" style="font-size: 0.8em; color: red; text-decoration: none;">0606060606</a>
                        <br>
                        <a href="" style="font-size: 0.8em; color: red; text-decoration: none;">jane.doe@entreprise.fr</a>
                        <br>
                        <a href="" style="font-size: 0.8em; color: red; text-decoration: none;">www.entreprise.fr</a>
                    </ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-grid style="margin-top: 40px; margin-bottom: 0px; border-top: 1px solid rgb(0,0,0);border-bottom: 1px solid rgb(0,0,0);">
                <ion-row>
                    <ion-col size="12" style="text-align: center;">
                        <h6><strong>MON BUSINESS</strong></h6>
                        <p style="font-size: 0.8em; margin: 20px; text-align: start;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ac nisl at malesuada. Suspendisse eu velit convallis diam interdum viverra. Proin imperdiet mi est, eget volutpat lacus laoreet sit amet.</p>
                    </ion-col>
                </ion-row>
            </ion-grid>
          
        </ion-content>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
import { IonList, IonItem, IonLabel, IonModal, IonFab, IonFabButton, IonCol, IonGrid, IonRow, IonIcon, IonAvatar, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { ellipsisHorizontalOutline, listOutline, shareSocialOutline, mailOutline, callOutline, chevronForwardOutline, chevronBackOutline, closeOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
  
export default defineComponent({
    components: {  IonList, IonItem, IonLabel, IonModal, IonFab, IonFabButton, IonCol, IonGrid, IonRow, IonIcon, IonAvatar, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
    },
      data() {
      return {
        chevronForwardOutline: chevronForwardOutline,
        chevronBackOutline: chevronBackOutline,
        callOutline: callOutline,
        mailOutline: mailOutline,
        shareSocialOutline: shareSocialOutline,
        listOutline: listOutline,
        ellipsisHorizontalOutline: ellipsisHorizontalOutline,
        closeOutline: closeOutline,
      };
    },
    });
  </script>
  
  <style>
  ion-fab-button {
    --background: red;
    --color: white;
    width: 40px;
    height: 40px;
  }
    .header-collapse-condense ion-toolbar {
      --background: #f4f4f4;
    }
    ion-title {
      text-align: center;
      color: #3a3a3a;
    }
    .header-collapse-condense ion-toolbar:first-of-type {
      padding-top: 0px;
    }

    ion-modal#example-modal {
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }

ion-modal#example-modal ion-item {
    --background: red;
    --color: #ffffff;
    --padding-start: 0;
    --padding-end: 0;
} 
  
ion-modal#example-modal ion-icon {
    margin-right: 6px;
  
    width: 48px;
    height: 48px;
  
    padding: 4px 0;
  
    color: #ffffff;
}
  
ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
}
  </style>