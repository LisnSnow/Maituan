<template>
  <div id="app">
      <appHeader></appHeader>
      <appNav></appNav>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from './components/header/header'
import Nav from './components/nav/nav'

export default {
    name:"app",
    data() {
        return {
            
        }
    },
    components:{
        "appHeader":Header,
        "appNav":Nav
    }
}
</script>

<style>

</style>
