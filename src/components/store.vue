<template>
     
    <div class="store">


       <!-- <span>state</span>
        <div>{{ a }} </div>
        <div>{{ b }} </div>
        <div>{{ c }} </div>
        <div>{{ d }} </div>
        <div>{{ e }} </div> -->


        <div>{{doneTodos}}</div>
        <div>{{doneTodosCount}}</div>





    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    computed:{
      ...mapState(['todos', 'b', 'c', 'd', 'e']),
      ...mapGetters(['doneTodos','doneTodosCount'])
    } 
    
};
</script>