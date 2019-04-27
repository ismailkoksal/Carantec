<template>
    <v-layout column>
        <v-alert class="mb-3" :value="invalidLogin" type="error">L'identifiant et/ou le mot de passe saisis sont invalides, merci
            d'essayer à nouveau.
        </v-alert>
        <v-card>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                    <v-text-field v-model="username" :rules="usernameRules" label="Identifiant" required></v-text-field>
                    <v-text-field :append-icon="show ? 'visibility' : 'visibility_off'"
                                  :type="show ? 'text' : 'password'" @click:append="show = !show" v-model="password"
                                  :rules="passwordRules" label="Mot de passe" required></v-text-field>
                </v-card-text>
                <v-divider class="mt-4"></v-divider>
                <v-card-actions>
                    <v-btn color="primary" flat @click="register">Register</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :loading="loading" :disabled="!valid" color="primary" flat @click="validate">Submit</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-layout>
</template>

<script>
    import userDao from '../dao/User'

    export default {
        name: "Login",
        data() {
            return {
                valid: true,
                invalidLogin: false,
                show: false,
                loading: false,
                username: '',
                usernameRules: [
                    v => !!v || 'Username is required'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8) || 'Minimum 8 characters'
                ]
            }
        },
        methods: {
            validate() {
                this.invalidLogin = false;
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    userDao.login(this.username, this.password)
                        .then(response => {
                            if (response.data.length) {
                                this.$store.commit('setUser', response.data)
                            } else {
                                this.invalidLogin = true;
                            }
                            this.loading = false;
                        })
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            register() {
                this.$router.replace('/register')
            }
        }
    }
</script>

<style scoped>

</style>