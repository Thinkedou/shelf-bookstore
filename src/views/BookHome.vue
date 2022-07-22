<template>

    <div class="tm-main-content">
        <section class="tm-margin-b-l">
            <header>
                <h2 class="tm-main-title">Welcome to our bookstore page ({{page}})</h2>    
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
                    <li v-for='(page) in nbPages' :key='page' class="nav-item nav-link active" @click="goToPage(page)">{{page}}</li>
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
        perPage:8, // nombre de bouquins par page
        nbPages:0, // initialisation à zéro en attendant de savoir le nb de bouquin total
        page:1, // page en cours 
        xTotal:0 // nb total de bouquins
    }),
    watch:{
        $route(newRoute){
            console.warn('OH la route a changée pour ',newRoute)
            this.page = this.$route.query.page 
        }
    },
    computed:{
        partialBookStore(){
            const startIndex = this.page==1?0:(this.page-1)*this.perPage
            const endIndex   = this.page*this.perPage
            return bookstore.slice(startIndex,endIndex)
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
    },
    goToPage(page){

        const routerOpt = {
            query:{
                page
            }
        }
        this.$router.push(routerOpt)
        console.log('go to page query  > ',page)
    }
  },
  created(){
    console.log('CREATED')
    this.xTotal = bookstore.length
    this.nbPages = Math.ceil(this.xTotal/this.perPage)

  }
};
</script>


<style>


</style>
