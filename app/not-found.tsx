"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Custom404 = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/404.svg" height="300" width="300" alt="Error" />

      <h2 className="text-xl font-medium">404 Not Found!</h2>
      <Button asChild>
        <Link href="/document">Go back</Link>
      </Button>
    </div>
  );
};

export default Custom404;
