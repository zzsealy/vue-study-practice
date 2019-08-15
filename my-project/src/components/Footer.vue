<template>
  <footer>
  	<p> {{ copyright }}  {{ title }}</p>
  </footer>
</template>


<script>
export default {
  name: 'app-footer',
  data () {
    return {
    	copyright: "copy 2019 vue.js demo"

    }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>



<style scoped>
footer{
	background: #222;
	padding: 6px;
}

p{
	color: lightgreen;
	text-align: center;
}

</style>
