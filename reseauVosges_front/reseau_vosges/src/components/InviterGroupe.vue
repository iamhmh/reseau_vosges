<template>
    <h6 id="invitationGroupe"><strong>INVITER DANS UN GROUPE</strong></h6>

    <ion-grid>
        <ion-row class="ion-justify-content-center">
            <ion-col size="3" id="col_button">
                <ion-button style="--background: white; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); border-radius: 10px;">
                    <ion-icon aria-hidden="true" :icon="mailOutline" style="color: red"/>
                    <ion-label style="color: red">E-mail</ion-label>
                </ion-button>
            </ion-col>
            <ion-col size="3" id="col_button">
                <ion-button style="--background: white; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); border-radius: 10px;">
                    <ion-icon aria-hidden="true" :icon="chatbubbleEllipsesOutline" style="color: red"/>
                    <ion-label style="color: red">SMS</ion-label>
                </ion-button>
            </ion-col>
            <ion-col size="3" id="col_button">
                <ion-button style="--background: white; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); border-radius: 10px;">
                    <ion-icon aria-hidden="true" :icon="shareSocialOutline" style="color: red"/>
                    <ion-label style="color: red">Partager</ion-label>
                </ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>

    <h6 id="invitationGroupe"><strong>ENREGISTRER UNE VISITE</strong></h6>

    <ion-grid>
        <ion-row class="ion-justify-content-center">
            <ion-col size="3" id="col_button">
                <ion-button style="--background: white; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); border-radius: 10px;">
                    <ion-icon aria-hidden="true" :icon="personOutline" style="color: red"/>
                    <ion-label style="color: red">Moi</ion-label>
                </ion-button>
            </ion-col>
            <ion-col size="3" id="col_button">
                <a href="/tabs/invitation/invitation1">
                   <ion-button style="--background: white; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); border-radius: 10px;">
                        <ion-icon aria-hidden="true" :icon="manOutline" style="color: red"/>
                        <ion-label style="color: red">Invité</ion-label>
                    </ion-button> 
                </a>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
  
<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { mailOutline, chatbubbleEllipsesOutline, shareSocialOutline, personOutline, manOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
    setup() {
      return {
        mailOutline: mailOutline,
        chatbubbleEllipsesOutline: chatbubbleEllipsesOutline,
        shareSocialOutline: shareSocialOutline,
        personOutline: personOutline,
        manOutline: manOutline,
      };
    },
  });
</script>
  
<style>
#invitationGroupe{
    color: #3a3a3a;
    margin-top: 15px;
    font-size: 0.9em;
    text-align: center;
}
#col_button {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: auto;
}
</style>