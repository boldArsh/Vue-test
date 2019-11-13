<template>
     
    <div class="store">


       <!-- <span>state</span>
        <div>{{ a }} </div>
        <div>{{ b }} </div>
        <div>{{ c }} </div>
        <div>{{ d }} </div>
        <div>{{ e }} </div> -->

        <!-- getter -->
        <!-- <div>{{doneTodos}}</div>
        <div>{{doneTodosCount}}</div> -->

        <!-- mutation -->
        <div>{{number}}</div>
        <button @click="add({num:6})">点击加数</button>
        <button @click="subtract({num:3})">点击加数</button>



    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    computed:{
      ...mapState(['todos', 'b', 'c', 'd', 'e','number']),
      ...mapGetters(['doneTodos','doneTodosCount'])
    },
    methods:{
        // useStoreAdd(item){
        //     console.log(this.number);
        //     this.$store.commit('add',item)
        // },
        // useStoreSubtract(item){
        //     console.log(this.number);
        //     this.$store.commit('subtract',item)
        // }
        ...mapMutations(['add','subtract'])
     
    },

    
};
</script>