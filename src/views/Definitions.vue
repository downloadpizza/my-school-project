<template>
    <div id="define">
        <div class="urban-dict">
            <h1>Urban dictionary</h1>
            <div class="definition"></div>
            <h2>{{ word }}</h2>
            <p><span v-for="item in splitDefinition" :key="item">
                <router-link v-if="item.startsWith('[')" :to="'/define/'+item.substring(1, item.length - 1)">{{ item }} </router-link>
                <span v-else>{{ item }} </span>
            </span></p>
            <h>e.g.</h>
            <p><span v-for="item in splitExample" :key="item">
                <router-link v-if="item.startsWith('[')" :to="'/define/'+item.substring(1, item.length - 1)">{{ item }} </router-link>
                <span v-else>{{ item }} </span>
            </span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Definitions",
        data() {
            return {
                word: "",
                splitDefinition: [],
                splitExample: []
            };
        },
        watch:{
            $route: function(to){
                let url = `http://api.urbandictionary.com/v0/define?term=${to.params.term}`;

                fetch(url).then(response => {
                    response.json().then(obj => {
                        const def = obj.list[0];
                        this.word = def.word;
                        this.splitDefinition = this.splitWords(def.definition);
                        this.splitExample = this.splitWords(def.example);
                    })
                })
            }
        },
        methods: {
            prepareStr: function(str) {
                return str.replace(/[^ ](?=\[)/g, "").replace(/][^ ]/g, "]")
            },
            splitWords: function(words) {
                words = this.prepareStr(words);
                let wordList = [];
                let word = "";
                for (let i = 0;i < words.length;i++) {
                    let c = words.charAt(i);

                    if(c === ' ') {
                        wordList.push(word);
                        word = "";
                        continue
                    }
                    if(c === '[') {
                        while(c !== ']') {
                            word += c;
                            i++;
                            c = words.charAt(i);
                        }
                        word += c;
                        wordList.push(word);
                        word = "";
                        continue
                    }
                    word += c;
                }
                if(word !== '') {
                    wordList.push(word)
                }
                return wordList.filter(wd => {return wd !== ''})
            }
        },
        created() {
            {
                let url = `http://api.urbandictionary.com/v0/define?term=${this.$route.params.term}`;

                fetch(url).then(response => {
                    response.json().then(obj => {
                        const def = obj.list[0];
                        this.word = def.word;
                        this.splitDefinition = this.splitWords(def.definition);
                        this.splitExample = this.splitWords(def.example);
                    })
                })
            }
        }
    }
</script>

<style scoped>
    #define {
        color: whitesmoke;
    }

    .urban-dict {
        text-align: left;
        margin-left: 2em;
    }

    a {
        color: whitesmoke;
    }
</style>