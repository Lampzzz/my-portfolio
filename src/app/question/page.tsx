"use client";

import { Container } from "@/components/container";
import { TRIVIA_API_URL } from "@/constant";
import { useFetch } from "@/hooks/use-fetch";
import { Question } from "@/types";
import { useQueryState } from "nuqs";
import { useState } from "react";

interface TriviaQuestion {
  results: Question[];
}

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [category] = useQueryState("category");
  const [difficulty] = useQueryState("difficulty");

  const { data, loading } = useFetch<TriviaQuestion>(
    `${TRIVIA_API_URL}&category=${category}&difficulty=${difficulty}`
  );

  // console.log("data", data);

  return (
    <Container>
      <p className="text-black text-2xl">Question</p>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : data ? (
        data.results.map((item, index) => (
          <div
            className={`${index === currentQuestion ? "block" : "hidden"}`}
            key={item.question}
          >
            <p className="text-black">{item.question}</p>
          </div>
        ))
      ) : (
        <p className="text-center">No categories available</p>
      )}
    </Container>
  );
};

export default QuestionPage;
