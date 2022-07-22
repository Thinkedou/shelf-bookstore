<template>
  <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
      
          <div class="tm-gallery-item-overlay">
              <img :src="`/img/${bookCover}`" alt="Image" class="img-fluid tm-img-center">
          </div>
          <p class="tm-figcaption">{{bookTitle}}</p>
      
  </figure> 
</template>

<script>
export default {
  name: "BookCard",
  created() {},
  data() {
    return {};
  },
  props: {
    bookCover:{
      type:String
    },
    bookTitle:{
      type:String
    }
  },
  methods: {},
};
</script>

<style></style>