<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="(manif, id) in manifestations" :key="id" v-bind="{ [`xs${flex}`]: true }">
                <v-card height="350px" @click.stop="toRoute('view_manifestation', {id: manif.id})"
                        style="cursor: pointer">
                    <v-img height="150px" :src="manif.affiche"/>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ manif.nom }}</div>
                            <div v-if="manif.resume.length > 140">{{ manif.resume.substring(0, 140) }}...</div>
                            <span class="grey--text">{{ manif.dateDebut }} - {{ manif.heureDebut }}</span>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import manifestationDao from '../dao/Manifestation'

    export default {
        name: "Manifestations",
        created() {
            manifestationDao.getAll()
                .then(response => {
                    this.manifestations = response.data
                })
        },
        data() {
            return {
                manifestations: []
            }
        },
        methods: {
            toRoute(rname, rparams = {}, query = {}) {
                this.$router.push({name: rname, params: rparams, query: query})
            },
            stringToUrl(text) {
                return text.toString().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            }
        },
        computed: {
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
            },
            isFree(prix) {
                return prix === 0 ? 'Gratuit' : prix
            }
        }
    }
</script>

<style scoped>

</style>