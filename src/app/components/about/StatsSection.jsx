import StatCard from "./StatCard";

const StatsSection = ({ stats }) => {
  if (!stats || !Array.isArray(stats)) return null;

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
