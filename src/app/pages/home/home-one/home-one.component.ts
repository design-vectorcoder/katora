import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})

export class HomeOneComponent implements OnInit {
  
  
  ngOnInit() {
   
  }

  products = [
    
    {
      "id":1,
      "type":"men",
      "image": "assets/images/product_images/product_image_01.jpg",
      "name" : "Vintage Jean",
      "brand" : "Liod Marcos",
      "discount_price":13.30,
      "price" : 18.75,
      "rating"  : 4,
      "availablity":true,
      "product_code" : "#EM1201",
      "tags": ["Jean ", "Men ", "Outwear"],
      "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
      "features" : ["Slim Fit", "Stretchable", "Free Shipping and delivery in 4 Days"],
      "image_gallery": [
         "assets/images/men/3-item-a.jpg",
         "assets/images/men/3-item-b.jpg",
         "assets/images/men/3-item-c.jpg",
         "assets/images/men/3-item-d.jpg",
         "assets/images/men/3-item-e.jpg"
      ],
      "category" : "Jeans",
      "category_type" : "clothing",
      "color"    : "Blue",
      "quantity" : 1,
      "status"   : 0,
      "popular"  : false
    },
    {
      "id":2,
      "type":"men",
      "brand" : "Bull Riders",
      "image": "assets/images/product_images/product_image_02.jpg",
      "name" : "Super Jacket",
      "discount_price":67.00,
      "price" : 82.75,
      "rating"  : 5,
      "availablity":true,
      "product_code" : "#EM1202",
      "tags": ["Winter ", "Men ", "Jacket"],
      "description":"Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolor",
      "features" : ["Loose Fit", "Pure Leather", "Free Shipping and delivery in 2 Days"],
      "image_gallery": [
        "assets/images/men/2-item-a.jpg",
        "assets/images/men/2-item-b.jpg",
        "assets/images/men/2-item-c.jpg",
        "assets/images/men/2-item-d.jpg",
        "assets/images/men/2-item-e.jpg"
      ],
      "category" : "Jackets",
      "category_type" : "clothing",
      "color"    : "Black",
      "quantity" : 1,
      "status"   : 0,
      "popular"  : false
    },
    {
        "id":3,
        "type":"men",
        "brand" : "Jeno Karla",
        "image": "assets/images/product_images/product_image_03.jpg",
        "name" : "Denim Pullover",
        "discount_price":36.00,
        "price" : 42.75,
        "rating"  : 4,
        "availablity":true,
        "product_code" : "#EM1203",
        "tags": ["Men ", "Pullover", "Denim"],
        "description":"Suspendisse porttitor ornare ligula. Nam massa erat, fermentum dolor quis, maximus ultrices diam. Aenean pellentesque auctor elementum. Nunc vitae tortor iaculis, mollis odio at, lacinia sapien. Mauris et leo sem. Curabitur sit amet enim nisi. Nunc placerat commodo sem, sed maximus purus",
        "features" : ["Slim Fit", "Denim Made", "Free Shipping in some areas and delivery in 4 Days"],
        "image_gallery": [
          "assets/images/men/1-item-a.jpg",
          "assets/images/men/1-item-b.jpg",
          "assets/images/men/1-item-c.jpg",
          "assets/images/men/1-item-d.jpg",
          "assets/images/men/1-item-e.jpg"
        ],
        "category" : "Shirt",
        "category_type" : "clothing",
        "color"    : "Blue",
        "quantity" : 2,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":4,
        "type":"men",
        "brand" : "The Capressi",
        "image": "assets/images/product_images/product_image_04.jpg",
        "name" : "Blue Jean",
        "discount_price":32.00,
        "price" : 40.82,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#EM1204",
        "tags": ["Blue", "Men", "Jean"],
        "description":"Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Slim Fit", "Relaxed", "Free Shipping and delivery in 1 Days"],
        "image_gallery": [
          "assets/images/men/4-item-a.jpg",
          "assets/images/men/4-item-b.jpg",
          "assets/images/men/4-item-c.jpg",
          "assets/images/men/4-item-d.jpg",
          "assets/images/men/4-item-e.jpg"
        ],
        "category" : "Jeans",
        "category_type" : "clothing",
        "color"    : "Blue",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":5,
        "type":"men",
        "brand" : "JK CK",
        "image": "assets/images/product_images/product_image_05.jpg",
        "name" : "Black T-Shirt",
        "discount_price":17.00,
        "price" : 22.75,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#EM1205",
        "tags": ["Black ", "Men ", "Summer"],
        "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Slim Fit", "Pure Cotton", "Free Shipping and delivery in 4 Days"],
        "image_gallery": [
          "assets/images/men/5-item-a.jpg",
          "assets/images/men/5-item-b.jpg",
          "assets/images/men/5-item-c.jpg",
          "assets/images/men/5-item-d.jpg",
          "assets/images/men/5-item-e.jpg"
        ],
        "category" : "T-Shirt",
        "category_type" : "clothing",
        "color"    : "Black",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":6,
        "type":"men",
        "brand" : "Nike",
        "image": "assets/images/product_images/product_image_06.jpg",
        "name" : "Men White AIR",
        "discount_price":55.00,
        "price" : 65.75,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#4330899",
        "tags": ["Black ", "White"],
        "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Leather", "Wipe with a clean, dry cloth to remove dust"],
        "image_gallery": [
          "assets/images/men/cat-shoes.jpg"
        ],
        "category" : "Shoes",
        "category_type" : "shoes",
        "color"    : "Black",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : true
    }
  ];

  

  blogs = [
    {
      "id":1,
      "type":"men",
      "image": "assets/images/men/3-item-a.jpg",
      "name" : "Vintage Jean",
      "brand" : "Liod Marcos",
      "discount_price":13.30,
      "price" : 18.75,
      "rating"  : 4,
      "availablity":true,
      "product_code" : "#EM1201",
      "tags": ["Jean ", "Men ", "Outwear"],
      "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
      "features" : ["Slim Fit", "Stretchable", "Free Shipping and delivery in 4 Days"],
      "image_gallery": [
         "assets/images/men/3-item-a.jpg",
         "assets/images/men/3-item-b.jpg",
         "assets/images/men/3-item-c.jpg",
         "assets/images/men/3-item-d.jpg",
         "assets/images/men/3-item-e.jpg"
      ],
      "category" : "Jeans",
      "category_type" : "clothing",
      "color"    : "Blue",
      "quantity" : 1,
      "status"   : 0,
      "popular"  : false
    },
    {
      "id":2,
      "type":"men",
      "brand" : "Bull Riders",
      "image": "assets/images/men/2-item-a.jpg",
      "name" : "Super Jacket",
      "discount_price":67.00,
      "price" : 82.75,
      "rating"  : 5,
      "availablity":true,
      "product_code" : "#EM1202",
      "tags": ["Winter ", "Men ", "Jacket"],
      "description":"Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolor",
      "features" : ["Loose Fit", "Pure Leather", "Free Shipping and delivery in 2 Days"],
      "image_gallery": [
        "assets/images/men/2-item-a.jpg",
        "assets/images/men/2-item-b.jpg",
        "assets/images/men/2-item-c.jpg",
        "assets/images/men/2-item-d.jpg",
        "assets/images/men/2-item-e.jpg"
      ],
      "category" : "Jackets",
      "category_type" : "clothing",
      "color"    : "Black",
      "quantity" : 1,
      "status"   : 0,
      "popular"  : false
    },
    {
        "id":3,
        "type":"men",
        "brand" : "Jeno Karla",
        "image": "assets/images/men/1-item-a.jpg",
        "name" : "Denim Pullover",
        "discount_price":36.00,
        "price" : 42.75,
        "rating"  : 4,
        "availablity":true,
        "product_code" : "#EM1203",
        "tags": ["Men ", "Pullover", "Denim"],
        "description":"Suspendisse porttitor ornare ligula. Nam massa erat, fermentum dolor quis, maximus ultrices diam. Aenean pellentesque auctor elementum. Nunc vitae tortor iaculis, mollis odio at, lacinia sapien. Mauris et leo sem. Curabitur sit amet enim nisi. Nunc placerat commodo sem, sed maximus purus",
        "features" : ["Slim Fit", "Denim Made", "Free Shipping in some areas and delivery in 4 Days"],
        "image_gallery": [
          "assets/images/men/1-item-a.jpg",
          "assets/images/men/1-item-b.jpg",
          "assets/images/men/1-item-c.jpg",
          "assets/images/men/1-item-d.jpg",
          "assets/images/men/1-item-e.jpg"
        ],
        "category" : "Shirt",
        "category_type" : "clothing",
        "color"    : "Blue",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":4,
        "type":"men",
        "brand" : "The Capressi",
        "image": "assets/images/men/4-item-a.jpg",
        "name" : "Blue Jean",
        "discount_price":32.00,
        "price" : 40.82,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#EM1204",
        "tags": ["Blue", "Men", "Jean"],
        "description":"Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Slim Fit", "Relaxed", "Free Shipping and delivery in 1 Days"],
        "image_gallery": [
          "assets/images/men/4-item-a.jpg",
          "assets/images/men/4-item-b.jpg",
          "assets/images/men/4-item-c.jpg",
          "assets/images/men/4-item-d.jpg",
          "assets/images/men/4-item-e.jpg"
        ],
        "category" : "Jeans",
        "category_type" : "clothing",
        "color"    : "Blue",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":5,
        "type":"men",
        "brand" : "JK CK",
        "image": "assets/images/men/5-item-a.jpg",
        "name" : "Black T-Shirt",
        "discount_price":17.00,
        "price" : 22.75,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#EM1205",
        "tags": ["Black ", "Men ", "Summer"],
        "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Slim Fit", "Pure Cotton", "Free Shipping and delivery in 4 Days"],
        "image_gallery": [
          "assets/images/men/5-item-a.jpg",
          "assets/images/men/5-item-b.jpg",
          "assets/images/men/5-item-c.jpg",
          "assets/images/men/5-item-d.jpg",
          "assets/images/men/5-item-e.jpg"
        ],
        "category" : "T-Shirt",
        "category_type" : "clothing",
        "color"    : "Black",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : false
    },
    {
        "id":6,
        "type":"men",
        "brand" : "Nike",
        "image": "assets/images/men/cat-shoes.jpg",
        "name" : "Men White AIR",
        "discount_price":55.00,
        "price" : 65.75,
        "rating"  : 5,
        "availablity":true,
        "product_code" : "#4330899",
        "tags": ["Black ", "White"],
        "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
        "features" : ["Leather", "Wipe with a clean, dry cloth to remove dust"],
        "image_gallery": [
          "assets/images/men/cat-shoes.jpg"
        ],
        "category" : "Shoes",
        "category_type" : "shoes",
        "color"    : "Black",
        "quantity" : 1,
        "status"   : 0,
        "popular"  : true
    }
  ];

  

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": false,

    responsive: [
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slidePopularConfig = {"slidesToShow": 2, "slidesToScroll": 2, "dots": true};
  slideBlogConfig = {"slidesToShow": 3, "slidesToScroll": 3, "dots": true}; 

  slickInit(e) {
    console.log('slick initialized');
  }

}
