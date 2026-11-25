"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex flex-1 max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred while loading this page.
      </p>
      <Button onClick={() => retry()} className="mt-6">
        Try again
      </Button>
    </main>
  );
}
