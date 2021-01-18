<template>
    <div class="code-layer">
        <CodeShow v-for="(item, index) of doc" :key="index" :list="item">
            <template v-slot:content>
                <div>
                    <component :is="item.name"></component>
                </div>
            </template>
        </CodeShow>



 
    </div>
</template>

<script>
import prism from "@/mixins/prism";

import code from "./code";

export default {
    name: "Directive",
    components: {
        copySelect: () => {
            return import("./component/copySelect");
        },
        copyClick: () => {
            return import("./component/copyClick");
        },
        debouncePromise: () => {
            return import("./component/debouncePromise");
        },
        debounceTiming: () => {
            return import("./component/debounceTiming");
        },
    },
    mixins: [prism],
    data() {
        return {
            doc: code,
            text: "center",
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
