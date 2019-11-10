<template>
    <div>
        <!-- <slot name="variable" :variable="variable">
            <ul>
                <li v-for="(item,index) in variable" :key="index">
                    {{item}}--内容在1子组件，并且在1子组件自己渲染
                </li>
            </ul>
        </slot> -->

        <slot name="second" :aaabbbccc="secVari">
             <ul>
                <li v-for="(item,index) in secVari" :key="index">
                    {{item}}--内容在2子组件，并且在2子组件自己渲染
                </li>
            </ul>
        </slot>

    </div>
</template>
<script>
export default {
    data() {
        return {
            variable: ["我是name为variable", "b", "c", "d", "e", "f", "g"],
            secVari:['我是name为second','ddd','cccc']
        };
    }
};
</script>