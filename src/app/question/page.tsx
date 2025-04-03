"use client";

import { Choices } from "@/components/choices";
import { Container } from "@/components/container";
import { TRIVIA_API_URL } from "@/constant";
import { useFetch } from "@/hooks/use-fetch";
import { Question } from "@/types";
import { useQueryState } from "nuqs";
import { useState } from "react";

interface TriviaQuestion {
  results: Question[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [category] = useQueryState("category");
  const [difficulty] = useQueryState("difficulty");

  const { data, loading } = useFetch<TriviaQuestion>(
    `${TRIVIA_API_URL}&category=${category}&difficulty=${difficulty}`
  );

  return (
    <Container>
      <p className="text-black text-2xl">Question {currentQuestion + 1}</p>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : data && data.results && data.results.length > 0 ? (
        data.results.map((item, index) => {
          const incorrectAnswers = Array.isArray(item.incorrect_answers)
            ? item.incorrect_answers
            : [];
          const allChoices = shuffleArray([
            ...incorrectAnswers,
            item.correct_answer,
          ]);

          return (
            <div
              className={`${index === currentQuestion ? "block" : "hidden"}`}
              key={item.question}
            >
              <p className="text-black">{item.question}</p>
              <Choices
                choices={allChoices}
                type={item.type}
                correctAnswer={item.correct_answer}
                nextQuestion={setCurrentQuestion}
                setScore={setScore}
              />
            </div>
          );
        })
      ) : (
        <p className="text-center">No questions available</p>
      )}
    </Container>
  );
};

export default QuestionPage;
