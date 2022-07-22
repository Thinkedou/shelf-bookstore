<template>
  <div id="app">
    <div class="container">
        <BookHeader/>
          <router-view></router-view>
        <BookFooter />
    </div>
  </div>
</template>

<script>

import BookHeader from './components/BookHeader.vue';
import BookFooter from './components/BookFooter.vue';

export default {
  name: "App",
  components:{
    BookHeader,
    BookFooter
},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>


<style>
@import './assets/font-awesome-4.7.0/css/font-awesome.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/tooplate-style.css';


</style>
