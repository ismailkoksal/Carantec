<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="(reserv, id) in reservations" :key="id" v-bind="{ [`xs${flex}`]: true }">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ reserv.nom }}</div>
                            <span class="grey--text">{{ reserv.dateDebut }} - {{ reserv.heureDebut }}</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer/>
                        <v-dialog v-model="dialog">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" v-on="on">Ecrire un avis</v-btn>
                            </template>
                            <v-card>
                                <v-layout column align-center>
                                    <v-card-title><span class="headline">Ecrire un avis</span></v-card-title>
                                    <v-form ef="form" v-model="valid" lazy-validation>
                                        <v-textarea outline required counter="500" full-width height="150" :rules="avisRules" :value="avis"></v-textarea>
                                        <v-rating v-model="rating" background-color="orange lighten-3"
                                                  color="orange"></v-rating>
                                        <v-card-actions>
                                            <v-btn color="primary" @click="validate(reserv.id)">Valider</v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </v-layout>
                            </v-card>
                        </v-dialog>
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
                reservations: [],
                dialog: false,
                valid: true,
                rating: 5,
                avis: '',
                avisRules: [
                    v => !!v || "L'avis est obligatoire",
                    v => (v && v.length <= 500) || "500 caratères maximum"
                ]
            }
        },
        created() {
            manifestationDao.getReservation(this.currentUser[0].id)
                .then(response => {
                    this.reservations = response.data
                })
        },
        computed: {
            ...mapState(['currentUser', 'isUserLogged']),
            flex() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 12;
                    case 'sm':
                        return 6;
                    case 'md':
                        return 4;
                    case 'lg':
                        return 3;
                    case 'xl':
                        return 2
                }
                return 0
            }
        },
        methods: {
            validate(manifId) {
                if (this.$refs.form.validate()) {
                    userDao.setAvis(this.currentUser[0].id, manifId, this.avis, this.rating)
                }
            }
        }
    }
</script>

<style scoped>

</style>