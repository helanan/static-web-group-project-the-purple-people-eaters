// Name Description Price URL Type Color Size Availability
var products = [
  {Name: "Puppy Turtleneck", Description: "1: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "2: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "3: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "4: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "5: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "6: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "7: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"},
  {Name: "Puppy Turtleneck", Description: "8: Cute turtleneck for your stylish pooch!", Price: "$50", URL: "http://dogmilk.designmilk.netdna-cdn.com/images/2015/12/long_dog_clothing_03.jpg"}
];



for (var i = 0; i < products.length; i++) {
  document.getElementById("product_information_" + i).innerHTML += "<p class='key_values'>" + products[i].Description + "</p>";
}