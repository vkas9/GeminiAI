import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const geminiContext = createContext();

const GeminiProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loader, SetLoader] = useState(false);
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const onSet = async (input) => {
    setResultData("");
    SetLoader(true);
    setShowResult(true);
    setRecentPrompt(input);

    console.log("dskjd");
    const response = await runChat(input);

    setResultData(response);
    SetLoader(false);
    setInput("");
    console.log("dskjd");
    setPrevPrompt((prevPrompt) => {
      if (prevPrompt.includes(input)) {
        return [...prevPrompt];
      }
      else{
        return [...prevPrompt,input]
      }
      
    });
  };

  const Context = {
    input,
    setInput,
    onSet,
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loader,
    resultData,
  };

  return (
    <geminiContext.Provider value={Context}>{children}</geminiContext.Provider>
  );
};

export default GeminiProvider;
