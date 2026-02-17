const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-schibsted-grotesk text-2xl font-bold">Agenda</h2>
      <ul>
        {agendaItems.map((item) => (
          <li className="text-light-100 text-lg max-sm:text-sm" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventAgenda;
