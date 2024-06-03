import { FaCircleCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PlanCard = ({ title, price, description, features }: PlanCardProps) => {
  return (
    <div className="w-full md:w-[450px] shadow-xl border rounded-xl border-zinc-300">
      <div className="h-full w-full p-6 flex flex-col gap-6">
        <span>{title}</span>
        <h1 className="font-semibold text-2xl">${price}</h1>
        <p className="text-sm">{description}</p>
        {features.map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <FaCircleCheck className="text-customBlue" />
            <p>{feature}</p>
          </div>
        ))}
        <div className="flex justify-center mt-3">
          <button className="hover:bg-customBlue hover:text-zinc-50 flex justify-center shadow-xl items-center gap-2 p-3 border-2 border-customBlue w-48 rounded-xl">
            <h1 className="font-semibold">Get Started</h1>
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Planos = () => {
  const plans: Plan[] = [
    {
      title: "Basic",
      price: "24.90",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem corporis ullam ratione!",
      features: ["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."]
    },
    {
      title: "Standard",
      price: "49.90",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem corporis ullam ratione!",
      features: ["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."]
    },
    {
      title: "Premium",
      price: "34.90",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem corporis ullam ratione!",
      features: ["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."]
    },
  ];

  return (
    <div className="w-full max-h-screen">
      <div className="w-full max-w-[1240px] mx-auto mt-[700px] lg:mt-0">
        <h1 className="flex justify-center p-6 uppercase text-3xl font-semibold">Nossos Planos</h1>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-8 p-3 w-full">
          {plans.map(({ title, price, description, features }, index) => (
            <PlanCard
              key={index}
              title={title}
              price={price}
              description={description}
              features={features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planos;
