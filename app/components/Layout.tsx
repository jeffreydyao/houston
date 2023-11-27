import profilePic from "@/public/me.jpg";
import { CodeSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import DescriptorCarousel from "./DescriptorCarousel";
import RouteAccordion from "./RouteAccordion";

export default function Layout() {
  // root layout component in /page.tsx that is responsible for rendering route accordions
  // shared across / (page.tsx), /now, /work, /craft, /posts, /links

  // takes slot for each route's content, rendered under an accordion
  // when a route is navigated to, the corresponding accordion opens
  // navigating back closes it. NO JUMP IN ANIMATION ALLOWED.

  // root layout contains "Hi, I'm Jeffrey Yao..."
  // When in child route, animation pauses.

  // other accordions grey out (reduced opacity for focus) when not in route
  // ie.. if /now opened, /work, /craft should grey out

  // accordion content takes min height
  return (
    <>
      <section>
        <h1 className="font-medium text-xl leading-tight inline-flex items-center gap-2">
          Hi, I'm Jeffrey Yao
          <Image
            src={profilePic}
            alt="Picture of Jeffrey Yao"
            className="rounded-full w-6 h-6 mb-[3px]"
          />
        </h1>
        <p className="font-medium text-xl">
          a software engineer
          <CodeSimple
            alt="An icon depicting a code bracket"
            className="inline ml-1.5 mb-[3px] text-2xl"
            weight="fill"
          />
        </p>
        <div className="font-medium text-xl inline-flex gap-1 -mt-[3px]">
          <p>and</p>
          <DescriptorCarousel />
        </div>
      </section>

      <RouteAccordion />
    </>
  );
}
