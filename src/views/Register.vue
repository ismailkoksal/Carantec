<template>
    <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
                <v-text-field v-model="lastName" :rules="lastNameRules" label="Nom" required></v-text-field>
                <v-text-field v-model="firstName" :rules="firstNameRules" label="Prénom" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="number" :rules="numberRules" label="Téléphone portable" required
                              mask="##########"></v-text-field>
                <v-text-field v-model="username" :rules="usernameRules" label="Identifiant" required></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules" label="Mot de passe" required></v-text-field>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
                <v-btn color="primary" flat @click="login">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="validate">Submit</v-btn>
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
                lastName: '',
                firstName: '',
                email: '',
                number: '',
                username: '',
                password: '',
                lastNameRules: [
                    v => !!v || 'Last name is required',
                ],
                firstNameRules: [
                    v => !!v || 'First name is required',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                numberRules: [
                    v => !!v || 'Phone number is required'
                ],
                usernameRules: [
                    v => !!v || 'Username is required'
                ],
                passwordRules: [
                    v => !!v || 'Password is required'
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
                    })
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