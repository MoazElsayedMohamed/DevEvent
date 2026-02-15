const EventOverview = ({ overview }: { overview: string }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-schibsted-grotesk text-2xl font-bold">Overview</h2>
      <p className="text-light-100 text-lg max-sm:text-sm">{overview}</p>
    </section>
  );
};

export default EventOverview;
