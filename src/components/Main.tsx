import React from "react";
import GeneratedRecipe from "./GeneratedRecipe";
import IngredientList from "./IngredientList";
import sendRequest from "../service/OpenAi"
export default function Main(props:any) {
    let ingredients: Array<string> = props.ingredients;
    const [ingredientsState, setIngredients] = React.useState(ingredients);
    const [aiRecipe, setAiRecipe] = React.useState("");

    return <>
        <form data-testid="ingredient-form" action={add} className="add-ingredient-form">
            <input type="text" className="inputText" name="ingredient" placeholder="Add something here"/>
            <input type={"submit"} className="inputButton" aria-label="Add ingredient" value="+ Add"/>
        </form>
        {getIngredientList()}
    </>
    
    function add(formData: any) {
        setIngredients(oldValue => [...oldValue, formData.get("ingredient")]);
    }

    function getIngredientList() {
        return <>
            <IngredientList ingredients={ingredientsState} 
                            requestRecipe={requestRecipe}
                            deleteIngredients={deleteIngredients}
            ></IngredientList>
            <GeneratedRecipe result={aiRecipe}></GeneratedRecipe>
        </>
    }
    
    function deleteIngredients(ingredient:string) {
            setIngredients(oldValue=> 
                      oldValue.toSpliced(oldValue.findIndex(item=>item===ingredient),1)
                )
    }
    
     async function requestRecipe() {
            const result = await sendRequest(ingredientsState);
            setAiRecipe(result);
    }
    
}