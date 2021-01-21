<template>
    <div class="dashboard">
        <h2 :id="point[0].id" class="h2">
            <a>说明</a>
        </h2>
    </div>
</template>

<script>
let point = [
    {
        id: "point-1",
        text: "说明",
        level: 1,
    },
];
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            point: point,
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
