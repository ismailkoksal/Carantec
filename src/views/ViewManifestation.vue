<template>
    <v-container fluid>
        <toast position="s"></toast>
        <v-card class="mb-3">
            <v-img :src="manifestation[0].affiche"></v-img>
            <v-card-title primary-title>
                <div>
                    <div class="headline mb-3">{{ manifestation[0].nom }}</div>
                    <div class="mb-3">{{ manifestation[0].resume }}</div>
                    <div class="grey--text">Date : {{ manifestation[0].dateDebut }}</div>
                    <div class="grey--text">Heure début : {{ manifestation[0].heureDebut }}</div>
                    <div class="grey--text">Lieu : {{ manifestation[0].lieu }}</div>
                    <div class="grey--text">Public : {{ manifestation[0].public }}</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer/>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-layout align-center>
                        <v-flex xs12 md6>
                            <v-select v-model="select" :rules="selectRules" :items="nbPersonnes" label="Personnes"
                                      required class="mr-3"></v-select>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-btn color="primary" @click="validate">Réserver - {{ manifestation[0].prix }}€</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card-actions>
        </v-card>

        <v-card>
            <div v-for="(unAvis, id) in avis" :key="id">
                <v-card-actions class="pa-3">
                    <span class="font-weight-bold">{{ unAvis.prenom }} {{ unAvis.nom }}</span>
                    <v-spacer/>
                    <v-rating v-model="unAvis.note" background-color="orange lighten-3" color="orange" readonly
                              small/>
                </v-card-actions>
                <div class="pl-3 pr-3">{{ unAvis.avis }}</div>
                <v-divider class="mt-4"/>
            </div>
        </v-card>
    </v-container>
</template>

<script>
    import manifestationDao from '../dao/Manifestation'
    import userDao from '../dao/User'
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'
    import {ADD_TOAST_MESSAGE} from 'vuex-toast'
    import {Toast} from 'vuex-toast'

    export default {
        name: "ViewManifestation",
        data() {
            return {
                valid: true,
                select: '',
                selectRules: [v => !!v || 'Required'],
                manifestation: [],
                avis: [],
                nbPersonnes: [1, 2, 3, 4]
            }
        },
        mounted() {
            manifestationDao.getManifestationById(this.$route.params.id)
                .then(response => {
                    this.manifestation = response.data
                });
            manifestationDao.getAvis(this.$route.params.id)
                .then(response => {
                    this.avis = response.data
                });
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    if (this.isUserLogged) {
                        userDao.reserver(this.currentUser[0].id, this.$route.params.id, this.select)
                            .then(response => {
                                this.sendNotification(response.data, 'success')
                            }).catch(error => {
                                this.sendNotification(error, 'danger')
                            }
                        )
                    } else {
                        this.$router.push('/')
                    }
                }
            },

            sendNotification(text, type) {
                this.addToast({
                    text,
                    type: type,
                    dismissAfter: 10000
                })
            }
        },
        computed: {
            ...
                mapState(['currentUser', 'isUserLogged']),
            ...
                mapActions({
                    addToast: ADD_TOAST_MESSAGE
                })
        }
        ,
        components: {
            Toast
        }
    }
</script>

<style scoped>

</style>