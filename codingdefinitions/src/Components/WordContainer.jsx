import WordBubble from "./WordBubble";

function WordContainer({defArray}) {
    
    return(
  <div className="word-display">
      <WordBubble wordArray={defArray}/>
  </div>
  );
}

export default WordContainer;
