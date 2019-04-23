<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="surnameRules" label="Nom" required box></v-text-field>
        <v-text-field v-model="name" :rules="nameRules" label="Prénom" required box></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required box></v-text-field>
        <v-text-field v-model="number" :rules="numberRules" label="Téléphone portable" required box mask="## ## ## ## ##"></v-text-field>
        <v-text-field v-model="username" :rules="usernameRules" label="Identifiant" required box></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Mot de passe" required box></v-text-field>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
            <v-btn color="primary" flat @click="login">Login</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on }">
                        <v-btn icon class="my-0" @click="reset" v-on="on">
                            <v-icon>refresh</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh form</span>
                </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" flat @click="validate">Submit</v-btn>
        </v-card-actions>
    </v-form>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                formHasErrors: false,
                surname: '',
                surnameRules: [
                    v => !!v || 'Surname is required',
                ],
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                number: '',
                numberRules: [
                    v => !!v || 'Phone number is required'
                ],
                username: '',
                usernameRules: [
                    v => !!v || 'Username is required'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required'
                ]
            }
        },
        methods: {
            validate() {
                this.formHasErrors = !this.$refs.form.validate()
            },
            reset() {
                this.formHasErrors = false
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