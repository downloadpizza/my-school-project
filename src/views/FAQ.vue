<template>
    <div id="faq">
        <h1>FAQ</h1>
        <ul>
            <li v-for="item in questions" v-bind:key="item.q">
                <span class="question">{{ item.q }}</span><br>
                <span class="answer">{{ item.a }}</span><br><br>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FAQ",
        data: () => {
            return {
                questions: [
                    {
                        q: "Why did you make this?",
                        a: "I don't know"
                    },
                    {
                        q: "Vue vs Angular?",
                        a: "Do you even have to ask?"
                    },
                    {
                        q: "Do you like pineapple on your Pizza?",
                        a: "I don't mind it, but due to society casting pineapple pizza fans out, I have decided to never order it."
                    },
                    {
                        q: "What do you think of electron based Apps?",
                        a: "No"
                    },
                    {
                        q: "What does \"No\" mean?",
                        a: "a negative used to express dissent, denial, or refusal, as in response to a question or request"
                    },
                    {
                        q: "Does that mean you don't like them?",
                        a: "Possibly"
                    },
                    {
                        q: "Will you ever give a clear answer?",
                        a: "Perhaps"
                    },
                    {
                        q: "This is the worst FAQ ever!",
                        a: "This is the worst question ever!"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #faq {
        padding-left: 1em;
        text-align: left;
        color: antiquewhite;
    }

    .questions {
        text-align: left;
    }

    .answer {
        padding-left: 3em;
    }
</style>