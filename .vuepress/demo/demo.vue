<template>
  <div class="container">
        <div class="img-box">
            <img src="../public/img/背景1.jpeg" alt="">
            <img src="../public/img/背景1.jpeg" alt="">
            <img src="../public/img/背景1.jpeg" alt="">
            <img src="../public/img/背景1.jpeg" alt="">
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    width: 360px;
    height: 640px;
}
.container .img-box{
    /* 相对定位 */
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    /* 动画过渡 */
    transition: 0.5s;
}
.container img{
    /* 绝对定位 */
    position: absolute;
    width: 100%;
    height: 100%;
    /* 对图片进行剪切，保留原有尺寸比例，内容被缩放 */
    object-fit: contain;
    background-color: #646464;
    /* 动画过渡 */
    transition: 0.5s;
}
.container:hover .img-box{
    /* 旋转-30度 倾斜25度 缩放为0.8倍 */
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    margin-top: 80px;
}
/* 鼠标移入，改变每一张图片的位置、不透明度、动画延迟时间 */
.container:hover img:nth-child(4){
    transform: translate(160px,-160px);
    opacity: 1;
    transition-delay: 0.5s;
}
.container:hover img:nth-child(3){
    transform: translate(120px,-120px);
    opacity: 0.8;
    transition-delay: 0.5s;
}
.container:hover img:nth-child(2){
    transform: translate(80px,-80px);
    opacity: 0.6;
    transition-delay: 0.5s;
}
.container:hover img:nth-child(1){
    transform: translate(40px,-40px);
    opacity: 0.4;
    transition-delay: 0.5s;
}
</style>