import { Event } from "../data/upcomingEvents";

export function parse12HourTime(date: string, time: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return new Date(year, month - 1, day, hours, minutes);
}

export function splitEvents(events: Event[]) {
  const now = new Date();

  const upcoming: Event[] = [];
  const past: Event[] = [];

  events.forEach((event) => {
    const eventDate = parse12HourTime(event.date, event.time);
    eventDate >= now ? upcoming.push(event) : past.push(event);
  });

  return { upcoming, past };
}



function getISTTimeLeft(deadline: string) {
  const deadlineIST = new Date(`${deadline}T23:59:59+05:30`).getTime();

  const nowUTC = Date.now();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const nowIST = nowUTC + istOffset;

  const diff = deadlineIST - nowIST;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes };
}
