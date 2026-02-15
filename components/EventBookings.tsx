import BookEvent from "./BookEvent";

const EventBookings = ({ bookings }: { bookings: number }) => {
  return (
    <aside className="flex-1 w-full p-4 border-l border-gray-700 ">
      <div className="bg-dark-100 border-dark-200 card-shadow flex w-full flex-col gap-6 rounded-[10px] border px-5 py-6">
        <h2 className="font-schibsted-grotesk text-2xl font-bold">
          Book Your Spot
        </h2>
        {bookings > 0 ? (
          <p className="text-lg text-light-100 max-sm:text-sm">
            Join {bookings} people who have already booked their spot!
          </p>
        ) : (
          <p className="text-lg text-light-100 max-sm:text-sm">
            Be the first to book your spot!
          </p>
        )}

        <BookEvent />
      </div>
    </aside>
  );
};

export default EventBookings;
