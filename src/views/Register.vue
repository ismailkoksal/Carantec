<template>
    <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
                <v-text-field v-model="lastName" :rules="lastNameRules" :label="$t('personalData.lastName')" required></v-text-field>
                <v-text-field v-model="firstName" :rules="firstNameRules" :label="$t('personalData.firstName')" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" :label="$t('personalData.email')" required></v-text-field>
                <v-text-field v-model="number" :rules="numberRules" :label="$t('personalData.number')" required
                              mask="##########"></v-text-field>
                <v-text-field v-model="username" :rules="usernameRules" :label="$t('personalData.username')" required></v-text-field>
                <v-text-field :append-icon="show ? 'visibility' : 'visibility_off'"
                              :type="show ? 'text' : 'password'" @click:append="show = !show" v-model="password"
                              :rules="passwordRules" :label="$t('personalData.password')" counter required></v-text-field>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
                <v-btn color="primary" flat @click="login">{{ $t('action.login') }}</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="validate">{{ $t('action.submit') }}</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
    import userDao from '../dao/User'

    export default {
        name: "Register",
        data() {
            return {
                valid: true,
                show: false,
                lastName: '',
                firstName: '',
                email: '',
                number: '',
                username: '',
                password: '',
                lastNameRules: [
                    v => !!v || this.$t('rules.lastName'),
                ],
                firstNameRules: [
                    v => !!v || this.$t('rules.firstName'),
                ],
                emailRules: [
                    v => !!v || this.$t('rules.email'),
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                numberRules: [
                    v => !!v || this.$t('rules.number')
                ],
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
                if (this.$refs.form.validate()) {
                    userDao.signup({
                        lastName: this.lastName,
                        firstName: this.firstName,
                        email: this.email,
                        number: this.number,
                        username: this.username,
                        password: this.password
                    }).then(() => this.$router.replace('/'))
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            login() {
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped>

</style>