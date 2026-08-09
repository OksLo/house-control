"use client";

import { useEffect } from "react";
import Button from "@/src/components/core/Button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Something went wrong
        </h2>
        {error.digest && (
          <p className="text-sm text-zinc-400 dark:text-zinc-600 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <Button onClick={unstable_retry}>
          Try again
        </Button>
      </div>
  );
}
