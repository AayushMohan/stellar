import Card from "@/components/Card";
import Categories from "@/components/Categories";
import Collections from "@/components/Collections";
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
      <section className="pb-10">
        <Collections />
      </section>
      <section>
        <Card />
      </section>
    </div>
  );
}
