import DescriptorCarousel from "./components/DescriptorCarousel";
import { CodeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <section>
      <h1 className="font-medium text-xl leading-tight">Hi, I'm Jeffrey Yao</h1>
      <p className="font-medium text-xl text-horizon-500">
        a software engineer
        <CodeSimple
          alt="An icon depicting a code bracket"
          className="inline ml-1.5 mb-1 text-2xl"
          weight="fill"
        />
      </p>
      <div className="font-medium text-xl inline-flex gap-1 -mt-[3px]">
        <p>and</p>
        <DescriptorCarousel />
      </div>
    </section>
  );
}
