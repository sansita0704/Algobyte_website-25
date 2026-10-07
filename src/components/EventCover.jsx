import React, { useState } from "react";

// Looks for cover.jpg, then cover.jpeg, then cover.png in the event's folder
const EXTENSIONS = ["jpg", "jpeg", "png"];

const EventCover = ({ ev, className }) => {
  const [attempt, setAttempt] = useState(0);

  // None of the three files was found: show a neat placeholder
  if (attempt >= EXTENSIONS.length) {
    return (
      <div className={`${className} coverFallback`}>
        <span>{ev.title}</span>
      </div>
    );
  }

  const src = `${process.env.PUBLIC_URL}/event-images/${ev.id}/cover.${EXTENSIONS[attempt]}`;

  return (
    <img
      className={className}
      src={src}
      alt={`${ev.title} poster`}
      onError={() => setAttempt((a) => a + 1)}
    />
  );
};

export default EventCover;