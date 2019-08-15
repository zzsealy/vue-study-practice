Vue.component("greeting", {
	template: `
	<p>{{ name }}: 你敲代码像蔡徐坤
	<button v-on:click="changeName">改名</button>
	</p>`,
	data: function(){
		return {
			name: "嘿嘿嘿"
		}
	},
	methods:{
		changeName: function(){
			this.name = "哈哈哈"
		}
	}
})




new Vue({
	el: "#vue-app-one",

})



new Vue({
	el: "#vue-app-two",

})