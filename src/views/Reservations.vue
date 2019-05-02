<template>
    <v-container fluid grid-list-md>
        <v-layout column>
            <v-flex v-for="(reserv, id) in reservations" :key="id">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ reserv.nom }}</div>
                            <span class="grey--text">{{ reserv.dateDebut }} - {{ reserv.heureDebut }}</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer/>
                        <router-link :to="{
                            name: 'set-avis',
                            params: {nom: reserv.nom, id: reserv.id}
                        }">
                            <v-btn color="primary">Ecrire un avis</v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import manifestationDao from '../dao/Manifestation'
    import userDao from '../dao/User'
    import {mapState} from 'vuex'

    export default {
        name: "Reservations",
        data() {
            return {
                reservations: []
            }
        },
        created() {
            manifestationDao.getReservation(this.currentUser[0].id)
                .then(response => {
                    this.reservations = response.data
                })
        },
        computed: {
            ...mapState(['currentUser', 'isUserLogged'])
        },
        methods: {
            validerAvis(manifId) {
                userDao.setAvis(this.avis, this.rating, this.currentUser[0].id, manifId)
            }
        }
    }
</script>

<style scoped>

</style>