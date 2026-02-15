const EventTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => {
        return (
          <div
            className="bg-dark-100 text-light-100 text-xs rounded-[6px] px-5 py-2"
            key={tag}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default EventTags;
