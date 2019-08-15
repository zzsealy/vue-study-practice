// 前五课

new Vue({
		el: '#vue-app',
		data: {
			name: ' 代睿权!',
			job : 'web 开发',
			website: 'https://www.baidu.com',
			val: "密码",
			websiteTag: "<a href='https://www.baidu.com'>去百度～</a>"
		},
		methods: {
			greet: function(time){
				return 'good ' + time + ' ' + this.name + '!';
			}
		}
	})