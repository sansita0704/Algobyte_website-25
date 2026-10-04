// One block per event. Cover poster: public/event-images/<id>/<cover>
// Extra photos (optional): put in the same folder and list them in "gallery".
// "date" = first day (YYYY-MM-DD). "endDate" only for multi-day events.
const eventsData = [
  {
    id: "orientation-2026",
    title: "Algobyte Orientation 🚀",
    date: "2026-07-27",
    dateLabel: "27 July 2026",
    cover: "cover.jpg",
    gallery: [],
    description:
      "An engaging introduction to Algobyte, the Official Open Source Tech Club of Banasthali Vidyapith, showcasing its team, activities, projects, workshops, hackathons, and open-source opportunities. Students also learned about the recruitment process and ways to connect, learn, and grow with the Algobyte community.",
  },
  {
    id: "hack-the-horizon-2-0",
    title: "Hack the Horizon 2.0 💻🔥",
    date: "2026-02-17",
    endDate: "2026-02-18",
    dateLabel: "17–18 February 2026",
    cover: "cover.jpg",
    gallery: [],
    description:
      "A 24-hour hackathon powered by Ignite Room, bringing together innovation, creativity, and problem-solving. Participants turned ideas into reality, collaborated, learned, and competed for cash prizes and the People’s Choice Award, with participation certificates for all.",
  },
  {
    id: "sangam-3-0",
    title: "Sangam 3.0 🤝✨",
    date: "2025-11-19",
    dateLabel: "19 November 2025",
    cover: "cover.jpg",
    gallery: [],
    description:
      "A junior-senior interaction event by Algobyte designed to connect students with seniors and share valuable insights on internships, placements, projects, academics, career paths, and networking. A space to learn from experiences, build connections, and gain a clearer direction for the future.",
  },
  {
    id: "orientation-4-0",
    title: "Algobyte Orientation 4.0 💻✨",
    date: "2025-08-02",
    dateLabel: "2 August 2025",
    cover: "cover.jpg",
    gallery:   gallery: ["Presentation (4).png", "Presentation (5).png", "Presentation (6).png", "Presentation (7).png", "Presentation (8).png"],
    description:
      "An exciting introduction to Algobyte, the official Tech Club of Banasthali, welcoming freshers into the world of technology. The event showcased the club’s projects, events, opportunities, interactive sessions, and future plans, while helping students discover how to begin and grow their tech journey.",
  },
  {
    id: "hack-the-horizon-2025",
    title: "Hack The Horizon Innovation Hackathon 💡🚀",
    date: "2025-03-01",
    dateLabel: "1 March 2025",
    cover: "cover.jpg",
    gallery: [],
    description:
      "A dynamic hackathon powered by Neighborly, bringing together creativity, technology, and problem-solving through collaborative challenges, inspiring workshops, and exciting prizes. A platform for coders, designers, and innovators to turn ideas into impactful solutions.",
  },
  {
    id: "sangam-2-0",
    title: "Sangam 2.0 🤝✨",
    date: "2024-09-28",
    dateLabel: "28 September 2024",
    cover: "cover.jpg",
    gallery: [],
    description:
      "A senior-junior interaction by Algobyte, connecting students with experienced seniors for practical guidance on internships, placements, LinkedIn, resumes, and GitHub.",
  },
  {
    id: "orientation-2024",
    title: "Algobyte Orientation 🚀💻",
    date: "2024-08-29",
    dateLabel: "29 August 2024",
    cover: "cover.jpg",
    gallery: [],
    description:
      "An introduction to Algobyte, the official open-source tech club of Banasthali Vidyapith, featuring valuable guidance on placements, LinkedIn, resumes, and GitHub while helping students explore technology and innovation.",
  },
];

export const parseDate = (iso) => new Date(`${iso}T00:00:00`);

export const isUpcoming = (ev) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseDate(ev.endDate || ev.date) >= today;
};

export const coverUrl = (ev) =>
  `${process.env.PUBLIC_URL}/event-images/${ev.id}/${ev.cover}`;

export const photoUrl = (ev, file) =>
  `${process.env.PUBLIC_URL}/event-images/${ev.id}/${file}`;

// Upcoming events first (soonest first), then past events (newest first)
export const slideshowOrder = () => {
  const up = eventsData
    .filter(isUpcoming)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  const past = eventsData
    .filter((e) => !isUpcoming(e))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  return [...up, ...past];
};

export default eventsData;
