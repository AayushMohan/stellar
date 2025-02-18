import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Categories />
      </section>
    </div>
  );
}
