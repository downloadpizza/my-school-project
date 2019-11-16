<template>
    <div id="home">
        <h2>This is Gabriel's Website</h2>
        <p>
            It was made in Vue, because I like Vue. The page is (under most circumstances) an
            <abbr title="Single page application">SPA</abbr>. The search box communicates with the UrbanDictionary API
            and shows you the words you click on. If you click on too many redirect words, the page breaks for some reason.
            I think its due to the API rate-limiting the user, but I dont care enough to do anything about it, deal with it.
        </p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #home {
        background: inherit;
        color: whitesmoke;
    }
    p {
        text-align: left;
        padding-left: 30%;
        padding-right: 30%;
        line-height: 30px;
    }
</style>