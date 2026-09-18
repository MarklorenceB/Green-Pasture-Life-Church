import { Link } from "react-router-dom";
import { events, ministries } from "../data/mockdata";
import { ArrowRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Container from "../components/Container";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import MediaPanel from "../components/MediaPanel";
import Portrait from "../components/Portrait";
import Button from "../components/Button";
import ArrowLink from "../components/ArrowLink";
import pastor from "../assets/pastor.jpg";
import banner from "../assets/banner.jpg";

const Home = () => {
  const latestEvents = events.slice(0, 3);

  return (
    <div className="w-full bg-canvas">
      {/* Full-bleed hero: the building fills the frame, copy sits on a designed moss scrim */}
      <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-moss text-canvas h-[100svh] max-h-[960px] lg:min-h-[720px]">
        {/* Frame the photo so the lit logo on the building stays clear of the copy:
            above the text on mobile, in the open right half on desktop */}
        <div className="absolute inset-x-0 top-0 -z-20 h-[36%] min-h-[250px] overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[78%]">
          <img
            src={banner}
            alt="Green Pasture Life Church gathered in worship"
            fetchPriority="high"
            className="hero-image h-full w-full object-cover object-[58%_46%] lg:object-[46%_42%]"
          />
        </div>
        {/* Pull the dusk purples toward the palette */}
        <div className="absolute inset-0 -z-10 bg-moss/15 mix-blend-multiply" aria-hidden="true" />
        {/* Mobile: photo dissolves downward into moss. Desktop: moss column on the left dissolves into the photo */}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-moss)_55%,transparent)_0%,transparent_12%,color-mix(in_srgb,var(--color-moss)_70%,transparent)_24%,var(--color-moss)_32%)] lg:bg-[linear-gradient(to_right,var(--color-moss)_22%,color-mix(in_srgb,var(--color-moss)_88%,transparent)_40%,color-mix(in_srgb,var(--color-moss)_30%,transparent)_60%,transparent_78%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-2/5 bg-gradient-to-t from-moss/85 to-transparent lg:block" aria-hidden="true" />

        <Container className="flex flex-1 flex-col justify-end pt-[calc(var(--header-height)+1.5rem)] pb-8 lg:justify-center lg:pb-10">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Psalm 23 · Our Name</Eyebrow>
            <h1 className="type-display mt-5 mb-5 sm:mb-7 lg:mt-6 lg:text-[clamp(3.5rem,7vw,6.75rem)]">
              <span className="block">The Lord is my</span>{" "}
              <span className="type-emphasis block text-wheat-300">shepherd,</span>{" "}
              <span className="block">I lack nothing.</span>
            </h1>
            <p className="type-body max-w-lg text-canvas/90">
              Green Pasture Life Church, a family in San Pablo City, Laguna,
              growing together in the grace of Jesus Christ.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <Button to="/contact" variant="on-dark" className="px-5 sm:px-7">
                Join Us This Sunday <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to="/about" variant="outline-on-dark" className="border-canvas/60 px-5 backdrop-blur-sm sm:px-7">
                Our Story
              </Button>
            </div>
            <p className="eyebrow mt-6 text-canvas/70 sm:mt-8">SEC Registered #2024050148957-08</p>
          </div>
        </Container>

        {/* Service time + address ride the bottom edge of the hero as a frosted bar */}
        <div className="border-t border-canvas/15 bg-moss/55 backdrop-blur-md">
          <Container className="grid gap-3 py-5 md:grid-cols-2 md:gap-12 lg:py-6">
            <p className="flex items-start gap-4 font-medium">
              <Clock size={20} className="mt-1 shrink-0 text-wheat-300" aria-hidden="true" />
              <span>Sunday Worship Celebration · 8:30 AM – 10:00 AM</span>
            </p>
            <p className="flex items-start gap-4 font-medium">
              <MapPin size={20} className="mt-1 shrink-0 text-wheat-300" aria-hidden="true" />
              <span>Sitio Ilaya, Brgy. Santisimo Rosario, San Pablo City, Laguna</span>
            </p>
          </Container>
        </div>
      </section>

      <Section compact>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <SectionHeading
              eyebrow="A Personal Welcome"
              title={<>The church is more than a building, it is a <em className="type-emphasis">family.</em></>}
              className="text-pasture"
            />
            <blockquote className="type-body mt-8 max-w-xl text-stone">
              “Our desire is to bring people to Christ, nurture them in His Word,
              and equip them to become fully trained disciples who will serve God
              faithfully in every season of life.”
            </blockquote>
            <ArrowLink to="/about" className="mt-8">Read our full story</ArrowLink>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Portrait src={pastor} name="Ruel Del Monte" alt="Pastor Ruel Del Monte" ratio="6 / 5" position="center top" />
            <div className="mt-6 space-y-2">
              <p className="type-subheading text-pasture">Ruel Del Monte</p>
              <Eyebrow>Senior Pastor</Eyebrow>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section compact className="bg-mist lg:pb-12">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
          <SectionHeading eyebrow="Gather Together" title="Upcoming Events" className="text-pasture [&_h2]:text-title" />
          <ArrowLink to="/events" className="self-start md:self-auto">View all events</ArrowLink>
        </Reveal>
        <div className="space-y-12 lg:space-y-16">
          {latestEvents.map((event) => (
            <Reveal key={event.id}>
              <Link to={`/events/${event.slug}`} className="group grid items-center gap-6 rounded-panel md:grid-cols-2 md:gap-12 lg:gap-20">
                <MediaPanel src={event.image} alt={event.title} ratio="8 / 5" />
                <div>
                  <Eyebrow>{event.category}</Eyebrow>
                  <div className="mt-4 flex items-start justify-between gap-6">
                    <h3 className="type-subheading text-pasture group-hover:underline underline-offset-4">{event.title}</h3>
                    <ArrowUpRight size={24} className="mt-1 shrink-0 text-pasture" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-pasture">{event.date}</p>
                  <p className="type-body mt-6 text-stone">{event.content}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section compact>
        <Reveal className="mb-12 grid items-end gap-6 lg:grid-cols-2 lg:[align-items:last_baseline] lg:gap-20">
          <SectionHeading eyebrow="Belong Here" title="Find your place to belong" emphasis="belong" className="text-pasture [&_h2]:text-title" />
          <p className="type-body max-w-lg text-stone">
            From the youngest child to every season of life, there is a place
            for you to grow, connect, and serve.
          </p>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-x-12">
          {ministries.slice(0, 3).map((min, index) => (
            <Reveal key={min.id} className={index === 0 ? "md:row-span-2 md:min-h-0" : ""}>
              <Link to={`/ministries/${min.slug}`} className="group flex h-full flex-col rounded-panel">
                <div className={`relative aspect-[4/3] ${index === 0 ? "md:aspect-auto md:min-h-0 md:flex-1" : "md:aspect-[16/9]"}`}>
                  <img
                    src={min.image}
                    alt={min.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full rounded-panel object-cover ${index === 0 ? "md:object-[center_65%]" : ""}`}
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="type-subheading text-pasture group-hover:underline underline-offset-4">{min.title}</h3>
                  <span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-pasture">
                    Explore <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Button to="/ministries">Explore all ministries <ArrowRight size={18} aria-hidden="true" /></Button>
        </Reveal>
      </Section>

      <Section compact className="bg-mist">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Romans 5:8</Eyebrow>
            <h2 className="type-heading mt-6 text-pasture">You are welcome here, just as you are.</h2>
          </div>
          <div>
            <p className="type-body max-w-lg text-stone">
              Our mission is to love and care for people so they may experience
              God&apos;s salvation through Jesus Christ.
            </p>
            <Button to="/contact" className="mt-8">Plan your visit <ArrowRight size={18} aria-hidden="true" /></Button>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default Home;
