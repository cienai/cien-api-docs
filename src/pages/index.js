export default function Home() {
  if (typeof window !== "undefined") {
    window.location.replace("/docs/intro");
  }
  return null;
}