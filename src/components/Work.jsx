import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCover from "./EventCover";
import eventsData, {
  parseDate,
  isUpcoming,
  slideshowOrder,
} from "../data/eventsData";

const Slideshow = ({ events }) => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = events.length;

  useEffect(() => {
    if (paused || n < 2) return undefined;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (d) => setI((p) => (p + d + n) % n);

  return (
    <div
      className="eventsSlider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {events.map((ev, k) => (
        <article
          key={ev.id}
          className={`slide ${k === i ? "active" : ""}`}
          aria-hidden={k !== i}
        >
          <EventCover ev={ev} className="slidePoster" />
          <div className="slideText">
            <span className={`slideBadge ${isUpcoming(ev) ? "up" : ""}`}>
              {isUpcoming(ev) ? "Upcoming event" : "Hosted by Algobyte"}
            </span>
            <h3>{ev.title}</h3>
            <p className="slideDate">{ev.dateLabel}</p>
            <p className="slideDesc">{ev.description}</p>
            <Link to={`/events/${ev.id}`} className="slideBtn" tabIndex={k === i ? 0 : -1}>
              View details
            </Link>
          </div>
        </article>
      ))}
      {n > 1 && (
        <>
          <button className="sliderArrow prev" onClick={() => go(-1)} aria-label="Previous event">&#8249;</button>
          <button className="sliderArrow next" onClick={() => go(1)} aria-label="Next event">&#8250;</button>
          <div className="sliderDots">
            {events.map((ev, k) => (
              <button
                key={ev.id}
                className={k === i ? "on" : ""}
                onClick={() => setI(k)}
                aria-label={`Show ${ev.title}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Work = () => {
  const slides = slideshowOrder();
  const timeline = [...eventsData].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const rows = [];
  let lastYear = null;
  timeline.forEach((ev, n) => {
    const year = parseDate(ev.date).getFullYear();
    if (year !== lastYear) {
      rows.push({ type: "year", year });
      lastYear = year;
    }
    rows.push({ type: "event", ev, n });
  });

  // Fade timeline cards in as they scroll into view
  useEffect(() => {
    const items = document.querySelectorAll("#work .eventItem");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("isVisible"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("isVisible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="work">
      <h2>Events</h2>
      <Slideshow events={slides} />

      <h3 className="eventsSubheading">Event timeline</h3>
      <ol className="eventsTimeline">
        {rows.map((row) =>
          row.type === "year" ? (
            <li key={`y${row.year}`} className="eventYear">
              <span>{row.year}</span>
            </li>
          ) : (
            <li
              key={row.ev.id}
              className={`eventItem eventColor${row.n % 6} ${
                row.n % 2 === 0 ? "eventRight" : "eventLeft"
              }`}
            >
              <Link to={`/events/${row.ev.id}`} className="eventCard">
                <EventCover ev={row.ev} className="eventCover" />
                <span className="eventDate">{row.ev.dateLabel}</span>
                <h4>{row.ev.title}</h4>
                <span className="eventMore">View details</span>
              </Link>
              <span className="eventDot" aria-hidden="true">
                {parseDate(row.ev.date).getDate()}
              </span>
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default Work;
