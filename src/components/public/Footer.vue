<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="">首页</router-link>
            </li>
            <li>
                <router-link to="">分类</router-link>
            </li>
            <li>
                <router-link to="">购物车</router-link>
            </li>
            <li>
                <router-link to="">我的</router-link>
            </li>
            <li>
                <router-link to="">更多</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name : "footer"
    }
</script>

<style scoped lang="scss">
    .footer {position:fixed; bottom:0; left: 0; width: 100%; height: 50px; border-top: 1px solid #ccc; line-height: 50px; text-align: center; background:#fff;border-top:1px solid #ccc;z-index: 1;}
    .footer ul { overflow:hidden;}  
    .footer li { float:left; width:20%}
</style>

