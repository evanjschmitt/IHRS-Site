// !JSON ARRAY (BROWSE PAGE) //
var RECIPES = [
	{
		recipeImage: 'recipe-pizza.jpg',
		recipeName: 'Supreme Pizza',
		recipeDescription:
			'Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!',
		recipeTime: '1h 24min',
		recipeServing: '4 servings',
		ingredientOne: '1/4 batch pizza dough',
		ingredientTwo: '2 tablespoons Last-Minute Pizza Sauce',
		ingredientThree: '10 slices pepperoni',
		ingredientFour: '1 cup cooked and crumbled Italian sausage',
		ingredientFive: '2 large mushrooms, sliced',
		ingredientSix: '1/4 bell pepper, sliced',
		ingredientSeven: '1 tablespoon sliced black olives',
		ingredientEight: '1 cup shredded mozzarella cheese',
		instructionOne:
			'Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.',
		instructionTwo:
			'Flatten dough into a thin round and place on the pizza pan.',
		instructionThree: 'Spread pizza sauce over the dough.',
		instructionFour: 'Layer the toppings over the dough in the order listed.',
		instructionFive:
			'Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.',
	},
	{
		recipeImage: 'recipe-burger.jpg',
		recipeName: 'Classic Burger',
		recipeDescription:
			'Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.',
		recipeTime: '30 min',
		recipeServing: '4 servings',
		ingredientOne: '6lbs of ground beef',
		ingredientTwo: '16 poppyseed buns',
		ingredientThree: 'A head of lettuce',
		ingredientFour: '8 slices of tomatoe',
		ingredientFive: '8 slices of cheese',
		ingredientSix: '20 strips of bacon (optional)',
		ingredientSeven: 'A bottle of ketchup',
		ingredientEight: 'A bottle of mustard',
		instructionOne: 'Fire up the grill to 400 degrees',
		instructionTwo: 'Divide ground beef and flatten into patties',
		instructionThree: 'Cook until brown on the outside',
		instructionFour: 'Add toppings',
		instructionFive: 'Enjoy!',
	},
	{
		recipeImage: 'recipe-pilaf.jpg',
		recipeName: 'Chicken Biryani',
		recipeDescription:
			'Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.',
		recipeTime: '1h 15min',
		recipeServing: '6 servings',
		ingredientOne: '3lbs of chicken',
		ingredientTwo: 'Brown rice',
		ingredientThree: 'Sliced carrots',
		ingredientFour: 'Rice',
		ingredientFive: 'Spices',
		ingredientSix: 'Cheese',
		ingredientSeven: 'Basil',
		ingredientEight: 'Seasoning',
		instructionOne: 'Cook and season chicken',
		instructionTwo: 'Cook rice',
		instructionThree: 'Mix it in a bowl',
		instructionFour: 'Add toppings',
		instructionFive: 'Enjoy!',
	},
	{
		recipeImage: 'recipe-chowmein.jpg',
		recipeName: 'Ch. Chow Mein',
		recipeDescription:
			'A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!',
		recipeTime: '20 min',
		recipeServing: '4 servings',
		ingredientOne: '3lbs of chicken',
		ingredientTwo: 'Noodles',
		ingredientThree: 'Green beans',
		ingredientFour: 'Carrots',
		ingredientFive: 'Bell peppers',
		ingredientSix: 'Green onion',
		ingredientSeven: 'Basil',
		ingredientEight: 'Powedered cheese',
		instructionOne: 'Cook and season chicken',
		instructionTwo: 'Cook noodles',
		instructionThree: 'Mix it in a bowl',
		instructionFour: 'Add toppings',
		instructionFive: 'Enjoy!',
	},
];

function closeWindow() {
	console.log('Window Closed');
	$('#app').html(`
  <div class="browse">
  <div id="recipe-header">Recipes: Try some today!</div>
    <div class="browse-content">
    </div>
  </div>`);
	defaultRecipes();
}

function defaultRecipes() {
	$.each(
		RECIPES,
		function (
			index,
			recipe // ^ ^ ^ $.each(_userProfileInfo.recipes)
		) {
			$('.browse-content').append(`<div id="${index}"class="browse-wrapper">
    <div class="recipe-wrapper">
      <div class="recipe-card">
        <img src="../images/${recipe.recipeImage}" alt="" />
        <div class="description">
          <h4>${recipe.recipeName}</h4>
          <p>
            ${recipe.recipeDescription}
          </p>
          <div class="details">
            <div class="time">
              <img src="../images/time.svg" alt="" />
              <p>${recipe.recipeTime}</p>
            </div>
            <div class="serving">
              <img src="../images/servings.svg" alt="" />
              <p>${recipe.recipeServing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
			defaultRecipeDetails();
		}
	);
}

function defaultRecipeDetails() {
	$('.browse-wrapper').click(function (e) {
		let recipeList = e.currentTarget.id;
		console.log('clicked ' + recipeList);
		$('#app').html(`<div class="details-page">  
		<div class="details-top">
    <div class="details-img">
      <h3 class="title">${RECIPES[recipeList].recipeName}</h3>
      <img src="../images/${RECIPES[recipeList].recipeImage}" alt="" />
    </div>
    <div class="top-text">
      <h2>Description:</h2>
      <p>
        ${RECIPES[recipeList].recipeDescription}
      </p>
      <h3>Total Time:</h3>
      <p>${RECIPES[recipeList].recipeTime}</p>
      <h3>Servings:</h3>
      <p>${RECIPES[recipeList].recipeServing}</p>
    </div>
  </div>
  <div class="details-mid">
    <h2>Ingredients:</h2>
    <p>${RECIPES[recipeList].ingredientOne}</p>
    <p>${RECIPES[recipeList].ingredientTwo}</p>
    <p>${RECIPES[recipeList].ingredientThree}</p>
    <p>${RECIPES[recipeList].ingredientFour}</p>
    <p>${RECIPES[recipeList].ingredientFive}</p>
    <p>${RECIPES[recipeList].ingredientSix}</p>
    <p>${RECIPES[recipeList].ingredientSeven}</p>
    <p>${RECIPES[recipeList].ingredientEight}</p>
  </div>
  <div class="details-bottom">
    <h2>Instructions:</h2>
    <ol>
      <li>${RECIPES[recipeList].instructionOne}</li>
      <li>${RECIPES[recipeList].instructionTwo}</li>
      <li>${RECIPES[recipeList].instructionThree}</li>
      <li>${RECIPES[recipeList].instructionFour}</li>
      <li>${RECIPES[recipeList].instructionFive}</li>
    </ol>
    <div class="btns-wrapper">
      <div class="backBtn" onclick="closeWindow()">Go Back</div>
      <div class="editBtn">Edit Recipe</div>
    </div>
   </div>
  </div>`);
	});
}
// !JSON ARRAY (BROWSE PAGE) //