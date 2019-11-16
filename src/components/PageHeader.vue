<template>
    <div id="header">
        <a href="/" class="header-title">
            <img class="header-img" src="../assets/logo.svg" alt="DownloadPizza">
            <h1>DownloadPizza</h1>
        </a>
        <div class="search">
            <label>
                <input type="text" id="search-box">
            </label>
            <button v-on:click="search">Go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        methods: {
            search: function() {
                let text = document.getElementById("search-box").value.trim();
                if(text.length === 0) return;
                this.$router.push({path: `/define/${text}`})
            }
        }
    }
</script>

<style scoped>
    a:visited {
        color: inherit;
        text-decoration: none;
    }

    #header {
        margin: 0;
        padding: 10px;
        background: lightslategray;
        display: flex;
    }

    .header-title {
        display: flex;
    }

    .header-img {
        width: 10%;
        margin-right: 5px;
    }

    #header > h1 {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 15px;
    }

    .search {
        margin: auto 1% auto auto;
    }

    .search > button {
        min-height: 30px;
        margin-left: 7px;
    }

    @media(max-width: 900px) {
        #header {
            display: block;
            align-content: center;
        }

        a {
            margin-left: auto;
        }

        .search {
            margin: 0;
        }
    }
</style>