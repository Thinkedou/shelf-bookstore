<template>
  <header class="tm-site-header">
    <h1 class="tm-site-name">Shelf</h1>
    <p class="tm-site-description">Your Online Bookstore</p>
    
    <nav class="navbar navbar-expand-md tm-main-nav-container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse tm-main-nav" id="tmMainNav">
            <ul class="nav nav-fill tm-main-nav-ul">
                <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/team">Team</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/contact">Contact Us</router-link></li>
            </ul>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "BookHeader",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style></style>