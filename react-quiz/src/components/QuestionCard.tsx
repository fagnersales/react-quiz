// STYLES
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

import React from 'react';

// TYPES
import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  userAnswer,
  callback,
  answers,
  question,
  questionNumber,
  totalQuestions
}) => (
  <Wrapper>
    <p className='number'>
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />

    <div>
      {answers.map(answer => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard