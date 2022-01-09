import React, { useState } from 'react';
import Questions from './Questions';
import questions from './data';

function App() {
  const [questionss, setQuestions] = useState(questions);
  return (
    <>
      <main>
        <div className="container">
          <h3>Questions And Answers About Login</h3>
          <div>
            {questionss.map((question) => {
              return <Questions key={question.id} {...question} />
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
