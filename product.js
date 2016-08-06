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

var cardInfo = ["Name", "Description", "Price", "URL"];

for (var i = 0; i < products.length; i++) {
  var infoDiv = document.getElementById("product_information_" + i);
  cardInfo.forEach(item => infoDiv.innerHTML += (item !== "URL") ? `<p class='key_values'>${products[i][item]}</p>` :
    `<img class='link' src='${products[i][item]}'>`)
}

// for (var i = 0; i < products.length; i++) {
//   var infoDiv = document.getElementById("product_information_" + i);
//   cardInfo.forEach(item => item !== "URL" ? infoDiv.innerHTML += `<p class='key_values'>${products[i][item]}</p>` :
//     infoDiv.innerHTML += `<a href='${products[i][item]}'>Link</a>`)
// }


// for (var i = 0; i < products.length; i++) {
//   var infoDiv = document.getElementById("product_information_" + i);
//   cardInfo.forEach(function(item) {
//     if (item !== "URL") {
//       infoDiv.innerHTML += "<p class='key_values'>" + products[i][item] + "</p>";
//     } else {
//       infoDiv.innerHTML += "<a href='" + products[i][item] + "'>" + "Link" + "</a>";
//     }
//   })
// }

//    var infoDiv = document.getElementById("product_information_" + i);
//   infoDiv.innerHTML += "<p class='key_values'>" + products[i].Name + "</p>";
//   infoDiv.innerHTML += "<p class='key_values'>" + products[i].Description + "</p>";
//   infoDiv.innerHTML += "<p class='key_values'>" + products[i].Price + "</p>";
//   infoDiv.innerHTML += "<p class='key_values'>" + products[i].URL + "</p>";