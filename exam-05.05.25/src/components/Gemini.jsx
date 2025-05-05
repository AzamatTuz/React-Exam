import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function Gemini() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [asks, setAsks] = useState([])
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    const asks = JSON.parse(localStorage.getItem("asks"))
    if (asks) {
        setAsks(asks)
    }
  }, [])

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    

    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      
      setAnswer(geminiResponse.text())
      setAsks([...asks, prompt])
      setPrompt('')
    } catch (error) {
      console.error(error);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('asks', JSON.stringify(asks))
  }, [asks])

  return (
    <div className="p-5 flex flex-col w-screen items-center justify-center min-h-screen gap-10">
      <section className="flex gap-10">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="outline-none bg-stone-500 text-white text-middle p-2 pl-4 pr-4 w-100 rounded-lg"
        />

        <button className="bg-stone-500 text-white p-2 pl-6 pr-6 rounded-lg cursor-pointer hover:bg-stone-600 ease-linear duration-150 outlie"  onClick={handleSubmit} type="submit">{loading ? "Loading..." : "Sumbit"}</button>
      </section>

      {answer && <section className="flex flex-col items-center justify-between gap-10 w-2xl">

        
        
<h1 className="w-2xl bg-stone-700 text-xl text-white p-5 rounded-xl font-semibold">{answer}</h1>

<ul className="flex flex-col bg-stone-700 rounded-xl p-10 gap-5 w-2xl text-white">
{asks ? (<> 

<h1 className="text-3xl">Вопросы:</h1>

{asks.map((a) => 

    <li className="text-lg">Вопрос: {a}</li>

)} </>) : ''}
</ul>

</section>} 
    </div>
  );
}

export default Gemini;