<template>
    <v-layout row>
        <v-flex>
            <v-card xs12 sm6 offset-sm3 class="mb-3">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="150px"></v-img>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Top western road trips</div>
                        <span class="grey--text">L'événement commence le 28/04/2019 à 13h00</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn flat color="orange">Réserver</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Manifestations"
    }
</script>

<style scoped>

</style>