import { Button } from "./button";

interface ChoicesProps {
  choices: string[];
  type: "multiple" | "boolean";
  correctAnswer: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  nextQuestion: React.Dispatch<React.SetStateAction<number>>;
  onClick?: () => void;
}

export const Choices = ({
  choices,
  type,
  correctAnswer,
  setScore,
  nextQuestion,
}: ChoicesProps) => {
  const handleClick = (answer: string) => {
    if (answer === correctAnswer) setScore((prev) => prev + 1);
    nextQuestion((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {choices.map((value) => (
        <Button label={value} key={value} onClick={() => handleClick(value)} />
      ))}
    </div>
  );
};
