import { IEvent } from "@/database/event.model";
import EventCard from "./EventCard";

const FeaturedEvents = ({ events }: { events: IEvent[] }) => {
  return (
    <div className="mt-20 space-y-7" id="events">
      <h3 className="font-schibsted-grotesk text-2xl font-bold">
        Featured Events
      </h3>
      <ul className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 list-disc list-inside">
        {events.length > 0 &&
          events.map((event: IEvent) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FeaturedEvents;
