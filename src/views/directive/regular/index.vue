<template>
    <div class="code-layer">
        <h1 class="h1"><a></a></h1>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
            >
                Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
                Reset Validation
            </v-btn>
        </v-form>

        <h2 :id="point[0].id" class="h2">
            <a></a>
        </h2>
        <CodeShow :list="code[0]">
            <template v-slot:content>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            label="检测手机号"
                            v-model="filled"
                            v-regular-phone="['filled']"
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
            valid: true,
            name: "",
            nameRules: [
                (v) => /^[1][3,4,5,7,8,9][0-9]{9}$/.test(v)|| "Name is required",
                // (v) =>
                //     (v && v.length <= 10) ||
                //     "Name must be less than 10 characters",
            ],
            items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        };
    },
    computed: {},
    created() {
        this.$store.dispatch("system/tog_catalogue", this.point);
    },
    mounted() {},
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
