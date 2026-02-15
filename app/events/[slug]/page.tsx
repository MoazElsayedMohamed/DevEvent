import BookEvent from "@/components/BookEvent";
import EventAgenda from "@/components/EventAgenda";
import EventBookings from "@/components/EventBookings";
import EventCard from "@/components/EventCard";
import EventDetailItem from "@/components/EventDetailItem";
import EventDetails from "@/components/EventDetails";
import EventOrganizer from "@/components/EventOrganizer";
import EventOverview from "@/components/EventOverview";
import EventTags from "@/components/EventTags";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/events.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const EventDetailedPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  let event;
  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event with slug: ${slug}`);
    }

    const response = await request.json();
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    return notFound();
  }
  const {
    description,
    title,
    image,
    date,
    time,
    overview,
    venue,
    location,
    mode,
    audience,
    agenda,
    organizer,
    tags,
  } = event;

  if (!description) return notFound();

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <section id="event">
      <div className="flex w-2/3 flex-col items-start gap-4 max-lg:w-full mb-10">
        <h1 className="text-gradient text-6xl font-semibold max-sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-light-100 text-lg max-sm:text-sm">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-12 items-start mt-12 max-lg:items-center">
        <div className="flex flex-2 flex-col gap-8 max-lg:w-full">
          <Image
            src={image}
            alt="Event Banner"
            width={800}
            height={800}
            className="max-h-114.25 w-full rounded-lg object-cover"
          />
          <EventOverview overview={overview} />
          <EventDetails
            date={date}
            time={time}
            audience={audience}
            location={location}
            mode={mode}
          />
          <EventAgenda agendaItems={agenda} />
          <EventOrganizer organizer={organizer} />
          <EventTags tags={tags} />
        </div>
        <EventBookings bookings={bookings} />
      </div>
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2 className="font-schibsted-grotesk text-2xl font-bold">
          Similar Events
        </h2>
        <div className=" grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {similarEvents.length > 0 &&
            similarEvents.map((similarEvent: IEvent) => {
              return <EventCard {...similarEvent} key={similarEvent.title} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default EventDetailedPage;
