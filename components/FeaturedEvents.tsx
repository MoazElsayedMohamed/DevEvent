import { IEvent } from "@/database/event.model";
import EventCard from "./EventCard";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

const FeaturedEvents = ({
  events,
  isLoading = false,
}: {
  events: IEvent[];
  isLoading: boolean;
}) => {
  return (
    <div className="mt-20 space-y-7" id="events">
      <h3 className="font-schibsted-grotesk text-2xl font-bold">
        Featured Events
      </h3>

      <ul className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 list-disc list-inside">
        {events.length > 0 &&
          events.map((event: IEvent) => (
            <li key={event.title} className="list-none">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <Card className="w-full">
                    <CardHeader className="space-y-2">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="aspect-video w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-4/5" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                <EventCard {...event} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FeaturedEvents;
