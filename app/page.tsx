import AnimatedWords from "./components/AnimatedWords";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-xl">Hi, I'm Jeffrey Yao</h1>
      <p className="font-semibold text-xl">a software engineer</p>
      <div className="font-semibold text-xl inline-flex gap-1">
        <p>and</p>
        <AnimatedWords />
      </div>
    </section>
  );
}
