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
                        v-for='book in partialBookStore'
                        :key="book.id"
                        :book-title="book.title"                 
                        :book-cover="book.cover"
                        @click.native="goToBooks(book.id)"
                     />
                   
                </div>   
            </div>
            
            <nav class="tm-gallery-nav">
                <ul v-if='nbPages>1' class="nav justify-content-center">

                    <li v-for='(page) in nbPages' :key='page' class="nav-item"><a class="nav-link active" href="#">{{page}}</a></li>
                 
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
    data:()=>({
        bookstore,
        perPage:8,
        nbPages:0,
        page:1,
        xTotal:0
    }),
    computed:{
    partialBookStore(){
        return bookstore.slice(16,24)
     }
    },
  methods: {
    goToBooks(bookId){
        this.$router.push({
            name:'bookDetails',
            params:{
                bookId
            }
        })
        console.log('click sur ',bookId)
    }
  },
  created(){
    this.xTotal = bookstore.length
    // this.xTotal = 8
    this.nbPages = Math.ceil(this.xTotal/this.perPage)
    console.log('nombre de pages à prévoir > ',this.nbPages )
  }
};
</script>


<style>


</style>
