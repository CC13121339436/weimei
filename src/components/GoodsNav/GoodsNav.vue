<template>
    <div>
        <v-header>
            <router-link to="" slot="title1">{{title1}}</router-link>
            <router-link to="" slot="title2">{{title2}}</router-link>
        </v-header>
        <v-footer></v-footer>
        <v-content>
            <div class="kind-title">护肤</div>
            <ul class="kinds">
                <li v-for="(ele,index) in kindList" :key="index">
                    <img :src="ele.cover" alt="">
                    <p>护肤</p>
                </li>
            </ul>
        </v-content>
    </div>
</template>

<script>
export default {
    name: "header",
    data(){
        return {
            title1 : "分类",
            title2 : "品牌",
            kindList: []
        }
    },
    mounted(){
        this.$http.get("/vmei/index?wechatUserId=&pageNo=1&pageSize=10")
            .then(res => {
                console.log(res.data.data.data[0].products)
                this.kindList = res.data.data.data[0].products
            }).catch(err => console.log(err))
    }
}
</script>

<style scoped lang="less">
    .content{
        .kind-title{
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            font-size: 0.37rem;
            font-family: "楷体";
            font-weight: bold;
        }
        ul{
            li{
                width: 1.6rem;
                height: 1.90rem;
                float: left;
                border-right: 1px solid #f6f6f6;
                border-bottom: 1px solid #f6f6f6;
                box-sizing: border-box;
                text-align: center;
                img{
                    width: 100%;
                    height: 80%;
                    display: block;
                }
                p{
                    background: #ffffff;
                    height: 20%;
                    font-size: 0.19rem;
                    color: #262626;
                }
            }
            li:nth-child(4n){
                border-right: 0;
            }
        }
    }
</style>

