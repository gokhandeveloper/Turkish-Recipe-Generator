import React, {useEffect, useState} from "react";
import showDown from "showdown";

export default function GeneratedRecipe(props: { result: string}) {
    return (
        props.result && (
            <section data-testid="generated-recipe">
                <h2>Generated Recipe</h2>
             <div dangerouslySetInnerHTML={{ __html: convertMarkDownToHTML(props.result) }}
                />
            </section>
        )
    );
    
    function convertMarkDownToHTML(result: string) {
        let converter= new showDown.Converter();
        return converter.makeHtml(result);
    }
}