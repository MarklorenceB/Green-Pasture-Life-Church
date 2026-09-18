import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import Portrait from "../components/Portrait";
import zelyncuenca from "/worshipteam/zelyn.png";
import pastorImg from "../assets/pastor.jpg";
import heroBg from "../assets/fampic.jpg";

const coreLeaders = [
  { id: 1, name: "Pastor Ruel Del Monte", role: "Senior Pastor", image: pastorImg },
  { id: 2, name: "Florencia Del Monte", role: "Church Administrator", image: null },
  { id: 3, name: "Federico Almario", role: "Associate Pastor", image: null },
  { id: 4, name: "Hazelyn Cuenca", role: "Finance Head", image: zelyncuenca },
  { id: 5, name: "Grace Bombane", role: "Core Leader", image: null },
  { id: 6, name: "Lalaine Dorado", role: "Core Leader", image: null },
  { id: 7, name: "Michelle Angela Rivera", role: "Core Leader", image: null },
  { id: 8, name: "Lorelie Mission", role: "Core Leader", image: null },
];

const boardOfTrustees = {
  top: { id: "bot-1", name: "Ruel L. Del Monte", role: "President", image: pastorImg },
  middle: [
    { id: "bot-2", name: "Florencia G. Del Monte", role: "Vice President", image: null },
    { id: "bot-3", name: "Hazelyn Cuenca", role: "Secretary", image: zelyncuenca },
  ],
  bottom: [
    { id: "bot-4", name: "Grace G. Bombane", role: "Board Member", image: null },
    { id: "bot-5", name: "Lalaine Dorado", role: "Board Member", image: null },
    { id: "bot-6", name: "Michelle Rivera", role: "Board Member", image: null },
    { id: "bot-7", name: "Lorelie Mission", role: "Board Member", image: null },
  ],
};

const initials = (name) =>
  name
    .replace(/^(Pastor|Ptr\.?)\s+/i, "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

const MemberPortrait = ({ member, className = "", ...props }) => (
  <Portrait
    src={member.image}
    name={member.name}
    initials={initials(member.name)}
    ratio="4 / 5"
    position="center 25%"
    className={`[&>img]:saturate-[.65] ${className}`}
    {...props}
  />
);

const DirectoryEntry = ({ member, ground = "mist" }) => (
  <Reveal as="article" className="row-span-2 grid grid-cols-[3rem_minmax(0,1fr)] grid-rows-subgrid gap-x-5 gap-y-3 py-6">
    <span className="eyebrow row-span-2 flex h-12 w-12 items-center justify-center rounded-full text-pasture" style={{ backgroundColor: `var(--color-${ground})` }}>
      {initials(member.name)}
    </span>
    <h3 className="type-subheading text-pasture">{member.name}</h3>
    <p className="eyebrow col-start-2 text-stone">{member.role}</p>
  </Reveal>
);

const Leaders = () => {
  const pastor = coreLeaders[0];
  const finance = coreLeaders[3];

  return (
    <div className="bg-canvas md:[&_.page-hero>div>div:first-child]:self-end md:[&_.page-hero>div>div:first-child]:pb-0">
      <PageHero
        eyebrow="Our Leadership"
        title="Servants who shepherd"
        subtitle="Committed to spiritual growth and Christ-centered service, our leaders guide the church with integrity, humility, and a heart for God's people."
        image={heroBg}
      />

      <Section className="pb-12 md:pb-16">
        <Reveal className="mb-12 md:mb-16">
          <Eyebrow>Core Leaders</Eyebrow>
          <h2 className="type-title mt-6 text-pasture">Guiding our church family</h2>
        </Reveal>

        <Reveal as="article" className="grid items-center gap-0 overflow-hidden rounded-[var(--radius-panel)] bg-mist md:grid-cols-[1.1fr_1fr] md:gap-12 md:p-12 lg:p-16">
          <div className="order-2 p-6 pb-8 md:order-1 md:p-0">
            <p className="eyebrow text-pasture">{pastor.role}</p>
            <h3 className="type-heading mt-6 max-w-lg text-pasture">{pastor.name}</h3>
            <p className="type-body mt-8 max-w-md text-stone">
              Providing guidance, support, and spiritual oversight — nurturing
              disciples and helping the church fulfill its mission of reaching
              people for Christ.
            </p>
          </div>
          <MemberPortrait member={pastor} position="center top" className="order-1 aspect-[4/3] md:order-2 md:aspect-[4/5]" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal as="article">
            <MemberPortrait member={finance} position="center 15%" className="md:aspect-[4/3]" />
            <h3 className="type-subheading mt-6 text-pasture">{finance.name}</h3>
            <p className="eyebrow mt-3 text-stone">{finance.role}</p>
          </Reveal>
          <div className="grid content-start gap-x-12 md:grid-cols-2">
            {coreLeaders.filter((member) => !member.image).map((member) => (
              <DirectoryEntry key={member.id} member={member} />
            ))}
          </div>
        </div>
      </Section>

      <Section compact className="bg-mist md:pb-0">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="type-heading max-w-2xl text-pasture">Board of Trustees</h2>
          <p className="eyebrow text-stone">SEC Registered #2024050148957-08</p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {[boardOfTrustees.top, ...boardOfTrustees.middle].map((member) => (
            <Reveal key={member.id} as="article" className="grid grid-cols-[7rem_1fr] items-center gap-6 md:block">
              {member.id === boardOfTrustees.top.id ? (
                <div className="rounded-[var(--radius-panel)] bg-canvas p-2 md:p-3">
                  <MemberPortrait member={member} ground="canvas" ratio="1 / 1"
                    className="rounded-[calc(var(--radius-panel)-.75rem)] max-md:[&>img]:origin-[50%_15%] max-md:[&>img]:scale-150" />
                </div>
              ) : (
                <MemberPortrait member={member} ground="canvas" ratio="1 / 1"
                  className="p-2 md:p-3 [&>img]:rounded-[calc(var(--radius-panel)-.75rem)] [&>span]:text-[clamp(3rem,10vw,9rem)] [&>span]:font-bold [&>span]:tracking-[-.055em]" />
              )}
              <div className="md:mt-6">
                <h3 className="type-subheading text-pasture">{member.name}</h3>
                <p className="eyebrow mt-3 text-stone">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-x-12 md:mt-12 md:grid-cols-2">
          {boardOfTrustees.bottom.map((member) => (
            <DirectoryEntry key={member.id} member={member} ground="canvas" />
          ))}
        </div>
      </Section>

      <Section compact>
        <Reveal className="grid items-center gap-8">
          <p className="type-body max-w-2xl text-stone">
            Through prayer, biblical leadership, and a passion for ministry, our
            leaders equip believers, strengthen families, and help build a strong
            spiritual community that brings glory to God.
          </p>
          <Button to="/contact" className="justify-self-start">
            Get in touch <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>
      </Section>
    </div>
  );
};

export default Leaders;
