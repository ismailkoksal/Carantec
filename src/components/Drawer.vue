<template>
    <div>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://avatars1.githubusercontent.com/u/20714736?s=460&v=4">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Ismail Koksal</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon>exit_to_app</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider/>
            <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
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
    export default {
        name: "Drawer",
        data() {
            return {
                items: [
                    {title: 'Home', icon: 'dashboard', route: '/'},
                    {title: 'About', icon: 'question_answer', route: '/about'},
                    {title: 'Account', icon: 'account_box', route: '/account'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>