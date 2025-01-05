import React from "react";
export default function IngredientList(props: 
{ ingredients: any[]; requestRecipe: () => void; }) {
    
        return props.ingredients.length==0 ?  "" :
            <div data-testid="ingredient-list">
                <h2>Ingredients to send</h2>
                <ul>
                    {mapIngredients()}
                </ul>

                {showRequestButton() &&
                    <button data-testid="request-button"
                            onClick={()=>props.requestRecipe()}>Request a recipe
                    </button>
                }
            </div>;

    function mapIngredients() {
        let i = 0;
        return props.ingredients.map(ingredient =>
            <li key={i++} data-testid={ingredient}>{ingredient}</li>)
    }

    function showRequestButton() {
        return props.ingredients.length > 3;
    }
   
    
    
}