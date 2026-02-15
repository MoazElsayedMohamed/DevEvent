const EventOrganizer = ({ organizer }: { organizer: string }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-schibsted-grotesk text-2xl font-bold">
        About the Organizer
      </h2>
      <p className="text-light-100 text-lg max-sm:text-sm">{organizer}</p>
    </section>
  );
};

export default EventOrganizer;
