import React from "react";
import GeneratedRecipe from "./GeneratedRecipe";
import IngredientList from "./IngredientList";
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
        return <>
            <IngredientList ingredients={ingredientsState} requestRecipe={requestRecipe} ></IngredientList>
            <GeneratedRecipe recipeShown={recipeShown}></GeneratedRecipe>
        </>
        
    }

    function requestRecipe() {
            return recipeFunction(oldValue => !oldValue);
    }
    
}