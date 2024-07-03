"use client ";

import CardArrow from "../components/svg/cardArrow";
import ServiceCard from "../components/ui/ServiceCard";

import { services } from "../../dummyData/db";
import PenIcon from "../components/svg/PenIcon";
import TechniIcon from "../components/svg/TechniIcon";
import BtcIcons from "../components/svg/BtcIcons";
import DbIcon from "../components/svg/DbIcon";
import ArIcon from "../components/svg/ArIcon";

const AllServices = () => {
  return (
    <div className="flex h-full lg:h-[1500px] w-full py-24 justify-center items-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              className={`col-span-1 ${
                index === 2 ? "row-span-2" : "row-span-1"
              }`}
              key={`services-card-${service._id}`}
            >
              <ServiceCard
                service={service.title}
                description={service.short_desc}
                linkHref={`/Services/${service._id}`}
                backgroundColor={
                  index === 0
                    ? "bg-black"
                    : index === 2
                    ? "bg-[#0A52F6]"
                    : index === 6
                    ? "bg-[#9F9F9F]"
                    : "bg-white"
                }
                icon={
                  index === 0 ? (
                    <CardArrow />
                  ) : index === 1 ? (
                    <BtcIcons />
                  ) : index === 2 ? (
                    <ArIcon />
                  ) : index === 3 ? (
                    <DbIcon />
                  ) : index === 4 ? (
                    <PenIcon />
                  ) : index === 5 ? (
                    <TechniIcon />
                  ) : index === 6 ? (
                    <ArIcon />
                  ) : index === 7 ? (
                    <TechniIcon />
                  ) : (
                    "bg-white"
                  )
                }
                PrimaryColor={index === 0 || index === 2 || index === 6}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
