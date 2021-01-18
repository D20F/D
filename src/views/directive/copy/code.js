const compiler = require("vue-template-compiler");



export default [
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
]



