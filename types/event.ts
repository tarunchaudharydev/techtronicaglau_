export type ClubEvent =
  | "unnati"
  | "gizmo"
  | "code-e-phobia"
  | "technovation"
  | "mindboggler";


export interface Event {
  id: string;
  title: string;
  club: ClubEvent;
  date: string;        // YYYY-MM-DD
  time: string;        // "10:00 AM"
  location: string;

  coverImage: string;
  description: string[];

  // UPCOMING only
  registrationLink?: string;
  registrationDeadline?: string;

  // PAST only
  outcome?: string;
  winners?: {
    name: string;
    position: string;
    members?: string[];
  }[];
  
  gallery?: string[];
}
