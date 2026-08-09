export default function Loading() {
  return (
      <div className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
          <div className="self-stretch w-1/6 p-4 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          <div className="flex flex-col gap-4 items-center justify-between w-5/6 bg-white dark:bg-black sm:items-start">
            <div className="h-10 w-3/5 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

            <div className="flex flex-col items-center gap-6 w-full sm:items-start">
              <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-5 w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <div className="h-5 w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <div className="h-5 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              </div>
            </div>
          </div>
      </div>
  );
}
