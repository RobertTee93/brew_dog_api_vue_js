import Vue from "vue";


document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      beers: [],
      selectedBeerIndex: "",
      selectedBeer: null,
      favouriteBeers: []

    },
    mounted(){
      this.getAllBeers()
    },
    methods: {
      getAllBeers: function(){
        fetch("https://api.punkapi.com/v2/beers")
          .then(response => response.json())
          .then(data => this.beers = data)
      },
      getBeerById: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex]
      },
      addFavourite: function(){
        if (!this.favouriteBeers.includes(this.selectedBeer)){
          this.favouriteBeers.push(this.selectedBeer)
        }
      },
      deleteFavourite: function(index){
        this.favouriteBeers.splice(index, 1)
      }
    }
  })
})
