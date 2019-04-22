<template>
    <div>
        <v-navigation-drawer v-model="drawer" fixed app>
            <Drawer/>
        </v-navigation-drawer>
        <v-toolbar fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
    </div>
</template>

<script>
    import Drawer from '@/components/Drawer'

    export default {
        name: "Toolbar",
        data() {
            return {
                drawer: false
            }
        },
        components: {Drawer}
    }
</script>

<style scoped>

</style>