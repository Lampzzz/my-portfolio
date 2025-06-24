import React from "react";
import Image from "next/image";

export default function Shuriken() {
  return (
    <Image
      src="/shuriken.svg"
      alt="Shuriken"
      width={48}
      height={48}
      className="animate-spin"
    />
  );
}
