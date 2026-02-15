import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({
  title,
  image,
  slug,
  location,
  date,
  time,
}: EventCardProps) => {
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      className="flex flex-col gap-3"
    >
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="h-75 w-full rounded-lg object-cover"
      />
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" width={14} height={14} alt="location" />
        <p className="text-light-200 text-sm font-light">{location}</p>
      </div>
      <p className="text-[20px] font-semibold line-clamp-1">{title}</p>
      <div className="text-light-200 flex flex-row flex-wrap items-center gap-4">
        <div className="flex flex-row gap-2">
          <Image src="/icons/calendar.svg" width={14} alt="date" height={14} />
          <p className="text-light-200 text-sm font-light">{date}</p>
        </div>
        <div className="flex flex-row gap-2">
          <Image src="/icons/clock.svg" width={14} alt="time" height={14} />
          <p className="text-light-200 text-sm font-light">{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
