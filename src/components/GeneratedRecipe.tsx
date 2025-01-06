import React, {useEffect, useState} from "react";
import sendRequest from "../service/OpenAi";
import showDown from "showdown";

export default function GeneratedRecipe(props: { ingredients: string[]; recipeShown: any; }) {
    const [result, setResult] = useState(null);

    // Fetch the result when the component mounts or when props.ingredients change
    useEffect(() => {
        if(props.ingredients.length>3) {
            sendRequest(props.ingredients).then(res => {
                setResult(res);
            });
        }

    }, [props.ingredients]);

    // Render the section when result is available
    return (
        props.recipeShown && result && (
            <section data-testid="generated-recipe">
                <h2>Generated Recipe</h2>
             <div dangerouslySetInnerHTML={{ __html: convertMarkDownToHTML(result) }}
                />
            </section>
        )
    );
    
    function convertMarkDownToHTML(result: string) {
        let converter= new showDown.Converter();
        return converter.makeHtml(result);
    }
}