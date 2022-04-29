<template>
	<div class="home_page">
		<div class="search_bar">
			<searchBar placeholder="请输入企业名称或股票代码" @search="search">查询</searchBar>
		</div>

		<div class="bg">
			<div v-if="tableData.length > 0" class="res">
				<div>
					<!-- 表格  :cell-style="{color:'rgba(149, 163, 175, 1)'}" :cell-style="setCellColor"-->
					<el-table
						:data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
						style="width: 95%;height:90%;border-radius: 10px;margin:2.5%"
						:header-cell-style="{ color: 'rgba(14, 41, 73, 1)' }"
						:row-style="{ height: '50px' }"
						:cell-style="{ color: 'rgba(149, 163, 175, 1)' }"
					>
						<el-table-column prop="name" label="企业名称" width="200">
							<template #default="scope">
								<div>
									<router-link
										:to="{ path: '/enterpriseDetail', query: { id: scope.row.id } }"
									>{{ scope.row.name }}</router-link>
								</div>
							</template>
						</el-table-column>

						<el-table-column prop="score" label="ESG指数" width="200" sortable></el-table-column>
						<el-table-column prop="level" label="中财绿金院" width="200" sortable></el-table-column>

						<el-table-column prop="id" label="股票代码" width="200" sortable></el-table-column>

						<el-table-column label="所属行业" style="flex:1;">
							<template #default="scope">
								<div>
									<router-link
										:to="{ path: '/industryDetail', query: { id: scope.row.industId } }"
									>{{ scope.row.field }}</router-link>
								</div>
							</template>
						</el-table-column>

						<el-table-column label=" ">
							<template #default="scope">
								<div>
									<router-link :to="{ path: '/enterpriseDetail', query: { id: scope.row.id } }">
										<el-link type="info" style="width: 5%;color: rgba(0, 165, 189, 1)">></el-link>
									</router-link>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</div>

				<!-- 分页器 -->
				<div class="block" style="margin-top:5px;">
					<el-pagination
						align="center"
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-sizes="[1, 5, 10, 20]"
						:page-size="pageSize"
						layout="prev, pager, next"
						:total="tableData.length"
						background
						prev-text="上一页"
						next-text="下一页"
						small
					></el-pagination>
				</div>
			</div>
			<div
				v-if="tableData.length == 0"
				style="width: 100%;height:100%;display: flex;justify-content: center;"
			>
				<img src="/noResult.png" style="width: 100%;height: 100%;" />
			</div>
		</div>
	</div>
</template>
<script>
import "../css/font.css";
import axios from "axios";
import searchBar from "../components/searchBar.vue";
export default {
	setup() {

	},
	data() {
		return {


			tableData: [{
				score: '6.7',
				name: '百度',
				level: 'A-',
				field: '字眼',
				id: '114514'
			}
			],

			currentPage: 1, // 当前页码
			total: 1, // 总条数
			pageSize: 6 // 每页的数据条数




		};
	},
	components: {
		searchBar,
	},
	mounted() {
		let industObject = {
			'房地产': 1,
			'金融': 2,
			'制药': 3
		};
		if (this.$route.query['queryStr']) {
			axios.get('http://139.159.241.200:8066/api/disp/stocks/?company=' + this.$route.query['queryStr'] + '&stock_code=' + this.$route.query['queryStr']).then((res) => {
				console.log(res.data)
				let tableDataN = []
				for (let i of res.data) {
					console.log(i)
					tableDataN.push({
						score: (parseFloat(i['fields'].esg) / 100).toFixed(2),
						name: i['fields'].field_company,
						level: i['fields'].iigf,
						field: i['fields'].field,
						id: i.pk,
						industId: industObject[i['fields'].field]
					})
				}
				this.$data.tableData = tableDataN;
			});
		} else {

			axios.get('http://139.159.241.200:8066/%5Edisp/?format=json').then((res) => {
				//retdata = JSON.parse(res.data)
				let tableDataN = []
				for (let i of res.data) {
					tableDataN.push({
						score: (parseFloat(i.esg) / 100).toFixed(2),
						name: i.field_company,
						level: i.iigf,
						field: i.field,
						id: i.stockcode,
						industId: industObject[i.field]
					})
				}
				this.$data.tableData = tableDataN;
			});
		}


	},
	methods: {
		search(data) {
			let industObject = {
				'房地产': 1,
				'金融': 2,
				'制药': 3
			};
			axios.get('http://139.159.241.200:8066/api/disp/stocks/?company=' + data + '&stock_code=' + data).then((res) => {
				console.log(res.data)
				let tableDataN = []
				for (let i of res.data) {
					console.log(i)
					tableDataN.push({
						score: (parseFloat(i['fields'].esg) / 100).toFixed(2),
						name: i['fields'].field_company,
						level: i['fields'].iigf,
						field: i['fields'].field,
						id: i.pk,
						industId: industObject[i['fields'].field]
					})
				}
				this.$data.tableData = tableDataN;
			});
		},
		//每页条数改变时触发 选择一页显示多少行
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.currentPage = 1;
			this.pageSize = val;
		},
		//当前页改变时触发 跳转其他页
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
		},

		setCellColor({
			row,
			column,
			rowIndex,
			columnIndex
		}) {

			if (columnIndex === 3 || columnIndex === 4) { //第三第四列的背景色就改变了2和3都是列数的下标
				return 'background-color:rgba(149, 163, 175, 1)'
			} else {
				return ''
			}

		},





	},
};
</script>
<style lang="less" scoped>
.home_page {
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		width: 100vw;
		height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.text {
			align-content: center;
			color: rgba(255, 255, 255, 1);
			letter-spacing: 6px;
			font-size: 72px;
			font-family: "庞门";
		}
	}

	.search_bar {
		width: 60vw;
		margin-top: 3vh;
		margin-bottom: 2vh;
	}

	.bg {
		margin: 5px;
		width: 80vw;
		height: 70vh;
		background-color: rgba(247, 247, 247, 0.5);
		border-radius: 10px;
	}

	.res {
		//margin: 15px;
		margin-top: 2.5vh;
		margin-bottom: 2.5vh;
		margin-left: 1.5vw;
		margin-right: 1.5vw;

		width: 77vw;
		height: 65vh;

		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;

		display: flex;

		text-align: center;
		justify-content: center;
		flex-direction: column;

		justify-content: space-between;
	}
}
</style>
<style>
.el-pagination span {
	background: #fff;

	color: rgba(0, 165, 189, 1);
	padding: 0 5px;
	line-height: 2;
	border-radius: 4px;
}

.el-pagination.is-background .el-pager li:not(.disabled) {
	background-color: #fff;
	color: rgba(0, 165, 189, 1);
	border: 0.5px solid rgba(0, 165, 189, 1);
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
	background-color: rgba(0, 165, 189, 1);
	color: #fff;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
	color: rgba(0, 165, 189, 1);
}

.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
	background-color: rgba(0, 165, 189, 1);
	color: #fff;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
	background-color: rgba(0, 165, 189, 0.1) !important;
}
</style>
