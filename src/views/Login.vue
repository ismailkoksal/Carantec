<template>
    <v-layout column>
        <v-alert class="mb-3" :value="invalidLogin" type="error">{{ $t('error.invalidLogin') }}</v-alert>
        <v-card>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                    <v-text-field v-model="username" :rules="usernameRules" :label="$t('personalData.username')" required></v-text-field>
                    <v-text-field :append-icon="show ? 'visibility' : 'visibility_off'"
                                  :type="show ? 'text' : 'password'" @click:append="show = !show" v-model="password"
                                  :rules="passwordRules" :label="$t('personalData.password')" counter required></v-text-field>
                </v-card-text>
                <v-divider class="mt-4"/>
                <v-card-actions>
                    <v-btn color="primary" flat @click="register">{{ $t('action.signup') }}</v-btn>
                    <v-spacer/>
                    <v-btn :loading="loading" :disabled="!valid" color="primary" flat @click="validate">{{ $t('action.submit') }}</v-btn>
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
                password: '',
                usernameRules: [
                    v => !!v || this.$t('rules.username')
                ],
                passwordRules: [
                    v => !!v || this.$t('rules.password'),
                    v => (v && v.length >= 8) || this.$t('rules.mini8Char')
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
                                this.$store.commit('setUser', response.data);
                                this.$router.replace('/manifestations')
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