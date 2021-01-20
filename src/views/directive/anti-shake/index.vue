<template>
    <div class="code-layer">
        <h1 class="h1"><a>指令: 防抖节流</a></h1>

        <h2 :id="point[0].id" class="h2">
            <a>promise 防抖</a>
        </h2>
        <CodeShow :list="code[0]">
            <template v-slot:content>
                <div>
                    <p>只有当promise完成才可以继续点击增加</p>
                    <p class="code_btn" v-debounce-promise="click_pro">增加</p>
                    <p>数量 {{ count }} 个</p>
                </div>
            </template>
        </CodeShow>

        <h2 :id="point[1].id" class="h2">
            <a>延时防抖</a>
        </h2>
        <CodeShow :list="code[1]">
            <template v-slot:content>
                <div>
                    <p>时间结束可继续点击,默认2秒</p>
                    <p class="code_btn" v-debounce-timing v-on:click="count++">
                        增加
                    </p>
                    <p>数量 {{ count }} 个</p>
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
            // promise 防抖 指令必须绑定一个promise对象
            Vue.directive('debounce-promise', {
                bind: function (el, binding, vnode) {
                    el.handler = () => {
                        if (!run) {
                            return
                        }
                        run = false
                        binding.value().then((val) => {
                            run = true
                        }).catch((err) => {
                            run = true
                        })
                    }
                    let run = true
                    el.addEventListener('click', el.handler)
                },
                unbind: function (el, binding, vnode) {
                    el.removeEventListener('click', el.handler)
                },
            })
            `,
        style: "",
        js: "",
        name: "debouncePromise",
        title: "指令: promise 防抖",
    },
    {
        template: `
            // 时间防抖   默认 2秒
            Vue.directive('debounce-timing', {
                bind: function (el, binding, vnode) {
                    let time
                    let run = true
                    if (binding.expression) {
                        time = binding.expression
                    } else {
                        time = 2000
                    }
                    el.handler = () => {
                        if (!run) {
                            return
                        }
                        run = false
                        // 阻止点击事件
                        el.style.pointerEvents = 'none'
                        setTimeout(() => {
                            el.style.pointerEvents = 'auto'
                            run = true
                        }, time)
                    }
                    el.addEventListener('click', el.handler)
                },
                unbind: function (el, binding, vnode) {
                    el.removeEventListener('click', el.handler)
                },
            })
            `,
        style: "",
        js: "",
        name: "debounceTiming",
        title: "指令: 时间防抖",
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
            count: 0,
        };
    },
    computed: {},
    created() {
        this.$store.dispatch("system/tog_catalogue", this.point);
        console.log(this.$store.state.system.catalogueData);
    },
    mounted() {},
    methods: {
        click_pro() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.count++;
                    resolve(true);
                }, 3000);
            });
        },
    },
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
