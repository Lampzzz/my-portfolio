"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function Page() {
  const router = useRouter();

  return (
    <Container>
      <div className="mb-8">
        <p className="text-3xl text-black font-bold">Quiz Quest</p>
      </div>
      <Button
        label="Play"
        onClick={() => router.push("/category")}
        styles="w-[200px]"
      />
    </Container>
  );
}
