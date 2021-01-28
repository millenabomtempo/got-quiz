import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Game of Thrones Edition</title>
        <meta property="og:image" content={db.bg} key="ogimage" />

      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Game of Thrones</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push('/quiz?name={name}');
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Diz ai seu nome"
                onChange={(e) => { setName(e.target.value); }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/millenabomtempo" />
    </QuizBackground>
  );
}
