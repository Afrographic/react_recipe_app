export default function RecipeItem({ recipe,onPreviewRecipe }) {
  const bgImage = { backgroundImage: `url(${recipe.mainURL})` };
  return (
    <div className="recipeItem column g16">
      <div className="imageContainer" style={bgImage}></div>
      <div>{recipe.name}</div>
      <button className="button" onClick={()=>onPreviewRecipe(recipe)}>Preview Recipe</button>
    </div>
  );
}
