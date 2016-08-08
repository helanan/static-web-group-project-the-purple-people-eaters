var products = [
  {Name: "Puppy Coat", Description: "Keeps your best friend warm!", Price: "$500", URL: "http://spoilyourselves.com/wp-content/uploads/2016/02/9.jpg"},
  {Name: "Dino Jammies", Description: "Transforms your puppy into a fierce dino!", Price: "$499", URL: "http://www.wishforpets.com/wp-content/uploads/2014/09/dog-clothes.jpg"},
  {Name: "Minnie Pullover", Description: "Who doesn't love Minnie Mouse!", Price: "$2", URL: "http://g02.a.alicdn.com/kf/HTB1sdRSKFXXXXa7XpXXq6xXFXXXd/pet-shirt-pet-font-b-clothes-b-font-font-b-dog-b-font-font-b-clothes.jpg"},
  {Name: "Knitted Sweater", Description: "Designed by Wes Anderson!", Price: "$25,000", URL: "http://oddstuffmagazine.com/wp-content/uploads/2011/12/The-warm-dog-coat-from-Beantown-Handmade-dog-clothing.png"},
  {Name: "Puppy Cape", Description: "Shoes NOT included!", Price: "$7,599", URL: "https://blog.banggood.com/wp-content/uploads/2014/08/Designer-Dog-Apparel.jpg"},
  {Name: "Hipster Canine", Description: "Straight outta East Nashville!", Price: "$58", URL: "http://theawesomedaily.com/wp-content/uploads/2016/02/tobylittledude22.jpg"},
  {Name: "D.O.G.G.", Description: "Sup snoop?!", Price: "$500,000", URL: "https://s-media-cache-ak0.pinimg.com/236x/c9/25/70/c92570edff5c8e1cd25e99ad7add1421.jpg"},
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
