<template>
    <header>
        <ul>
            <li>
                <slot name ="title1"></slot>
            </li>
            <li>
                <slot name="title2"></slot>
            </li>
            <li class="hLeft"> 
                <slot name="left"></slot>
            </li>
            <li class="hRight">
                <slot name="right"></slot>
            </li>
        </ul>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
    position: fixed;
    top: 0;
    height: 0.78rem;
    line-height: 0.78rem;
    background: #ffffff;
    width: 100%;
    text-align: center;
    ul{
        position: relative;
        li{
            display: inline-block;
            a {
                display: inline-block;
                width: 1.63rem;
                color: #666666;
                font-size: 0.3rem;
                font-family: "楷体";
            }
            &.active {
                color: #040404;
                border: 4px solid #1a1a1a
            }
        }
        .hLeft{
            position: absolute;
            left: 0.25rem;
            a{
                width: 0.33rem;
                height: 0.33rem;
            }
        }
        .hRight{
            position: absolute;            
            right: 0.25rem;
            a{
                width: 0.33rem;
                height: 0.33rem;
            }
        }
    }
    
}
</style>