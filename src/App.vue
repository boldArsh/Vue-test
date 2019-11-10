<template>
    <div id="app">
        <!-- <el-button class="“sass_test”" type="primary" @click="ajax">主要按钮</el-button>
        <br /> -->


        <!-- 插槽与默认值 -->
       <!--  <navigation-link >
          <div> 插的位置↓</div>
          <input/>
          <div>asdas</div>
          <div>vvv</div>
        </navigation-link> -->

       <!--  <navigation-link >
        </navigation-link>

        <navigation-link>
        </navigation-link> -->

        <br/>


        <!-- 这个有这里是用slot="center"不是name="center" -->
       <!--  <span> 具名插槽</span> 
        <hasname-slot>
          <template v-slot:center>
            我是name="center"替换了BBadsa
          </template>

        </hasname-slot>
 -->

        <!-- 父组件替换插槽的标签，但是内容有子组件来提供 -->
        <!-- 注意v-slot:(slot="name")="形参" -->
     <!--    <span>作用域插槽(需要具名)</span>

        
        <scoped-slot> 
          <template #second="slotProps">

              <div v-for="(item,index) in slotProps.aaabbbccc" :key="index">
                ---{{item}} 子组件将内容传给在父组件，在父组件渲染
              </div>
         
          </template>
        </scoped-slot>
 -->


      <store>
      </store>

    </div>
</template>

<script>
import navigationLink from '@/components/navigation-link.vue'
import hasnameSlot from '@/components/hasname-slot.vue'
import scopedSlot from '@/components/scoped-slot'
import store from '@/components/store'

export default {
    name: "app",
    components: {
      navigationLink,
      hasnameSlot,
      scopedSlot,
      store
    },

    methods: {
        ajax() {
            this.$axios
                .post("/v1_0/feedback/Index/save", {
                    //【4】第一次调用会产生一次请求方法option（校验和预防），然后才是传输方法post，两次出现接口函数，对实际代码没笑
                    name: "三个",
                    phone: 74874822748,
                    company: "seemenotaround"
                })
                .then(res => {
                    console.log(res);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    .sass_test {
        height: 3px;
    }
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
