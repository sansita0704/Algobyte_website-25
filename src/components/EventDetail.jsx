import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCover from "./EventCover";
import eventsData, { photoUrl, isUpcoming } from "../data/eventsData";

const EventDetail = () => {
  const { id } = useParams();
  const ev = eventsData.find((e) => e.id === id);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!ev) {
    return (
      <main className="eventPage">
        <p>We couldn't find that event.</p>
        <a className="eventBack" href="/#work">Back to events</a>
      </main>
    );
  }

  return (
    <main className="eventPage">
      <a className="eventBack" href="/#work">&larr; Back to events</a>
      <div className="eventHero">
        <EventCover ev={ev} className="eventHeroImg" />
        <div>
          <p className="eventDate">{ev.dateLabel}</p>
          <h1>{ev.title}</h1>
          <p className="eventDesc">{ev.description}</p>
        </div>
      </div>

      <h2>Gallery</h2>
      {ev.gallery.length === 0 ? (
        <p className="eventNote">
          {isUpcoming(ev)
            ? "This event is coming up. Photos will be added after it takes place."
            : "More photos from this event will be added soon."}
        </p>
      ) : (
        <div className="eventGallery">
          {ev.gallery.map((f) => (
            <button key={f} className="eventThumb" onClick={() => setOpen(f)}>
              <img src={photoUrl(ev, f)} alt={`${ev.title} photo`} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {open && (
        <div className="eventLightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={photoUrl(ev, open)} alt={`${ev.title} enlarged`} />
          <button className="eventClose" aria-label="Close photo">&times;</button>
        </div>
      )}
    </main>
  );
};

export default EventDetail;
