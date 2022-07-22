<template>

    <div class="tm-main-content">
        <section class="tm-margin-b-l">
            <header>
                <h2 class="tm-main-title">Welcome to our bookstore</h2>    
            </header>
            
            <p>Shelf HTML template is provided by Tooplate. Please tell your friends about it. Thank you. Images are from Unsplash website. In tincidunt metus sed justo tincidunt sollicitudin. Curabitur magna tellus, condimentum vitae consectetur id, elementum sit amet erat.</p>
            
            <div class="tm-gallery">
                <div class="row">

                    <BookCard 
                        v-for='book in bookstore'
                        :key="book.id"
                        :book-title="book.title"                 
                        :book-cover="book.cover"
                        @click.native="goToBooks(book.id)"
                     />
                   
                </div>   
            </div>
            
            <nav class="tm-gallery-nav">
                <ul class="nav justify-content-center">
                    <li class="nav-item"><a class="nav-link active" href="#">1</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">2</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">3</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">4</a></li>                    
                </ul>
            </nav>
        </section>
        <HelperCard />                   

    </div>
 
</template>

<script>

import BookCard   from '../components/BookCard.vue'
import HelperCard from '../components/HelperCard.vue';
import { bookstore } from '@/assets/js/bookstore';


export default {
  name: "BookHome",
  components:{
    BookCard,
    HelperCard
},
  created() {},
  data:()=>({
    bookstore:bookstore
  }),
  methods: {
    goToBooks(bookId){
        this.$router.push({
            name:'bookDetails',
            params:{
                bookId:bookId
            }
        })
        console.log('click sur ',bookId)
    }
  },
};
</script>


<style>


</style>
