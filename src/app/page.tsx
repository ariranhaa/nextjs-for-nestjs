import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

// page.tsx(server) -> menu.tsx(server) -> link(client)

export default async function HomePage() {
  return (
    <div>
      <header className="text-6xl font-bold text-center py-8">
        Aqui é a header
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-8">Footer</footer>
    </div>
  );
}
