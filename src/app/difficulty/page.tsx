"use client";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { DIFFICULTY_LIST } from "@/constant";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

const DifficultyPage = () => {
  const [cateogry] = useQueryState("category");
  const router = useRouter();

  return (
    <Container>
      <p className="text-2xl text-black">Select Difficulty</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {DIFFICULTY_LIST.map((value) => (
          <Button
            label={value}
            key={value}
            onClick={() =>
              router.push(`/question?category=${cateogry}&difficulty=${value}`)
            }
          />
        ))}
      </div>
    </Container>
  );
};

export default DifficultyPage;
