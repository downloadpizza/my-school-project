<template>
    <v-app id="app">
        <PageHeader></PageHeader>
        <NavigationBar></NavigationBar>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import PageHeader from '@/components/PageHeader';
    import NavigationBar from "@/components/NavigationBar";
    export default {
        name: 'App',
        components: {
            NavigationBar,
            PageHeader
        }
    };
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        background: #405060;
    }
</style>

