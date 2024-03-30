import { createContext, useState } from "react";


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

    
    const response = await runChat(input);

    setResultData(response);
    SetLoader(false);
    setInput("");
   
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
