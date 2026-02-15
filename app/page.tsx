"use client";

import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";
import FeaturedEvents from "@/components/FeaturedEvents";
import { IEvent } from "@/database";
import { useEffect, useState } from "react";
// import { events } from "@/lib/events";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/events`);
        const { events } = await response.json();
        setEvents(events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="animate-fade-in-up ">
      <h1 className="text-center uppercase text-gradient text-6xl font-semibold max-sm:text-4xl ">
        the hub for every dev <br /> event you can't miss
      </h1>
      <p className="text-center mt-5">
        Hacathons, Meetups, and Conferences , All in one place
      </p>
      <ExploreButton />
      {events.length > 0 && (
        <FeaturedEvents events={events} isLoading={isLoading} />
      )}
    </section>
  );
};

export default page;
