import React from 'react';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Qual é o simbolo da Casa Stark?</h1>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
