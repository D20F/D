<template>
    <div class="code-layer">
        <h1 class="h1"><a>指令: 选中复制</a></h1>

        <h2 :id="point[0].id" class="h2">
            <a>promise 防抖</a>
        </h2>

        <CodeShow :list="code[0]">
            <template v-slot:content>
                <div>
                    <p>点击复制</p>
                    <p class="code_btn" v-copy-click="'点击复制'">点击</p>
                </div>
            </template>
        </CodeShow>
        <h2 :id="point[1].id" class="h2">
            <a>promise 防抖</a>
        </h2>
        <CodeShow :list="code[1]">
            <template v-slot:content>
                <div>
                    <p>选中复制</p>
                    <p class="code_btn" v-copy-select>选中</p>
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
        Vue.directive('copy-select', {
                bind: function(el, binding, vnode) {
                    el.handler = () => {
                        const execCommand = document.execCommand('copy')
                        if (execCommand) {
                            showTip_div(el, '复制成功', 'bottom', 1000)
                        }
                    }
                    el.addEventListener('mouseup', el.handler)
                },
                unbind: function(el, binding, vnode) {
                    el.removeEventListener('mouseup', el.handler)
                },
            })`,
        style: `.dashboard {
                    &-container {
                        margin: 30px;
                    }
                    &-text {
                        font-size: 30px;
                        line-height: 46px;
                    }
                }`,
        js: "",
        name: "copySelect",
        title: "指令: 选中复制",
    },
    {
        template: `
            Vue.directive('copy-click', {
                bind: function(el, binding, vnode) {            
                    el.handler = () => {
                        const input = document.createElement('input');
                        input.setAttribute('readonly', 'readonly');
                        input.setAttribute('value', binding.expression);
                        document.body.appendChild(input);
                        input.select();
                        const execCommand = document.execCommand('copy');
                        document.body.removeChild(input);
                        if (execCommand) {
                            showTip_div(el, '复制成功', 'center', 1500)
                        }
                    }
                    el.addEventListener('click', el.handler)
                },
                unbind: function(el, binding, vnode) {
                    el.removeEventListener('click', el.handler)
                },
            })
            `,
        style: "",
        js: "",
        name: "copyClick",
        title: "指令: 点击复制",
    },
];
let point = [
    {
        id: "point-1",
        text: "promise 防抖",
        level: 1,
    },
    {
        id: "point-2",
        text: "延时防抖",
        level: 1,
    },
];
export default {
    name: "Directive",
    components: {},
    mixins: [prism],
    data() {
        return {
            code: code,
            point: point,
        };
    },
    computed: {},
    created() {
        // window.location.hash = "#abc"
    },
    mounted() {
        // const returnEle = document.querySelector("#productId"); //productId是将要跳转区域的id
        // if (!!returnEle) {
        //     returnEle.scrollIntoView(true); // true 是默认的
        // }
        // document.querySelector("counter1").scrollIntoView(true);
    },
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
