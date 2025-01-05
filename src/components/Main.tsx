import React from "react";
export default function Main(props:any) {
    let ingredients: Array<string> = props.ingredients;
    const [ingredientsState, ingredientsStateFunc] = React.useState(ingredients);
    const [recipeShown, recipeFunction] = React.useState(false);
    
    return <>
        <form data-testid="ingredient-form" action={submit} className="add-ingredient-form">
            <input type="text" className="inputText" name="ingredient" placeholder="Add something here"/>
            <input type={"submit"} className="inputButton" aria-label="Add ingredient" value="+ Add"/>
        </form>
        {getIngredientList()}
    </>
    
    function submit(formData: any) {
        ingredientsStateFunc(oldValue => [...oldValue, formData.get("ingredient")]);
    }

    function getIngredientList() {
        return ingredientsState.length==0 ?  "" : <div data-testid="ingredient-list">
            <h2>Ingredients to send</h2>
            <ul>
                {presentIngredients()}
            </ul>
            {showRequestButton() && 
                <button data-testid="request-button" 
                        onClick={requestRecipe}>Request a recipe
                </button> 
            }
            {recipeShown && <section data-testid="generated-recipe">
                <h2>Generated Recipe</h2>

            </section>}
        </div>;

        function showRequestButton() {
            return ingredientsState.length > 3;
        }
    }

    function requestRecipe() {
            return recipeFunction(oldValue => !oldValue);
    }

    function presentIngredients() {
        let i = 0;
        return ingredientsState.map(ingredient =>
            <li key={i++} data-testid={ingredient}>{ingredient}</li>)
    }
    
}