<template>
    <div id="nav-bar">
        <router-link class="nav-link" to="/">
            <button>Home</button>
        </router-link>
        <router-link class="nav-link" to="/faq">
            <button>FAQ</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
    #nav-bar {
        display: flex;
        background: #607080;
        min-height: 50px;
    }

    #nav-bar > .nav-link {
        margin: auto;
    }

    #nav-bar > .nav-link:first-child {
        margin-left: 25%;
    }

    #nav-bar > .nav-link:last-child {
        margin-right: 25%;
    }

</style>