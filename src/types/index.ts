export interface User {
  username: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Question {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: "multiple" | "boolean";
}
