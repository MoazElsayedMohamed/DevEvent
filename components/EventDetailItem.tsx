import Image from "next/image";

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => {
  return (
    <div className="flex gap-2">
      <Image src={icon} alt={alt} width={17} height={17} />
      <p className="text-light-100 text-lg max-sm:text-sm">{label}</p>
    </div>
  );
};

export default EventDetailItem;
