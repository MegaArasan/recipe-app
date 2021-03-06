import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  // const recipes = [
  //   {
  //     name: "Mutton Sukka",
  //     pic: "https://c.ndtvimg.com/2021-09/p3se4be8_mutton-sukka_625x300_01_September_21.jpg",
  //   },
  //   {
  //     name: "Paneer Butter Masala",
  //     pic: "https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg",
  //   },
  //   {
  //     name: "Ratatouile Dish",
  //     pic: "https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg",
  //   },
  //   {
  //     name: "Channa Masala",
  //     pic: "https://www.seriouseats.com/thmb/t9WrKWmayGJmdIGMQeiYG-3k_Mw=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__03__20160328-channa-masala-recipe-6-ae4913c04d5b43e9acef2917a74aa5fc.jpg",
  //   },
  //   {
  //     name: "Paneer Tikka",
  //     pic: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
  //   },
  //   {
  //     name: "Naan",
  //     pic: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-recipe-2-500x500.jpg",
  //   },
  //   {
  //     name: "Tandoori Chicken",
  //     pic: "https://sharkninja-cookingcircle.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/07/31170104/Tandori-chicken-1-rotated-1.jpg",
  //   },
  //   {
  //     name: "Chicken Briyani",
  //     pic: "https://foodfinger.in/wp-content/uploads/2021/04/Tandoori-Chicken-Biryani-scaled.jpg",
  //   },
  // ];
  return (
    <div className="App">
      <Recipelist />
    </div>
  );
}

function Recipelist() {
  const [recipes, setrecipes] = useState([]);
  const API_URL = "https://first-nodedemo.herokuapp.com/recipes";
  useEffect(() => {
    fetch(`${API_URL}`)
      .then((data) => data.json())
      .then((recipes) => setrecipes(recipes));
  }, []);

  return (
    <div className="recipe-list-container">
      {recipes && recipes.length < 0 ? (
        <Norecipes />
      ) : (
        recipes.map((recipe, index) => <Recipe recipe={recipe} key={index} />)
      )}
    </div>
  );
}

function Recipe({ recipe, id }) {
  return (
    <div className="recipe-container">
      <img className="recipe-pic" src={recipe.pic} alt={recipe.name} />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}

function Norecipes() {
  return (
    <div>
      <img
        src="https://previews.123rf.com/images/steveallenuk/steveallenuk1505/steveallenuk150500010/39657655-selection-of-cooking-spices-with-an-open-recipe-book-blank-pages-space-for-text.jpg"
        alt="No Recipes available "
      />
      <p>No Recipes available</p>
    </div>
  );
}
