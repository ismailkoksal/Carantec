<template>
    <v-form>
        <p>Test</p>
        <v-textarea v-model="password" :rules="[rules.password, rules.length(6)]" box counter="6" label="Password" type="password"></v-textarea>
    </v-form>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>

</style>