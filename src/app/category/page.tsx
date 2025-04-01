"use client";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { CATEGORY_LIST } from "@/constant";
import { useRouter } from "next/navigation";

const CategoryPage = () => {
  const router = useRouter();

  return (
    <Container>
      <p className="text-2xl text-black">Select Category</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {CATEGORY_LIST.map((value) => (
          <Button
            label={value}
            key={value}
            onClick={() => router.push(`/difficulty?category=${value}`)}
          />
        ))}
      </div>
    </Container>
  );
};

export default CategoryPage;
