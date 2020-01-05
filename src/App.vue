<template>
  <div id="app">
    <div id="nav">
      <h2>龙哥666666</h2>
      <h3>
        二零二零，开年大吉！
      </h3>
      <h6>万事如意</h6>
      <h6>合家欢乐</h6>
    </div>
    <div class="imgBra">
      <ul>
        <li v-for="(item, key) in this.arr" :key="key">
          <img :src="item.pic" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import Product from "../src/components/AxiosBos/product/product_ser";
const _product = new Product();
export default {
  data(){
    return {
      arr: this.$store.state.list
    };
  },
  mounted() {
    _product.shopImg().then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
      let arr = res.data.data;
      // eslint-disable-next-line no-console
      console.log(arr)
      this.$store.commit("addCart", arr);
    });
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  animation: move 0.5s linear infinite;
}
@keyframes move {
  100% {
    color: salmon;
  }
  80%{
    color: gold;
  }
  60% {
    color: deeppink;
  }
}

ul{
  list-style: none;
  li{
    height: 100%;
    width: 100%;
    img{
      border: 1px solid darkcyan;
      border-radius: 8px;
      padding: 10px;
      width: 180px;
      height: 180px;
    }
  }
}
</style>
