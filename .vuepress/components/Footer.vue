<template>
  <div>
       <a href="https://afdian.net/@lxyyyds">打赏</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    /* 相对定位 */
    position: relative;
    width: 400px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
    /* 渐变背景 */
    background: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    z-index: 1;
}
/* 发光效果 */
a::before{
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    /* 渐变背景 */
    background: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    /* 位于按钮之下 */
    z-index: -1;
    /* 设置模糊度 显示发光效果 */
    filter: blur(20px);
}
/* 鼠标移入执行动画 */
a:hover{
    /* 动画：名称 时间 infinite是无限次播放 */
    animation: streamer 8s infinite;
}
a:hover::before{
    animation: streamer 8s infinite;
}
/* 接下来定义动画 */
@keyframes streamer{
    100%{
        /* 背景位置 */
        background-position: -400% 0;
    }
}
</style>