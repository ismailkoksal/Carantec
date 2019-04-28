<template>
    <div>
        <v-toolbar flat class="transparent mt-2 mb-2">
            <v-list class="pa-0">
                <v-list-tile v-if="this.isUserLogged" avatar>
                    <v-list-tile-avatar>
                        <img :src="this.currentUser[0].avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ fullName }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click="exit">
                            <v-icon>exit_to_app</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-else>
                    <v-btn block color="primary" @click="login">{{ $t('action.login') }}</v-btn>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider/>
            <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Drawer",
        data() {
            return {
                items: [
                    {title: 'Manifestations', icon: '', path: '/manifestations'},
                    {title: 'About', icon: 'question_answer', path: '/about'},
                    {title: 'Account', icon: 'account_box', path: '/account'}
                ]
            }
        },
        computed: {
            ...mapState(['currentUser', 'isUserLogged']),
            fullName() {
                return `${this.currentUser[0].prenom}  ${this.currentUser[0].nom}`
            }
        },
        methods: {
            exit() {
                this.$store.commit('deleteUser');
                this.$router.replace('/')
            },
            login() {
                this.$router.replace('/')
            }

        }
    }
</script>

<style scoped>

</style>