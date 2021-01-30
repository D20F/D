<template>
    <div class="code-layer">
        <h1 class="h1"><a></a></h1>

        <h2 :id="point[0].id" class="h2">
            <a></a>
        </h2>
        <CodeShow :list="code[0]">
            <template v-slot:content>
                <div>
                    <v-list>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                link
                            >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.text"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
            </template>
        </CodeShow>
    </div>
</template>

<script>
import prism from "@/mixins/prism";

let code = [
    {
        template: `
                
                `,
        style: ``,
        js: `        
            `,
        name: "",
        title: "",
    },
];
let point = [
    {
        id: "point-1",
        text: "",
        level: 1,
    },
];
export default {
    name: "",
    components: {},
    mixins: [prism],
    data() {
        return {
            code: code,
            point: point,
            selectedItem: 1,
            items: [
                { text: "Real-Time", icon: "mdi-clock" },
                { text: "Audience", icon: "mdi-account" },
                { text: "Conversions", icon: "mdi-flag" },
                { text: "Real-Time", icon: "mdi-clock" },
                { text: "Audience", icon: "mdi-account" },
                { text: "Conversions", icon: "mdi-flag" },
                { text: "Real-Time", icon: "mdi-clock" },
                { text: "Audience", icon: "mdi-account" },
                { text: "Conversions", icon: "mdi-flag" },
                { text: "Real-Time", icon: "mdi-clock" },
                { text: "Audience", icon: "mdi-account" },
                { text: "Conversions", icon: "mdi-flag" },
            ],
        };
    },
    computed: {},
    created() {
        this.$store.dispatch("system/tog_catalogue", this.point);
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>
