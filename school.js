let schools =[

    {
        "id": 1,
        "title": "Psychology",
        "location":"Liverpool",
        "price": 150,
        "image": "image/psychology.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 2,
        "title": "Art",
        "location":"Lagos",
        "price": 150,
        "image": "image/art.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 3,
        "title": "Chemistry",
        "location":"China",
        "price": 80,
        "image": "image/chemistry.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 4,
        "title": "Geography",
        "location":"California",
        "price": 100,
        "image": "image/geography.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 5,
        "title": "Java Programming Language",
        "location":"Dubai",
        "price": 150,
        "image": "image/java.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 5,
        "title": "Medicine",
        "location":"South Africa",
        "price": 90,
        "image": "image/medicine.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 7,
        "title": "Python Programming ",
        "location":"Japan",
        "price": 90,
        "image": "image/python.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 8,
        "title": "Economics",
        "location":"Doha",
        "price": 85,
        "image": "image/economics.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id": 9,
        "title": "Mathematics",
        "location":"London",
        "price": 100,
        "image": "image/mathematics.jpg",
        "availableInventory": 5
       
      }, 
      {
        "id":10,
        "title": "Architecture",
        "location":"New York",
        "price": 100,
        "image": "image/architecture.jpg",
        "availableInventory": 5
       
      }, 
]
var webstore = new Vue({
  el: '#app',
  data: {
      showProduct: true,
      lowHigh: 'Ascending',
      cart: [],
      searchInput: '',
      sortBy: '--Sort By--',
      name: "",
      number: "",
      schools: schools,
  },
  methods: {
      
      addToCart(school) {
          this.cart.push(school)
          school.availableInventory -= 1
          console.log(this.cart)
      },
      
     
      canAddToCart: function(school) {
          return school.availableInventory > this.cartCount(school.id);
      },
      cartCount: function(id) {
          let count = 0;
          for(let i = 0; i < this.cart.length; i++)
          {
              if(this.cart[i] === id)
              {
                  count++;
              }
          }
          return count;
          // return this.cart.length || '';
      },
      showCheckout() {
          this.showProduct = this.showProduct ? false : true;
      },
      checkOut() {
          let show = this.cart
          return show
      },
     
      removeCartItem(id) {
          let showcart = this.cart
          let less = this.school
          for (let i = 0; i < showcart.length; i++) {
              console.log(showcart[i].id)
              if (id == showcart[i].id) {
                  showcart.splice(i, 1)

              }
          }
          for (let i = 0; i < less.length; i++) {
              console.log(less[i].id)
              if (id == less[i].id) {
                  less[i].stock += 1

              }
          }
      },
     
      placeOrder() {
          let showcart = this.cart
          if (this.name == ''&& this.number == '' && this.cart.length == 0) {
              alert('Order not submitted')
          }
          else{
              alert('Order Submitted')
              this.name = ''
              this.number = ''
              showcart.splice(0, showcart.length)
          }
          
      },
      cartCount(id) {
          let count = 0
          for (let i = 0; i < this.cart.length; i++) {
              if (this.cart[i] === id) {
                  count++;
              }
          }
          return count
      },
      sortByPrice: function (priceArray) {
          function compare(a, b) {
              if (a.price > b.price)
                  return 1;
              if (a.price < b.price)
                  return -1;
              return 0;
          }
          return priceArray.sort(compare);
      },
      sortBySubject: function (titleArray) {
          function compare(a, b) {
              if (a.title > b.title)
                  return 1;
              if (a.title < b.title)
                  return -1;
              return 0;
          }
          return titleArray.sort(compare);
      },
      sortByLocation: function (locationArray) {
          function compare(a, b) {
              if (a.location > b.location)
                  return 1;
              if (a.location < b.location)
                  return -1;
              return 0;
          }
          return locationArray.sort(compare);
      },
      sortByAva: function (avaArray) {
          function compare(a, b) {
              if (a.availableInventory > b.availableInventory)
                  return 1;
              if (a.availableInventory < b.availableInventory)
                  return -1;
              return 0;
          }
          return avaArray.sort(compare);
      },

      filterLessons: function () {
          let lessons = this.schools

          lessons = lessons.filter((school) => {
              return school.title.toLowerCase().match(this.searchInput.toLowerCase()) || school.location.toLowerCase().match(this.searchInput.toLowerCase())
          })
          if (this.sortBy == 'price') {
              lessons = this.sortByPrice(lessons)
          }
          else if (this.sortBy == 'subject') {
              lessons = this.sortBySubject(lessons)
          }
          else if (this.sortBy == 'location') {
              lessons = this.sortByLocation(lessons)
          }
          else if (this.sortBy == 'stock') {
              lessons = this.sortByAva(lessons)
          }

          if (this.lowHigh == 'Ascending') {
              return lessons
          }
          else if (this.lowHigh == 'Descending') {
              return lessons.reverse()
          }
          return lessons
      }

  },
  computed: {
      cartItemCount: function () {
          return this.cart.length
      },
  }
});