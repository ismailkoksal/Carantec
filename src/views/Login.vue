<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required box></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Mot de passe" required box></v-text-field>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
            <v-btn color="primary" flat @click="register">Register</v-btn>
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
        name: "Login",
        data() {
            return {
                valid: true,
                formHasErrors: false,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 8 || 'Minimum 8 characters'
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
            register() {
                this.$router.replace('/register')
            }
        }
    }
</script>

<style scoped>

</style>