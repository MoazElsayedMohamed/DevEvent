import React from "react";
import EventDetailItem from "./EventDetailItem";

interface EventDetailsProps {
  location: string;
  date: string;
  time: string;
  audience: string;
  mode: string;
}

const EventDetails = ({
  date,
  time,
  audience,
  location,
  mode,
}: EventDetailsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-schibsted-grotesk text-2xl font-bold">
        Event Details
      </h2>
      <EventDetailItem icon="/icons/calendar.svg" alt="date" label={date} />
      <EventDetailItem icon="/icons/clock.svg" alt="time" label={time} />
      <EventDetailItem icon="/icons/pin.svg" alt="location" label={location} />
      <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
      <EventDetailItem
        icon="/icons/audience.svg"
        alt="audience"
        label={audience}
      />
    </section>
  );
};

export default EventDetails;
