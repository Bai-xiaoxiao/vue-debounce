const debounce = (func, time, ctx) => {
    let timer
    const rtn = (...params) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(ctx, params)
        }, time)
    }
    return rtn
}

Vue.component('Debounce', {
    abstract: true,
    props: ['time', 'events'],
    created () {
      this.eventKeys = this.events.split(',')
      this.originMap = {}
      this.debouncedMap = {}
    },
    render() {
        const vnode = this.$slots.default[0]

        this.eventKeys.forEach((key) => {
            const target = vnode.data.on[key]
            if (target === this.originMap[key] && this.debouncedMap[key]) {
                vnode.data.on[key] = this.debouncedMap[key]
            } else if (target) {
                this.originMap[key] = target
                this.debouncedMap[key] = debounce(target, this.time, vnode)
                vnode.data.on[key] = this.debouncedMap[key]
            }
        })
        
        return vnode
    },
})
