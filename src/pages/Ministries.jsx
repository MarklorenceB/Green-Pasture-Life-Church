import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ministries } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import MediaPanel from "../components/MediaPanel";
import Reveal from "../components/Reveal";
import heroBg from "../assets/sundayservice.jpg";

const imagePositions = {
  "mens-ministry": "center 65%",
  "womens-ministry": "center 60%",
  "youth-ministry": "center 65%",
  "worship-team": "center 60%",
  "outreach-ministry": "center 40%",
  "connect-ministry": "center 65%",
  "kids-ministry": "center 65%",
  "servants-on-service": "center",
};

const ministryRows = [
  { start: 0, count: 1, featured: true },
  { start: 1, count: 2 },
  { start: 3, count: 1, featured: true },
  { start: 4, count: 2 },
  { start: 6, count: 2 },
];

const Ministries = () => {
  return (
    <div className="bg-canvas min-h-screen">
      <PageHero
        eyebrow="Get Involved"
        title="Our ministries & groups"
        subtitle="There is a place for you here. Explore the ways you can connect, grow, and serve within our church family and community."
        image={heroBg}
        ratio="4 / 3"
      />

      <Section compact>
        <div className="space-y-16">
          {ministryRows.map(({ start, count, featured }) => {
            return (
              <div key={start} className={`grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-6 ${featured ? "" : "md:grid-cols-2"}`}>
                {ministries.slice(start, start + count).map((ministry) => (
                  <Reveal
                    key={ministry.id}
                    className="min-w-0 md:row-span-4 md:grid md:grid-rows-subgrid"
                  >
                    <Link
                      to={`/ministries/${ministry.slug}`}
                      className="group grid gap-y-6 rounded-panel md:row-span-4 md:grid-rows-subgrid"
                    >
                      <MediaPanel
                        src={ministry.image}
                        alt={ministry.title}
                        ratio={featured ? "4 / 3" : start === 6 ? "3 / 2" : "16 / 9"}
                        position={imagePositions[ministry.slug]}
                        className={`overflow-hidden rounded-panel ${featured ? "md:[&_img]:aspect-[16/7]" : ""}`}
                      />
                      <h2 className={`${featured ? "type-heading" : "type-subheading"} text-pasture`}>{ministry.title}</h2>
                      <p className="type-body max-w-xl text-stone">
                        {ministry.description}
                      </p>
                      <span className="button button--secondary justify-self-start self-end group-hover:bg-mist">
                        Explore details
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Ministries;
