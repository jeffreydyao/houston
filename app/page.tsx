import DescriptorCarousel from "./components/DescriptorCarousel";
import { CodeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-xl">Hi, I'm Jeffrey Yao</h1>
      <p className="font-semibold text-xl">
        a software engineer
        <CodeSimple
          alt="An icon depicting a code bracket"
          className="inline ml-1.5 mb-1 text-2xl"
          weight="fill"
        />
      </p>
      <div className="font-semibold text-xl inline-flex gap-1">
        <p>and</p>
        <DescriptorCarousel />
      </div>
    </section>
  );
}
