<style>
</style>

<template>
	<div class="mainContainer">
		<div class="title">
			<img
				@click="this.$router.push({ path: '/enterpriseDetail', query: { id: this.$route.query['id'] } })"
				src="/ret.png"
				style="width: 36px;height: 36px;margin-right: 1.19vw;cursor: pointer;"
			/>
			<span>{{ this.$route.query['name'] }}供应链详情</span>
		</div>
		<div class="detailContainer">
			<div class="leftBox">
				<div class="scoreView">
					<div style="flex:1;display: flex;flex-direction: column;">
						<div id="myChart" :style="{ width: '100%', height: '50%', flex: '1' }"></div>
						<div id="myChart1" :style="{ width: '100%', height: '50%', flex: '1' }"></div>
						<div id="myChart2" :style="{ width: '100%', height: '50%', flex: '1' }"></div>
					</div>
				</div>
			</div>
			<div class="rightBox">
				<div style="height: 1.5rem;display: flex;">
					<img class="iconBox" src="/icon_score.png" />
					<span class="iconText">供应链关系</span>
				</div>
				<div style="flex: 1;width: 700px;height: 400px;margin-left: 5rem;" id="myChart3"></div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios"
import * as echarts from 'echarts'
export default {
	setup() { },
	data() {
		return {
			myChart: null
		};
	},
	mounted() {
		this.draw();

	},
	methods: {
		getOp(color1, color2, value, text) {
			let op = {
				color: "rgba(70, 219, 242, 1)",
				tooltip: {
					show: false
				},
				graphic: [ //为环形图中间添加文字
					{
						type: "text",
						left: "center",
						top: "35%",
						style: {
							text: (parseFloat(value).toFixed(1)).toString(),
							textAlign: "center",
							fill: "#000",
							fontSize: '3rem',
							fill: color1
						},
					},
					{
						type: "text",
						left: "center",
						top: "65%",
						style: {
							text: text,
							textAlign: "center",
							fill: "#000",
							fontSize: '1rem',
						},
					}
				],
				series: [{
					type: 'pie',
					radius: ['65%', '85%'],
					// areaStyle: {normal: {}},
					areaStyle: {

					},
					data: [
						{
							value: value,
							label: {
								show: false
							}
						}, {
							value: 10 - value,
							label: {
								show: false
							}
						}
					],
					color: [color1, color2]
				}]
			};
			return op;
		},
		draw() {
			document.getElementById('myChart').setAttribute('_echarts_instance_', '')
			document.getElementById('myChart1').setAttribute('_echarts_instance_', '')
			document.getElementById('myChart2').setAttribute('_echarts_instance_', '')
			document.getElementById('myChart3').setAttribute('_echarts_instance_', '')
			let myChart = echarts.init(document.getElementById('myChart'));
			let myChart1 = echarts.init(document.getElementById('myChart1'));
			let myChart2 = echarts.init(document.getElementById('myChart2'));
			let myChart3 = echarts.init(document.getElementById('myChart3'));
			let op = this.getOp('rgba(250, 131, 131, 1)', 'rgba(250, 131, 131, 0.3)', 10 - Math.random() * 5, 'E');
			myChart.setOption(op);
			op = this.getOp('rgba(96, 147, 255, 1)', 'rgba(96, 147, 255, 0.3)', 10 - Math.random() * 5, 'S');
			myChart1.setOption(op);
			op = this.getOp('rgba(255, 204, 0, 1)', 'rgba(255, 204, 0, 0.3)', 10 - Math.random() * 5, 'G');
			myChart2.setOption(op);
			let option = {
				tooltip: {
					formatter: (p) => {
						switch (p.name) {
							case '华为 > 小米':
								return "输入公司名 : 小米<br/>输入公司体量 : 1200<br/>输入现金流 : 1200w<br/>输出公司名 : 华为"
							case '小米 > 华为':
								return "输入公司名 : 华为<br/>输入公司体量 : 1600<br/>输入现金流 : 1000w<br/>输出公司名 : 小米"
							case '华为 > vivo':
								return "输入公司名 : vivo<br/>输入公司体量 : 1200<br/>输入现金流 : 1200w<br/>输出公司名 : 华为"
							case 'vivo > 小米':
								return "输入公司名 : vivo<br/>输入公司体量 : 1200<br/>输入现金流 : 1200w<br/>输出公司名 : 小米"
							default:
								break;
						}
						return p.name
					}
				},
				animationDurationUpdate: 1500,
				animationEasingUpdate: 'quinticInOut',
				series: [
					{
						type: 'graph',
						layout: 'none',
						symbolSize: 80,
						roam: true,
						label: {
							show: true,
							color: 'rgb(6,194,112)'
						},
						edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [4, 10],
						edgeLabel: {
							fontSize: 20,
						},
						itemStyle: {
							color: 'rgb(172,233,210)',
							borderWidth: 12,
							borderColor: 'rgb(6,194,112)'
						},
						data: [
							{
								name: '华为',
								x: 300,
								y: 300,
								symbolSize: 120,
								label: {
									fontSize: '2rem'
								},

							},
							{
								name: 'vivo',
								x: 800,
								y: 300,
								label: {
									fontSize: '1.5rem'
								},
								fill: '#f08080'
							},
							{
								name: '小米',
								x: 550,
								y: 100,
								symbolSize: 100,
								label: {
									fontSize: '1.8rem'
								}
							}
						],
						// links: [],
						links: [
							{
								source: '小米',
								target: '华为',
							},
							{
								source: '华为',
								target: '小米'
							},
							{
								source: '华为',
								target: 'vivo'
							},
							{
								source: 'vivo',
								target: '小米'
							},
						],
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0, color: 'rgba(255,177,66,1)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(255,177,66,0.1)' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
							,
							opacity: 0.9,
							width: 5,
							curveness: 0.1
						},
						emphasis: {
							focus: 'adjacency',
							lineStyle: {
								width: 10
							}
						}
					}
				]
			};
			myChart3.setOption(option);
		}




	},










};
</script>
<style scoped>
.rightBox {
	padding-left: 5rem;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	flex: 1;
}

