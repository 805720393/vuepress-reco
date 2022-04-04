<template>
  <typewriter
    :speed="200"
    :full-erase="true"
    :interval="300"
    :words='["我一直认为人是立体的，直到有一天，我坐了一次地铁，这时候才知道人原来也可以是平面的!","假如生活欺骗了你，不要着急，拿出美颜相机，去欺骗生活!","希望所有的事都和长胖一样简单",".不笑运气差 一笑脸就大"]'>
    
</typewriter>
</template>

<script>
import Vue from 'vue'
import Typewriter from 'vue-typewriter'
 
Vue.use(Typewriter)
export default {

}
</script>

<style>

</style>