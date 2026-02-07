"use client";

type Props = {
  registrationLink?: string;
  registrationDeadline?: string;
};

export default function RegisterButton({
  registrationLink,
  registrationDeadline,
}: Props) {
  const isClosed =
    registrationDeadline &&
    new Date(registrationDeadline).getTime() <= Date.now();

  return (
    <a
      href={isClosed ? undefined : registrationLink}
      target={isClosed ? undefined : "_blank"}
      rel="noreferrer"
      className="rounded-full bg-yellow-300 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
      onClick={(e) => {
        if (isClosed) e.preventDefault();
      }}
    >
      {isClosed ? "Registration Closed" : "Register / Join"}
    </a>
  );
}
