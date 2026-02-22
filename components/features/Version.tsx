export default function Version() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION;

  return <span className="ml-2 text-[10px] text-muted">v{version}</span>;
}
