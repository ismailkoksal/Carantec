<template>
    <v-layout column>
        <toast position="s"></toast>
        <v-card>
            <v-card-title><span class="headline">Ecrire un avis pour {{ this.$route.params.nom }}</span></v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                    <v-textarea outline required counter="500" full-width height="150" :rules="avisRules"
                                v-model="avis"></v-textarea>
                    <v-rating v-model="rating" background-color="orange lighten-3"
                              color="orange"></v-rating>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="validate">Valider</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-layout>
</template>

<script>
    import userDao from '../dao/User'
    import store from '../store'
    import {mapActions} from 'vuex'
    import {ADD_TOAST_MESSAGE} from 'vuex-toast'
    import {Toast} from 'vuex-toast'

    export default {
        name: "SetAvis",
        data() {
            return {
                valid: true,
                rating: 5,
                avis: '',
                avisRules: [
                    v => !!v || "L'avis est obligatoire",
                    v => (v && v.length <= 500) || "500 caratères maximum"
                ]
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    userDao.setAvis(this.avis, this.rating, store.getters.getCurrentUser[0].id, this.$route.params.id)
                        .then(response => {
                            if (response.data.insertId) {
                                this.sendNotification('Votre avis a été envoyé, il est en attente de modération', 'success')
                            } else {
                                this.sendNotification("Votre avis n'a pas pu être envoyé, veuillez réessayer plus tard", 'danger')
                            }
                        })
                }
            },
            ...mapActions({
                addToast: ADD_TOAST_MESSAGE
            }),

            sendNotification(text, type) {
                this.addToast({
                    text,
                    type: type,
                    dismissAfter: 10000
                })
            }
        },
        components: {
            Toast
        }
    }
</script>

<style scoped>

</style>