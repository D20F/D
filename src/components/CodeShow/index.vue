<template>
    <div class="box">
        <v-row justify="center">
            <v-col cols="12" class="topbar">
                <p> {{list.title}} </p>
                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon> mdi-github </v-icon>
                        </v-btn>
                    </template>
                    <span>github</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="copy" icon v-bind="attrs" v-on="on">
                            <v-icon> mdi-content-copy</v-icon>
                        </v-btn>
                    </template>
                    <span>复制代码</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="unfold" icon v-bind="attrs" v-on="on">
                            <v-icon> mdi-iframe-braces-outline </v-icon>
                        </v-btn>
                    </template>
                    <span>查看源代码</span>
                </v-tooltip>
            </v-col>

            <v-col
                cols="12"
                class="tabbar"
                :class="code_class"
                :style="{ height: tabbar_height + 'px' }"
            >
                <div>
                    <v-col cols="12" class="py-2 bb">
                        <v-btn-toggle
                            v-model="code_type"
                            dense
                            color="deep-purple accent-3"
                            group
                            mandatory
                        >
                            <v-btn
                                @click="calculated_height"
                                v-show="list.template !== ''"
                                value="template"
                            >
                                template
                            </v-btn>
                            <v-btn
                                @click="calculated_height"
                                v-show="list.js !== ''"
                                value="js"
                            >
                                js
                            </v-btn>
                            <v-btn
                                @click="calculated_height"
                                v-show="list.style !== ''"
                                value="style"
                            >
                                style
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <pre v-show="code_type == 'template'">
                        <code class="language-javascript">
                            {{list.template}}
                        </code> 
                    </pre>
                    <pre v-show="code_type == 'js'">
                        <code class="language-javascript">
                            {{list.js}}
                        </code>
                    </pre>
                    <pre v-show="code_type == 'style'">
                        <code class="language-css" >
                            {{list.style}}
                        </code>
                    </pre>
                </div>
            </v-col>

            <v-col cols="12" class="content">
                <slot name="content" />
            </v-col>
        </v-row>
    </div>
</template>




<script>
import { random, selectCopy } from "@/utils/tool/index";
import { notify } from "@/utils/tool/notify";
export default {
    name: "CodeShow",
    props: {
        list: {
            type: Object,
            default: () => {
                return {
                    name: "",
                    template: "",
                    js: "",
                    style: "",
                    title: "",
                };
            },
        },
    },
    data() {
        return {
            tabbar_height: "0",
            max_height: "",
            code_class: "",
            code_type: "template",
        };
    },
    computed: {},

    created() {
        this.code_class = random(12); //随机class
        this.init();
    },
    methods: {
        init() {
            //初始化代码块高度
            this.$nextTick(() => {
                this.max_height = document.querySelector(
                    "." + this.code_class
                ).firstElementChild.clientHeight;
            });
        },
        calculated_height() {
            setTimeout(() => {
                this.$nextTick(() => {
                    this.max_height = document.querySelector(
                        "." + this.code_class
                    ).firstElementChild.clientHeight;
                    this.tabbar_height = this.max_height;
                    console.log(this.tabbar_height);
                });
            }, 0);
        },
        copy() {
            let dom = document.querySelector("." + this.code_class);
            selectCopy(dom);
            this.$store.dispatch("system/add_notify", {
                type: "success",
                data: "复制成功",
                time: 2000,
            });
        },
        unfold() {
            if (this.tabbar_height == "0") {
                this.tabbar_height = this.max_height;
            } else {
                this.tabbar_height = "0";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    margin: 0 auto 30px auto;
    position: relative;
    div {
        position: relative;
    }
}
.topbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 4px 4px 0 0;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
.tabbar {
    background: #fafafa;
    width: 100%;
    overflow: hidden;
    border-radius: 0 0 4px 4px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding: 0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
.theme--light.v-application code {
    background-color: transparent;
    color: currentColor;
}
</style>
