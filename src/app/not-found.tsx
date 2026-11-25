import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex flex-1 max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-zinc-500">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-6" })}>
        Back to Home
      </Link>
    </main>
  );
}
