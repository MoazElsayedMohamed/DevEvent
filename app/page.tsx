"use client";

import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";
import { events } from "@/lib/events";

const page = () => {
  return (
    <section>
      <h1 className="text-center uppercase">
        the hub for every dev <br /> event you can't miss
      </h1>
      <p className="text-center mt-5">
        Hacathons, Meetups, and Conferences , All in one place
      </p>
      <ExploreButton />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
