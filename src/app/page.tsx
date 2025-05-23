import { Header } from "@/components/Header";

// page.tsx(server) -> menu.tsx(server) -> link(client)

export default async function HomePage() {
  console.log("Home Page");
  return (
    <div>
      <Header />
    </div>
  );
}
