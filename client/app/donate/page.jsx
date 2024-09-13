import { Button } from "@/components/ui/button";
import { inknutAntiqua } from "../font";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const DonatePage = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="w-full pt-10 md:pt-16 flex flex-col items-center sm:gap-[40px]">
        <div className="w-full h-[350px] bg-frame-6 bg-cover bg-center flex justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-[24px] p-4 text-white text-center">
            <span className="text-2xl font-semibold">
              Gerald’s art exnihilo
            </span>
            <span className={`${inknutAntiqua.className} text-2xl md:text-3xl font-bold`}>
              Your Support Fuels the Art of Tomorrow.
            </span>
          </div>
        </div>
        <div className="w-full px-0 sm:px-[30px] lg:px-[68px] py-[20px] sm:pt-10 md:pt-12 flex flex-col items-center gap-[30px]">
          <div className="w-full flex flex-col md:flex-row gap-[30px] md:gap-[60px]">
            {/* Left */}
            <div className="w-full md:w-[calc(50%-30px)] px-[30px] sm:px-0 flex flex-col gap-[20px] md:gap-[40px]">
              {/* Title */}
              <h2
                className={`${inknutAntiqua.className} w-full text-xl md:text-2xl font-medium text-center md:text-left md:max-w-[566px]`}
              >
                Donate to a great course.
              </h2>

              {/* Donate Text */}
              <div className="w-full flex flex-col gap-[20px]">
                <div className="w-full">
                  <p className="text-lg font-medium">
                    By donating, you are supporting a community of artists who
                    craft beauty from the void, giving life to original and
                    thought-provoking works. Your contributions help us:
                  </p>
                </div>
                <ul className="list-disc w-full flex flex-col gap-[10px] text-lg font-medium">
                  <li>Fund exhibitions and showcases for emerging artists.</li>
                  <li>
                    Provide resources and tools for creators to explore new
                    mediums.
                  </li>
                  <li>
                    Build a vibrant platform where art lovers can connect with
                    and support artists globally.
                  </li>
                </ul>
                <div className="w-full">
                  <p className="text-lg font-semibold">
                    For more information, support and donations, Contact Fr
                    Gerald Isiguzo, OP:
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="w-full flex flex-col gap-[20px] md:gap-[60px]">
                {/* Row */}
                <div className="w-full flex flex-col sm:flex-row gap-[20px] md:justify-between">
                  {/* Col */}
                  <div className="w-full md:w-[calc(50%-10px)] flex items-center md:items-start gap-[12px]">
                    {/* Icon */}
                    <LocationOnIcon className="text-3xl" />

                    {/* Text */}
                    <div className="flex flex-col gap-[10px]">
                      <span className="text-base md:text-sm font-bold">
                        Location
                      </span>
                      <span className="text-base md:text-sm font-normal">
                        The Presbytery, Ithon Road, Llandrindod Wells, LD1 6AS,
                        Powys, United Kingdom
                      </span>
                    </div>
                  </div>

                  {/* Col */}
                  <div className="w-full md:w-[calc(50%-10px)] flex items-center md:items-start gap-[12px]">
                    {/* Icon */}
                    <LocalPhoneIcon className="text-3xl" />

                    {/* Text */}
                    <div className="flex flex-col gap-[10px]">
                      <span className="text-base md:text-sm font-bold">
                        Cell Phone
                      </span>
                      <span className="text-base md:text-sm font-normal">
                        +447376459370
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row */}
                <div className="w-full flex flex-col sm:flex-row gap-[20px] md:justify-between">
                  {/* Col */}
                  <div className="w-full md:w-[calc(50%-10px)] flex items-center md:items-start gap-[12px]">
                    {/* Icon */}
                    <WatchLaterIcon className="text-3xl" />

                    {/* Text */}
                    <div className="flex flex-col gap-[10px]">
                      <span className="text-base md:text-sm font-bold">
                        Availability
                      </span>
                      <span className="text-base md:text-sm font-normal">
                        24/7
                      </span>
                    </div>
                  </div>

                  {/* Col */}
                  <div className="w-full md:w-[calc(50%-10px)] flex items-center md:items-start gap-[12px]">
                    {/* Icon */}
                    <MailOutlineIcon className="text-3xl" />

                    {/* Text */}
                    <div className="flex flex-col gap-[10px]">
                      <span className="text-base md:text-sm font-bold">
                        Email Address
                      </span>
                      <span className="text-base md:text-sm font-normal">
                        artmasters2022@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-[calc(50%-30px)] h-[242px] md:h-[680px] flex justify-center items-center">
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/imgs/Frame 320.png"
                  alt="writer art"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
