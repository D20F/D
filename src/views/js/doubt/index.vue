<template>
    <div class="code-layer">
        <h1 class="h1"><a></a></h1>

        <h2 :id="point[0].id" class="h2">
            <a></a>
        </h2>
        <CodeShow :list="code[0]">
            <template v-slot:content>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="3">
                
                    </v-col>
                </v-row>
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
            filled: "",
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
