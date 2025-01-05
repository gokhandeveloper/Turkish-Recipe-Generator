import OpenAI from "openai";

export default async function sendRequest(ingredientList:Array<string>) {
   const key = import.meta.env.VITE_OPEN_AI;
    const openai = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true
    });
    
    let systemPrompt= "Please format the result in markdown so that I can render it in web pages easily." +
        "Don't include things like 'Certainly, I will help.'" +
        "Cut to the dinner/lunch instead of saying here is the ingredient list"
    
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", 
            content: "Suggest me a dinner or lunch based on these ingredients: "  +
                ingredientList.toString() + ". "+ systemPrompt}],
        stream: true,
    });
    let string = "";
    for await (const chunk of stream) {
        string += chunk.choices[0]?.delta?.content || "";
    }
    return string;
}

