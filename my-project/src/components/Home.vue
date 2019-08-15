<!--  1 模版  html 结构 -->
<template>
  <div id="home ">
                                <!-- event 必须是这个值 -->
    <app-header v-on:titleChange="updateTitle($event)"   v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>


<!-- 2 处理逻辑 -->
<script>

// 局部注册组件
import Users from  './Users'
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'home',
  data(){
    return {
      
      users: [
      /*
      {name:"大黑", position:"地主老板", show:false  },
      {name:"小绿", position:"混吃混喝", show:false  },
      {name:"小蓝", position:"不吃不喝", show:false  },
      {name:"阿黄", position:"宠物狗狗", show:false  }
      */
      ],
      
      title: "传递的是一个值，（number， string， boolean"
    }
  },
  methods:{
    updateTitle(title){
      this.title = title;
    }
  },
  components:{
    "users": Users,
    "app-header": Header,
    "app-footer": Footer
  },
  created(){    //钩子函数
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) =>{
        // console.log(data);
        this.users = data.body;
      })
  }
}
</script>



<!-- 3 解决样式 -->
<style scoped>
h1{
  color: purple;
}

</style>
