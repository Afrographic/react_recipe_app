import { useState } from "react";
import RecipesPreview from "./components/RecipesPreview";
import RecipeItem from "./components/RecipeItem";
import { Search } from "./components/Search";
import search from "./assets/images/search.svg";
import close from "./assets/images/close.svg";
import ag from "./assets/images/ag.png";

function App() {
  const dummyRecipes = [
    {
      name: "Ndole",
      mainURL: "http://localhost:3000/images/ndole.jpg",
      duration: "45 minutes",
      serves: 4,
      type: "Vegetarian",
      pricePerServing: "$ 1.9511",
      ingredients: [
        {
          name: "Ingredient 1",
          size: "800 g",
        },
        {
          name: "Ingredient 2",
          size: "150 g",
        },
        {
          name: "Ingredient 3",
          size: "300 g",
        },
      ],
      instructions: `
        1 - Who cares?
        2 - All this will finish anyway
        3 - Easy project
      `,
    },
    {
      name: "Pasta",
      mainURL: "http://localhost:3000/images/pasta.jpg",
      duration: "45 minutes",
      serves: 4,
      type: "Foodatarian",
      pricePerServing: "$ 2.5",
      ingredients: [
        {
          name: "Koto 1",
          size: "125 g",
        },
        {
          name: "Van 2",
          size: "95 g",
        },
        {
          name: "Pastel 3",
          size: "75 g",
        },
      ],
      instructions: `
        1 - Who cares?
        2 - All this will finish anyway
        3 - Easy project
      `,
    },
    {
      name: "Pizza",
      mainURL: "http://localhost:3000/images/pizza.jpg",
      duration: "45 minutes",
      serves: 4,
      type: "Metarian",
      pricePerServing: "$ 3.5",
      ingredients: [
        {
          name: "Madara 1",
          size: "7 g",
        },
        {
          name: "Itachi 2",
          size: "5 g",
        },
        {
          name: "Gon 3",
          size: "2 g",
        },
      ],
      instructions: `
        1 - Who cares?
        2 - All this will finish anyway
        3 - Easy project
      `,
    },
  ];
  const [recipes, setRecipes] = useState(dummyRecipes);
  const [recipeToPreview, setRecipeToPreview] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchRecipes, setSearchRecipes] = useState([]);

  function previewRecipe(recipe) {
    let recipes = [];
    recipes.push(recipe);
    setRecipeToPreview(recipes);
    window.scrollTo(0, 0);
  }

  function searchRecipe(token) {
    if (token.trim().length == 0) {
      closeSearch();
      return;
    }
    let recipes = [];
    setSearching(true);
    for (let i = 0; i <= dummyRecipes.length - 1; i++) {
      if (dummyRecipes[i].name.toLowerCase().includes(token.toLowerCase())) {
        recipes.push(dummyRecipes[i]);
      }
    }
    setSearchRecipes(recipes);
  }

  function closeSearch() {
    setSearching(false);
    let searchInput = document.querySelector("#searchInput");
    searchInput.value = "";
    searchInput.focus();
  }

  return (
    <div className="container">
      <h1 className="row aic g16">
        <img src={ag} width="35px" alt="afro-logo"/>
        <div>Food App by Afrographix studio</div>
      </h1>
      <div className="row b1 p16 br8 aic">
        <input
          type="Recherche"
          className="f1"
          id="searchInput"
          placeholder="Recherche..."
          onChange={(e) => searchRecipe(e.target.value)}
        />
        {searching ? (
          <img src={close} width="24px" alt="Close" className="cp" onClick={()=>closeSearch()} />
        ) : (
          <img src={search} width="24px" alt="Search" className="cp" />
        )}
      </div>
      {!searching ? (
        <div className="row g16">
          <div className="recipes">
            {recipes.map((recipe) => (
              <RecipeItem
                key={recipe.name}
                recipe={recipe}
                onPreviewRecipe={(recipe) => previewRecipe(recipe)}
              />
            ))}
          </div>
          <RecipesPreview recipeToPreview={recipeToPreview} />
        </div>
      ) : (
        <Search
          recipes={searchRecipes}
          onPreviewRecipe={(recipe) => {
            previewRecipe(recipe);
            closeSearch();
          }}
        />
      )}
    </div>
  );
}

export default App;
