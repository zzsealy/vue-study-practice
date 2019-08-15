// 事件

new Vue({
	el: "#vue-app",
	data: {
		age : 21,
		x : 0,
		y : 0
	},
	methods: {
		add: function(dec){
			this.age += dec;
		},
		subtract: function(dec){
			this.age -= dec;
		},
		updateXY: function(event){
			//console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopmoving: function(event){
			event.stopPropagation();  // 阻止冒泡事件
		},
		alert: function(){
			alert("Hello World!");
		}
	}
})