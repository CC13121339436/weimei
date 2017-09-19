<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="">
                    <div class="iconfont icon-footer-meigou"></div>
                    <p>美购</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont icon-footer-fenlei"></div>
                    <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont icon-footer-meiquan"></div>
                    <p>美圈</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont icon-footer-gouwu"></div>
                    <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <div class="iconfont icon-footer-mine"></div>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style scoped lang="less">
@fh: 0.74rem;
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: @fh;
    text-align: center;
    background: #f6f6f6;
    border-top: 2px solid #e3e2e1;
    z-index: 1;
    ul{
        display: flex;
        overflow: hidden;
        li{
             flex: 1;
             a{
                 display: block;
                 height: @fh;
                 color: #c0bbb8;
                 text-align: center;
                 padding-top:0.05rem;
                 text-decoration: none;
                 box-sizing: border-box;
                 font-size: 0.16rem;
                 .iconfont{
                    height: 0.36rem;
                    line-height: 0.36rem;
                    font-size: 0.35rem;
                    color: #8c8a8c;
                }
                &.active{
                    color: #111111
                }
             }
        }
    }
}
</style>

