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
  incorrect_answer: string[];
  question: string;
  type: string;
}
