"use client";

import { useEffect } from "react";
import "./globals.css";

function isRecoverable(error: Error) {
  const text = `${error.message} ${error.name}`;
  return (
    /Loading chunk|ChunkLoadError|failed to fetch dynamically imported module/i.test(text) ||
    /is not a function/i.test(text) ||
    /Server Reference ID did not match/i.test(text) ||
    /React Client Manifest|client reference manifest|IconMark|ViewportBoundary|MetadataBoundary/i.test(text)
  );
}

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
    if (isRecoverable(error)) {
      const key = "globalorbitusa-chunk-reload";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <main className="mx-auto max-w-xl px-6 py-20">
          <h1 className="text-2xl font-semibold">Application error</h1>
          <p className="mt-3 text-[var(--color-muted)]">
            Global Orbit USA could not render this page.
          </p>
          <p className="mt-2 text-xs text-[var(--color-muted)]">
            {error.digest ? `Reference: ${error.digest}` : null}
          </p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-8 inline-flex rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
