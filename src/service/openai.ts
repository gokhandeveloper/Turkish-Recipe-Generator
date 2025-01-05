import OpenAI from "openai";


export default async function sendRequest() {
   const key = import.meta.env.VITE_OPEN_AI;
    const openai = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true
    });
    
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", 
            content: "Suggest me a dinner or lunch based on these ingredients: Orange, chicken, spinach, potato" }],
        stream: true,
    });
    for await (const chunk of stream) {
       console.log(chunk.choices[0]?.delta?.content || "");
    }
}

