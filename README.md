# vue-debounce
使用vue实现的节流组件

##使用方法  

```
// Debounce组件会接受time和events（用逗号分隔）的两个参数。
<Debounce :time="1000" events="click, mouseup, mouseenter">
    <button @click="onClick($event, 1)">按钮</button>
</Debounce>
```
