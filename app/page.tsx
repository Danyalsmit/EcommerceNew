import Card from "./CustomComponents/Card";
import Banner from "./CustomComponents/Banner";
import { Button } from "@/components/ui/button";
const cards = [1, 2, 3, 4];

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex w-full justify-between px-20">
        <h1>Popular Car</h1>
        <h1 className="TextSecond font-semibold cursor-pointer">View All</h1>
      </div>
      {/* Card Section 1 */}
      <section className="sm:flex justify-around gap-4  p-5 sm:p-10 sm:flex-wrap lg:flex-nowrap">
        {cards.map((_, index) => (
          <Card key={index} />
        ))}
      </section>
      <div className="flex w-full justify-between px-20">
        <h1>Recommendation Car</h1>
      </div>
      {/* Card Section 1 */}
      <section className="sm:flex justify-around gap-4 p-10 sm:flex-wrap lg:flex-nowrap">
        {cards.map((_, index) => (
          <Card key={index} />
        ))}
      </section>
      {/* Card Section 2 */}
      <section className="sm:flex justify-around gap-4 p-10 sm:flex-wrap lg:flex-nowrap">
        {cards.map((_, index) => (
          <Card key={index} />
        ))}
      </section>
      <div className="flex w-full justify-center items-center mb-6">
        <Button className="BackgroundSecond" variant="default">
          Show more car
        </Button>
      </div>
    </div>
  );
}
