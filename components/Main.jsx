import React from "react";
export default function Main() {
    
    let ingredients = [];
    
    const [ingredientsState, ingredientsStateFunc] =  React.useState(ingredients)
    return <form action={submit} className="add-ingredient-form">
        <input type="text" className="inputText" name= "ingredient" placeholder="Add something here"/>
        <input type={"submit"} className="inputButton"  aria-label="Add ingredient"  value="+ Add"/>
            <ul>
                {presentIngredients(ingredientsState)}
            </ul>
    </form>

    function submit(formData) {
        ingredientsStateFunc(oldValue => [...oldValue, formData.get("ingredient")]);
        
    }

    function presentIngredients ()  {
        let i=0;
        return  ingredientsState.map(ingredient =>
            <li key={i++} >{ingredient}</li>)

    }
    

}