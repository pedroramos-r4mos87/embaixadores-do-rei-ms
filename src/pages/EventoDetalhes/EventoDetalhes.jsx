import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "../../data/events";

export default function EventoDetalhes() {
  const { slug } = useParams();

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return (
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <h1>Evento não encontrado</h1>
        <Link to="/eventos">Voltar para eventos</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: "90px 24px" }}>
      <div style={{ width: "min(900px, 100%)", margin: "0 auto" }}>
        <Link to="/eventos">
          <ArrowLeft size={17} />
          Voltar para eventos
        </Link>

        <h1>{event.title}</h1>
        <p>{event.description}</p>

        <div>
          <p>
            <CalendarDays size={17} /> {event.displayDate}
          </p>

          <p>
            <Clock size={17} /> {event.time}
          </p>

          <p>
            <MapPin size={17} /> {event.location}
          </p>
        </div>
      </div>
    </section>
  );
}