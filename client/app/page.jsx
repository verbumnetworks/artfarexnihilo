import HeroImageArt from "@/components/HeroImageArt";
import { inknutAntiqua } from "./font";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 overflow-hidden">
      {/* Landing */}
      <div className="w-full sm:pt-10 md:pt-16 flex flex-col items-center sm:gap-[40px]">
        {/* Text */}
        <div className="w-full flex gap-[18px] p-8 flex-col justify-center items-center">
          <h1
            className={`${inknutAntiqua.className} text-4xl md:text-5xl tracking-wide font-normal text-center`}
          >
            Gerald's art Exnihilo
          </h1>
          <p className="max-w-[450px] text-base font-medium text-center">
            Showing how art responds to faith and reason. Creating immersive
            experience for audience participation
          </p>
        </div>

        {/* Banner */}
        <HeroImageArt />
      </div>

      {/* About */}
      <div className="w-full px-0 sm:px-[30px] lg:px-[68px] py-[20px] sm:pt-10 md:pt-16 flex flex-col items-center gap-[30px]">
        {/* Title */}
        <div
          className={`${inknutAntiqua.className} text-xl md:text-2xl font-medium text-center`}
        >
          About ArtFar
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row items-end gap-[20px] md:gap-[10px]">
          {/* Left */}
          <div className="w-full md:w-[calc(50%-5px)] flex flex-col items-center md:items-start gap-[30px]">
            {/* Texts */}
            <div className="w-full flex flex-col gap-4">
              <h2
                className={`${inknutAntiqua.className} px-[30px] sm:px-0  font-semibold text-center md:text-left text-lg md:text-3xl lg:text-4xl text-gray-800 md:min-w-[600px] xl:min-w-[800px]`}
              >
                Promoting the Christian Faith Through Art Exhibition.
              </h2>
              <p className="px-[30px] sm:px-0 font-medium text-sm sm:text-base text-center md:text-left">
                Our Core Objective is to provide a creative platform for
                bringing back faith through visual art, music and cultural
                events. To create an immersive experience for audience
                participation and intercultural dialogues through visual art,
                music and theology.
              </p>
            </div>

            {/* Button */}
            <div className="w-full px-[30px] sm:px-0 flex justify-center md:justify-start">
              <Link className="w-full sm:w-max" href="/donate">
                <Button className="rounded-full w-full p-8 bg-black">
                  Make a Donation
                </Button>
              </Link>
            </div>

            {/* Images */}
            <div className="px-[30px] sm:px-0 w-full flex flex-col sm:flex-row items-end justify-between gap-[10px]">
              <div className="w-full h-[217px] sm:h-[auto] sm:w-[calc(50%-5px)] overflow-hidden">
                <img className="w-full" src="/imgs/Frame 312.png" alt="art" />
              </div>
              <div className="hidden sm:block w-full h-[217px] sm:h-[auto] sm:w-[calc(50%-5px)] overflow-hidden">
                <img className="w-full" src="/imgs/Frame 15.png" alt="art" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-[calc(50%-5px)] flex flex-col sm:flex-row items-end gap-[20px] sm:gap-[10px]">
            {/* Left Image Set */}
            <div className="w-full h-[auto] sm:w-[calc(50%-5px)] flex flex-col justify-between gap-[20px] sm:gap-[10px]">
              <div className="w-full h-[350px] sm:h-[auto] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/imgs/gerald.jpg"
                  alt="art"
                />
              </div>
              <div className="w-full h-[180px] sm:h-[auto] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/imgs/Frame 310.png"
                  alt="art"
                />
              </div>
            </div>

            {/* Right Image Set */}
            <div className="w-full h-[auto] sm:w-[calc(50%-5px)] flex flex-col-reverse sm:flex-col justify-between gap-[20px] sm:gap-[10px]">
              <div className="px-[30px] sm:px-0 w-full h-[286px] sm:h-[auto] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/imgs/Frame 17.png"
                  alt="art"
                />
              </div>
              <div className="hidden sm:block w-full overflow-hidden max-h-[400px]">
                <img className="w-full" src="/imgs/Frame 311.png" alt="art" />
              </div>
              <div className="w-full h-[445px] sm:hidden flex items-center gap-[12px]">
                <div className="w-full h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/imgs/Frame 311.png"
                    alt="art"
                  />
                </div>
                <div className="w-full h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/imgs/Frame 311.png"
                    alt="art"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full px-0 sm:px-[30px] lg:px-[68px] py-[20px] sm:pt-10 md:pt-16 flex flex-col gap-[30px]">
        {/* Title */}
        <div
          className={`${inknutAntiqua.className} text-xl md:text-2xl font-medium text-center md:text-left px-[30px] sm:px-0`}
        >
          Mission Statement
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px]">
          {/* TextBox */}
          <div className="w-full md:w-[calc(50%-20px)] flex flex-col justify-between items-center md:items-start gap-[30px]">
            {/* Texts */}
            <div className="w-full flex flex-col justify-between gap-[20px] lg:gap-[30px] px-[30px] sm:px-0 text-center md:text-left">
              {/* Text */}
              <div className="w-full text-base">
                <strong>ARTFAR</strong>'s mission is to provide a platform where
                the unique language of art is developed through extended
                analogies that go beyond traditional mediums and processes. The
                goal is to demonstrate how art engages with the concepts of
                faith and reason, serving as an evangelical expression of how
                humans are called to respond to God's grace, inventive skill,
                and creative vision.
              </div>
              {/* Text */}
              <div className="w-full text-base">
                The acronym <strong>ARTFAR</strong> stands for "Art responds to
                faith and reason," symbolizing how art reflects the social and
                spiritual dimensions of our shared humanity. It addresses the
                human need for connection, spiritual growth, and the pursuit of
                happiness, illustrating art's power to respond to these
                universal desires.
              </div>
            </div>
          </div>

          {/* ImageBox */}
          <div className="w-full md:w-[calc(50%-20px)]">
            <div className="w-full h-[242px] sm:h-[auto]">
              <img
                src="/imgs/about.png"
                alt="paint mix"
                className="w-full h-full shadow-custom-shadow md:shadow-none object-cover rounded-4 m-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="w-full px-[30px] lg:px-[68px] py-[20px] sm:pt-10 md:pt-16 flex flex-col gap-[30px]">
        {/* Title */}
        <div
          className={`${inknutAntiqua.className} text-xl md:text-2xl font-medium text-center md:text-left`}
        >
          Meet the Man of the Moment
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
          {/* ImageBox */}
          <div className="w-full md:w-[calc(40%-20px)] flex justify-center">
            <div className="w-[320px] md:w-full h-[353px] xl:h-[450px] relative">
              <img
                src="/imgs/gerald.jpg"
                alt="founder"
                className="w-full h-full shadow-custom-shadow md:shadow-none object-cover rounded-4 m-auto"
              />
              <div className="w-full md:w-max p-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-8 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                <span
                  className={`${inknutAntiqua.className} text-base text-yellowFar`}
                >
                  Rev. Fr. Gerald Isiguzo (OP)
                </span>
                <span className="text-sm text-white">Artist & Founder</span>
              </div>
            </div>
          </div>

          {/* TextBox */}
          <div className="w-full md:w-[calc(60%-20px)] flex flex-col justify-between items-center md:items-start gap-[30px]">
            {/* Texts */}
            <div className="w-full flex flex-col justify-between gap-[20px] lg:gap-[30px] text-center md:text-left">
              {/* Text */}
              <div className="w-full text-base">
                The acronym <strong>ARTFAR</strong> is a conceptual metaphor for
                exploring how “Art responds to faith and reason” in ways that
                highlights the social and spiritual conditions of our common
                humanity and also responds to the needs of human person as a
                social and religious being who constantly yarn for social
                connections, spiritual upliftment and consummate pleasure or
                happiness.
              </div>
              {/* Text */}
              <div className="w-full text-base">
                The acronym <strong>ARTFAR</strong> is a conceptual metaphor for
                exploring how “Art responds to faith and reason” in ways that
                highlights the social and spiritual conditions of our common
                humanity and also responds to the needs of human person as a
                social and religious being who constantly yarn for social
                connections, spiritual upliftment and consummate pleasure or
                happiness.
              </div>
              {/* Text */}
              <div className="w-full text-base">
                The acronym <strong>ARTFAR</strong> is a conceptual metaphor for
                exploring how “Art responds to faith and reason” in ways that
                highlights the social and spiritual conditions of our common
                humanity and also responds to the needs of human person as a
                social and religious being who constantly yarn for social
                connections, spiritual upliftment and consummate pleasure or
                happiness.
              </div>
            </div>

            {/* Button */}
            <Link className="w-full sm:w-max" href="/donate">
              <Button className="rounded-full w-full p-8 bg-black">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full px-0 sm:px-[30px] lg:px-[68px] py-[20px] sm:pt-10 md:pt-16 flex flex-col items-center gap-[30px]">
        {/* Title */}
        <div
          className={`${inknutAntiqua.className} text-xl md:text-2xl font-medium text-center`}
        >
          Gallery
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-[10px] md:gap-[30px]">
          {/* Top */}
          <div className="w-full relative">
            <div className="w-full h-[200px] md:h-[290px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/imgs/matthew-tenbruggencate-oZVbsRE99rg-unsplash.jpg"
                alt="art"
              />
            </div>
            <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
              <span
                className={`${inknutAntiqua.className} text-sm text-yellowFar`}
              >
                Ntonku Bando
              </span>
              <span className="text-xs text-white">Sculpture</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full flex flex-col md:flex-row gap-[10px]">
            {/* Left */}
            <div className="w-full md:h-[500px] md:w-[calc(50%-5px)] flex flex-col-reverse md:flex-row gap-[10px]">
              {/* Full */}
              <div className="relative w-full h-full md:w-[calc(50%-5px)]">
                <div className="w-full h-[250px] md:h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/imgs/art-institute-of-chicago-a1_FBTLuvU4-unsplash.jpg"
                    alt="art"
                  />
                </div>
                <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                  <span
                    className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                  >
                    Whispers of the Horizon
                  </span>
                  <span className="text-xs text-white">Landscape Painting</span>
                </div>
              </div>

              {/* Halves */}
              <div className="w-full h-[250px] md:h-full md:w-[calc(50%-5px)] flex md:flex-col gap-[10px]">
                <div className="relative h-full md:h-[calc(60%-5px)] w-full">
                  <div className="w-full h-full md:h-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/imgs/fons-heijnsbroek-abstract-art-RUbFWQg5zVE-unsplash.jpg"
                      alt="art"
                    />
                  </div>
                  <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                    <span
                      className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                    >
                      Rhythms of Chaos
                    </span>
                    <span className="text-xs text-white">Oil Painting</span>
                  </div>
                </div>
                <div className="relative h-full md:h-[calc(40%-5px)] w-full">
                  <div className="w-full h-full md:h-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/imgs/matt-richmond-xG2VoUaUoBg-unsplash.jpg"
                      alt="art"
                    />
                  </div>
                  <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                    <span
                      className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                    >
                      Nature's Chips
                    </span>
                    <span className="text-xs text-white">Wood Sculpture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:h-[500px] md:w-[calc(50%-5px)] flex flex-col-reverse md:flex-row gap-[10px]">
              {/* Full */}
              <div className="relative w-full h-full md:w-[calc(50%-5px)]">
                <div className="w-full h-[250px] md:h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/imgs/tungsten-rising-e7Mj-m5jOXo-unsplash.jpg"
                    alt="art"
                  />
                </div>
                <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                  <span
                    className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                  >
                    Silent Strength
                  </span>
                  <span className="text-xs text-white">Sculpture</span>
                </div>
              </div>

              {/* Halves */}
              <div className="w-full h-[250px] md:h-full md:w-[calc(50%-5px)] flex md:flex-col gap-[10px]">
                <div className="relative h-full md:h-[calc(40%-5px)] w-full">
                  <div className="w-full h-full md:h-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/imgs/catherine-kay-greenup-gTQP1soszNc-unsplash.jpg"
                      alt="art"
                    />
                  </div>
                  <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                    <span
                      className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                    >
                      Tranquil Wilderness
                    </span>
                    <span className="text-xs text-white">Painting</span>
                  </div>
                </div>
                <div className="relative h-full md:h-[calc(60%-5px)] w-full">
                  <div className="w-full h-full md:h-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/imgs/birmingham-museums-trust-0xa0OVutd_A-unsplash.jpg"
                      alt="art"
                    />
                  </div>
                  <div className="w-full md:w-max py-1 px-2 bg-gray-800 absolute right-0 left-0 bottom-0 m-auto md:bottom-4 md:left-0 md:m-0 flex flex-col justify-center gap-1 text-center md:text-left">
                    <span
                      className={`${inknutAntiqua.className} text-sm text-yellowFar`}
                    >
                      Depths Unveiled
                    </span>
                    <span className="text-xs text-white">Illustration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Link */}
          <div className="w-full px-[30px] sm:px-0 flex justify-end">
            <Link href="/gallery">
              <span className="flex justify-center items-center gap-[8px] capitalize text-base md:text-lg text-gray-800 font-semibold py-[12px] px-[8px] border-b-2 border-orangeFar">
                View more art
                <ArrowForwardIcon className="text-orangeFar" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
