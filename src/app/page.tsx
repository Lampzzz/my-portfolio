"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function Page() {
  const router = useRouter();

  return (
    <Container>
      <p className="text-3xl text-black font-bold">Quiz Quest</p>
      <Button label="Play" onClick={() => router.push("/category")} />
    </Container>
  );
}
