"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { CATEGORY_TRIVIA_API_URL } from "@/constant";
import { useFetch } from "@/hooks/use-fetch";
import { Category } from "@/types";

interface TriviaCategories {
  trivia_categories: Category[];
}

const CategoryPage = () => {
  const router = useRouter();
  const { data, loading } = useFetch<TriviaCategories>(CATEGORY_TRIVIA_API_URL);

  return (
    <Container>
      <p className="text-2xl text-black">Select Category</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : data ? (
          data?.trivia_categories
            .slice(0, 10)
            .map((item) => (
              <Button
                label={item.name}
                key={item.id}
                onClick={() => router.push(`/difficulty?category=${item.id}`)}
              />
            ))
        ) : (
          <p className="text-center">No categories available</p>
        )}
      </div>
    </Container>
  );
};

export default CategoryPage;
