<template>
  <div class="home_page" style="padding-top: 5%;">
    <div class="bg">
      <div class="res">
        <div>
          <!-- 表格  :cell-style="{color:'rgba(149, 163, 175, 1)'}" :cell-style="setCellColor"-->
          <el-table
            :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
            style="width: 95%;height:90%;border-radius: 10px;margin:2.5%"
            :header-cell-style="{ color: 'rgba(14, 41, 73, 1)' }"
            :row-style="{ height: '50px' }"
            :cell-style="{ color: 'rgba(149, 163, 175, 1)' }"
          >
            <el-table-column prop="name" label="文献名称" width="500"></el-table-column>

            <el-table-column prop="author" label="作者" width="200" sortable></el-table-column>

            <el-table-column prop="date" label="发布日期" width="200" sortable></el-table-column>

            <el-table-column label="操作" style="flex:1;">
              <template #default="scope">
                <el-link  target="_blank" :href="scope.row.url" type="info" style="color: rgba(0, 165, 189, 1)">查看</el-link>
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
    </div>
  </div>
</template>
<script>
import "../css/font.css";
import axios from "axios";
import searchBar from "../components/searchBar.vue";
export default {
  setup() {
    axios.get("/api/getUsers").then((res) => {
      console.log(res.data);
    });
  },
  data() {
    return {


      tableData: [{
        date: "2022-02-28",
        name: "孙明春：ESG评级的多样性丨明言ESG ",
        author: "一财网",
        url: 'https://k.sina.cn/article_1733360754_6750fc72020011q7o.html?from=finance'
      },
      {
        date: "2022-01-21",
        name: "浅谈ESG对信用评级的影响 ",
        author: "联合资信",
        url: 'https://k.sina.cn/article_1704103183_65928d0f02002nehm.html?from=finance'
      },
      {
        date: "2022-03-10",
        name: "ESG国际资讯|泰国安本资产管理公司推出科技ESG基金",
        author: "市场资讯",
        url: 'https://finance.sina.cn/esg/2022-03-10/detail-imcwiwss5091423.d.html?from=wap'
      },
      {
        date: "2022-03-10",
        name: "“两会”代表提案中的“双碳”和ESG",
        author: "市场资讯",
        url: 'https://finance.sina.cn/esg/2022-03-10/detail-imcwipih7544848.d.html?from=wap'
      },
      {
        date: "2022-03-10",
        name: "惠誉：ESG相关诉讼风险日益攀升",
        author: "市场资讯",
        url: 'https://finance.sina.cn/esg/2022-03-10/detail-imcwipih7536707.d.html?from=wap'
      },
      {
        date: "2022-03-10",
        name: "2021年四季度全球ESG基金持续净流入，欧洲主导地位依旧",
        author: "市场资讯",
        url: 'https://finance.sina.cn/esg/2022-03-10/detail-imcwiwss5185690.d.html?from=wap'
      },


      ],

      currentPage: 1, // 当前页码
      total: 1, // 总条数
      pageSize: 6 // 每页的数据条数




    };
  },
  components: {
    searchBar,
  },
  methods: {
    search(data) {
      console.log(data);
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