.briefText {
	font-family: source-han-sans-simplified-c, sans-serif;
	font-size: 0.8rem;
	color: rgba(93, 109, 121, 1);
}

.iconText {
	padding-top: 3px;
	font-size: 1rem;
	padding-left: 10px;
	font-family: source-han-sans-simplified-c, sans-serif;
}

.mainContainer {
	margin-top: 1%;
	margin-bottom: 1%;
	margin-left: 2%;
	margin-right: 1%;
	flex: 1;
	max-height: 100%;
	background-color: rgba(0, 165, 189, 0.05);
	border-radius: 28px;
	display: flex;
	flex-direction: column;
}

.iconBox {
	width: auto;
	height: 1.5rem;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 6px 10px rgba(0, 165, 189, 0.2);
	border-radius: 6px;
	padding: 5px 5px 5px 5px;
}

.title {
	margin-left: 2%;
	padding-top: 1.2%;
	margin-bottom: 1%;
	font-weight: 600;
	color: rgba(0, 165, 189, 1);
	letter-spacing: 2px;
	font-size: 24px;
	font-family: source-han-sans-simplified-c, sans-serif;
	display: flex;
	align-items: center;
}

.detailContainer {
	flex: 1;
	margin-left: 2%;
	margin-right: 1%;
	margin-bottom: 1%;
	display: flex;
}

.leftBox {
	width: 20.8%;
	display: flex;
	flex-direction: column;
}

.detailView {
	border-radius: 24px;
	background-color: #fff;
	width: 100%;
	padding-top: 3.5%;
	padding-left: 3.5%;
	padding-right: 3.5%;
	padding-bottom: 3.5%;
	display: flex;
	flex-direction: column;
	height: 38%;
}

.scoreView {
	height: 100%;
	border-radius: 24px;

	width: 100%;
	margin-top: 4%;
	padding-top: 3.5%;
	padding-left: 3.5%;
	padding-right: 3.5%;
	display: flex;
	flex-direction: column;
}
</style>
