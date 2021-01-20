
export default [
    {
        text: "介绍",
        icon: "mdi-file-code-outline",
        child: [
            {
                text: "说明",
                to: '/',
            },
        ],
    },

    {
        text: "vue",
        icon: "mdi-vuejs",
        child: [
            {
                text: "疑问",
                to: '/vue/doubt',
            }
        ],
    },

    {
        text: "react",
        icon: "mdi-react",
        child: [
            {
                text: "疑问",
                to: '/react/doubt',
            }
        ],
    },

    {
        text: "指令",
        icon: "mdi-emoticon-lol-outline",
        child: [
            {
                text: "页面复制",
                to: '/directive/copy',
            },
            {
                text: "防抖节流",
                to: '/directive/antiShake',
            },
        ],
    },

    {
        text: "组件",
        icon: "mdi-emoticon-poop",
        child: [{
            text: "卡片",
            to: '/ui/card',
        }],
    },

    {
        text: "样式",
        icon: "mdi-emoticon-tongue-outline",
        child: [{
            text: "布局",
            to: '/style/layout',
        }],
    },
    {
        text: "JS",
        icon: "mdi-emoticon-kiss-outline",
        child: [{
            text: "疑问",
            to: '/js/doubt',
            // child: [
            //     {
            //         text: "React",
            //         to: '/vue/doubt'
            //     },
            // ],
        }],
    },
]