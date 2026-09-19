// no longer in production mode
// only for reference purpose


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
  date: string;        
  time: string;       
  location: string;

  coverImage: string;
  description: string[];

  registrationLink?: string;
  registrationDeadline?: string;

  outcome?: string;
  winners?: {
  name: string;        // team name
  position: string;    // WINNERS / RUNNER-UP / etc.
  image?: string;      // team / winners image
  members: {
    name: string;
    rollNo: string;
    course: string;
  }[];
}[];



  gallery?: string[];
}
