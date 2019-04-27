<template>
    <v-app>
        <Toolbar/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'

    export default {
        name: 'App',
        components: {
            Toolbar
        }
    }
</script>

<style>

</style>
