import timer from "./../assets/images/timer.svg";
import people from "./../assets/images/people.svg";
import ingre from "./../assets/images/ingre.svg";
import waiting from "./../assets/images/waiting.svg";

export default function RecipesPreview({ recipeToPreview }) {
  let recipe = {};
  if (recipeToPreview.length > 0) {
    recipe = recipeToPreview[0];
  }
  return (
    <div className="f1">
      {recipeToPreview.length == 0 ? (
        <div className="tac column aic p16 g32">
          <img src={waiting} width="40px" />
          <div> Please click to recipe to see a preview</div>
        </div>
      ) : (
        ""
      )}
      {recipeToPreview.length > 0 ? (
        <div className="column g8">
          <h2>{recipe.name}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis et
            ullam sint praesentium quas aut quos! Nemo amet est fugiat iste non
            nisi doloremque qui autem quibusdam rem quos earum, facere deserunt
            unde laudantium voluptatibus a quam. Nesciunt cupiditate ipsum vel
            aperiam doloribus, omnis neque id, maiores obcaecati nostrum officia
            beatae ipsa quidem,
          </p>
          <img
            src={recipe.mainURL}
            className="br8"
            width="100%"
            alt="Main_image"
          />
          <div className="h64"></div>
          <div className="row aic g16">
            <div className="row g8 aic">
              <img src={timer} width="24px" alt="Timer" />
              <div>{recipe.duration}</div>
            </div>
            <div className="row g8 aic">
              <img src={people} width="24px" alt="People" />
              <div>Serves {recipe.serves}</div>
            </div>
            <div className="row g8 aic">
              <img src={ingre} width="24px" alt="Ingredients" />
              <div>{recipe.type}</div>
            </div>
          </div>
          <p className="color">{recipe.pricePerServing} Per servings</p>
          <h3>Ingredients</h3>
          <div className="column g8">
            {recipe.ingredients.map((ingredient) => (
              <div className="b1 br8 row aic p16 g16" key={ingredient.name}>
                <img src={ingre} width="30px" alt="Ingredients" />
                <div className="column g8">
                  <div className="bold">{ingredient.name}</div>
                  <div>{ingredient.size}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="b1 br8 p16">
            <h2>Instructions</h2>
            <div>{recipe.instructions.trim()}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
