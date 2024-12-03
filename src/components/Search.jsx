import empty from "./../assets/images/empty.svg";
import RecipeItem from "./RecipeItem";

export function Search({ recipes,onPreviewRecipe }) {
  function previewRecipe(recipe){
    onPreviewRecipe(recipe);
  }

  return (
    <div>
      {recipes.length == 0 ? (
        <div className="column aic jcc g32 p32">
          <img src={empty} width="45px" alt="image-project" />
          <div>Aucun resultat</div>
        </div>
      ) : (
        <div className="grid c3">
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.name}
              recipe={recipe}
              onPreviewRecipe={(recipe) => previewRecipe(recipe)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
