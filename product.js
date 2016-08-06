var products = [
  {Name: "Puppy Turtleneck", Description: "1: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://spoilyourselves.com/wp-content/uploads/2016/02/9.jpg"},
  {Name: "Puppy Turtleneck", Description: "2: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://www.wishforpets.com/wp-content/uploads/2014/09/dog-clothes.jpg"},
  {Name: "Puppy Turtleneck", Description: "3: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://g02.a.alicdn.com/kf/HTB1sdRSKFXXXXa7XpXXq6xXFXXXd/pet-shirt-pet-font-b-clothes-b-font-font-b-dog-b-font-font-b-clothes.jpg"},
  {Name: "Puppy Turtleneck", Description: "4: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://oddstuffmagazine.com/wp-content/uploads/2011/12/The-warm-dog-coat-from-Beantown-Handmade-dog-clothing.png"},
  {Name: "Puppy Turtleneck", Description: "5: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "https://blog.banggood.com/wp-content/uploads/2014/08/Designer-Dog-Apparel.jpg"},
  {Name: "Puppy Turtleneck", Description: "6: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://theawesomedaily.com/wp-content/uploads/2016/02/tobylittledude22.jpg"},
  {Name: "Puppy Turtleneck", Description: "7: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "https://s-media-cache-ak0.pinimg.com/236x/c9/25/70/c92570edff5c8e1cd25e99ad7add1421.jpg"},
  {Name: "Puppy Turtleneck", Description: "8: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"}
];

let productsContainer = document.getElementById("products");

//loop through products array
for (var i = 0; i < products.length; i++) {
  let cardContent ="";
  cardContent += ' <div class="product_card">';
  cardContent += "<p class='key_values'>" + products[i].Name + "</p>"; 
  cardContent += "<p class='key_values'>" + products[i].Description + "</p>"; 
  cardContent += "<p class='key_values'>" + products[i].Price + "</p>"; 
  cardContent += "<img class='link' src='" + products[i].URL + "'>";
  cardContent +="</div>";
  productsContainer.innerHTML += cardContent;
}
  