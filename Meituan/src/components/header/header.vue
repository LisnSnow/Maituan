<template>
  <div class="header">
    <div class="search">
        <div class="back iconfont icon-arrow_lift"></div>
        <div class="search">
            <input type="text" name="" id="">
        </div>
        <div class="right">
            <i class="iconfont icon-favorite"></i>
            <i class="iconfont icon-add_circle"></i>
        </div>
    </div>
    <div class="brand"></div>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
  data() {
      return {
          
      }
  },
  props: {
    
  }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 140px;
    background: url("http://p0.meituan.net/xianfu/19c002c5963a289206e756092995a2fe230070.jpg") no-repeat center/cover;
}
.iconfont{
    color: #fff;
}
.search{
    position: relative;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.search .back{
    position: absolute;
    left: 0;
}
.search .right{
    position: absolute;
    right: 0;
}
.brand{
    width: 95%;
    height: 120px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 5px #ccc;
}
</style>
