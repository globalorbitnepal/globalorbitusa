import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-lg text-[var(--color-muted)]">
        That address is not part of the Global Orbit USA site yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-medium text-white"
      >
        Back to home
      </Link>
    </Container>
  );
}
