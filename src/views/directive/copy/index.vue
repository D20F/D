<template>
    <div class="code-layer">
        <h1 class="h1"><a>指令: 复制</a></h1>

        <h2 :id="point[0].id" class="h2">
            <a>选中复制</a>
        </h2>
        <CodeShow :list="code[0]">
            <template v-slot:content>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            label="输入复制文字"
                            v-model="filled"
                        ></v-text-field>
                        <p v-copy-select>{{ filled }}</p>
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
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            label="输入复制文字"
                            v-model="filled"
                        ></v-text-field>
                    </v-col>
                    <p v-copy-select>{{ filled }}</p>
                </v-row>`,
        style: ``,
        js: `        
            Vue.directive('copy-select', {
                bind: function(el, binding, vnode) {
                    el.handler = () => {
                        const execCommand = document.execCommand('copy')
                        if (execCommand) {
                            console.log('复制成功')
                        }
                    }
                    el.addEventListener('mouseup', el.handler)
                },
                unbind: function(el, binding, vnode) {
                    el.removeEventListener('mouseup', el.handler)
                },
            })`,
        name: "copySelect",
        title: "指令: 选中复制",
    },
];
let point = [
    {
        id: "point-1",
        text: "选中复制",
        level: 1,
    },
];
export default {
    name: "copy",
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
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
