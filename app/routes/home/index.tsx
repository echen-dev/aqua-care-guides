import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aqua Care Guides | Welcome" },
    {
      name: "description",
      content:
        "Find care guides for aquatic pet species ranging from turtles to fish",
    },
  ];
}

export default function Home() {
  return <section>My App</section>;
}
