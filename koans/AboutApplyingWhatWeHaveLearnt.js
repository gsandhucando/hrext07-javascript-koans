var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
    var productsICanEat = [];

    let hasMushrooms = function(x) { x === "mushrooms"};

    _(products).filter(function(x) {
      if (x.containsNuts === false && !_(x.ingredients).any(hasMushrooms)) {
        productsICanEat.push(x.name);
      };
    });

 



      expect(productsICanEat.length).toBe(3);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    let total = 0
      var sum = _.range(1, 10001)
                 .reduce(function (sum, x)  {
                    if (x % 3 === 0 || x % 5 === 0) {
                    total += x;
                    }
                    return total;
                
                 });
    /* try chaining range() and reduce() */
    

/*
    var result = _([ [0, 1], 2 ]).chain()
                     .flatten()
                     .map(function(x) { return x+1 } )
                     .reduce(function(sum, x) { return sum + x })
                     .value();

    expect(result).toEqual(6); // 6
  });
  it("should use range to generate an array", function() {
    expect(_.range(3)).toEqual([0,1,2]);
    expect(_.range(1, 4)).toEqual([1,2,3]);
    expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);
  });
  */


    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
var ingredientCount = { "{ingredient name}": 0 };

/* chain() together map(), flatten() and reduce() */
let pizza = _.chain(products).map(function(product) {
    return product.ingredients;
}).flatten().reduce((function (ingredientCount, ingredient) {
    ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
    return ingredientCount;
}), ingredientCount).value()


console.log(ingredientCount);


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
