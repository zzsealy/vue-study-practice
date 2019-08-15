<template>
  <header v-on:click="changeTitle">
  	<h1> {{ title1 }} {{ title }}</h1>
  </header>
</template>


<script>
export default {
  name: 'app-header',
   props:{
  	title:{
  		type:String
  	}
  },
  data () {
    return {
    	title1: "Vue.js Demo"

    }
  },
  methods:{
  	changeTitle:function(){
  		// this.title = "changed!"
  		// 注册一个事件， 自己定义名字, 第二个参数是传的内容
  		// 需要去父项(App.vue)实现titleChange
  		this.$emit("titleChange", "子向父组件传值");

  	}
  },
  /*
  beforeCreate: function(){
  	alert('组件实例化之前执行的函数！');
  },
  created: function(){
  	alert("组件实例化完毕，但页面还未显示！");
  },
  beforeMount: function(){
  	alert("组件挂载前，页面仍未展示，但虚拟dom已经配置了。");
  },
  mounted: function(){
  	alert("组件挂载后，此方法执行后页面显示。");
  },
  beforeUpdate: function(){
  	alert("组件更新前，页面仍未更新，但虚拟dom已经配置了。");
  },
  updated: function(){
  	alert("组件更新，此方法执行后，页面显示。");
  },
  beforeDestory: function(){
  	alert("组件销毁前。");
  },
  destoryed: function(){
  	alert("组件销毁。");
  },
  */
 
}
</script>



<style scoped>
header{
	background: #B3D9D9;
	padding: 10px;
}

h1{
	color: #222;
	text-align: center;
}

</style>
