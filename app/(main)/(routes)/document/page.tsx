"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const page = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();
  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => {
      router.push(`/document/${documentId}`);
    });
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image src="/empty.png" alt="empty" height={400} width={400} />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Insightify
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" /> Create a note
      </Button>
    </div>
  );
};

export default page;
