import { useParams } from "react-router-dom";
import { ministries } from "../data/mockdata";
import { ArrowLeft, Clock, User, Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Container from "../components/Container";
import Section from "../components/Section";
import MediaPanel from "../components/MediaPanel";
import Button from "../components/Button";

const MinistryDetail = () => {
  const { slug } = useParams();
  const ministry = ministries.find(
    (m) => m.slug === slug || String(m.id) === slug
  );

  if (!ministry) {
    return (
      <div className="min-h-screen bg-canvas flex flex-col justify-center pt-[var(--header-height)]">
        <Container className="py-20">
          <h1 className="type-title max-w-3xl text-pasture">Ministry not found</h1>
          <p className="type-body mt-6 max-w-xl text-stone">
            The ministry you are looking for does not exist or the link is
            incorrect.
          </p>
          <Button to="/ministries" variant="secondary" className="mt-8">
            <ArrowLeft size={18} aria-hidden="true" /> Back to all ministries
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-canvas">
      <header className="bg-moss pb-8 pt-[calc(var(--header-height)+2rem)] text-canvas md:pb-16 md:pt-[calc(var(--header-height)+3rem)]">
        <Container>
          <Button
            to="/ministries"
            variant="outline-on-dark"
          >
            <ArrowLeft size={18} aria-hidden="true" /> All ministries
          </Button>
          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-12 md:items-end md:gap-12">
            <div className="min-w-0 md:col-span-7">
              <Eyebrow tone="light">Ministry</Eyebrow>
              <h1 className="type-title mt-6">{ministry.title}</h1>
            </div>
            <p className="type-body max-w-xl text-mist md:col-span-5 md:pb-1">
              {ministry.description}
            </p>
          </div>
          <MediaPanel
            src={ministry.image}
            alt={ministry.title}
            loading="eager"
            ratio="16 / 7"
            className="mt-10 [&_img]:aspect-[4/3] md:mt-16 md:[&_img]:aspect-[16/7]"
          />
        </Container>
      </header>

      <Section compact>
        <div className="space-y-8 md:space-y-12">
          <Reveal>
            <dl className="grid gap-8 rounded-panel bg-mist p-6 md:grid-cols-2 md:gap-16 md:p-8">
              <div>
                <dt className="eyebrow flex items-center gap-3 text-pasture">
                  <User size={20} aria-hidden="true" /> Coordinator
                </dt>
                <dd className="type-body mt-4 font-semibold text-pasture">
                  {ministry.coordinator || "Church Office"}
                </dd>
              </div>
              <div>
                <dt className="eyebrow flex items-center gap-3 text-pasture">
                  <Clock size={20} aria-hidden="true" /> Meeting Time
                </dt>
                <dd className="type-body mt-4 text-ink">
                  {ministry.meetingTime || "See church calendar"}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.065} className="min-w-0">
            <div className="type-body space-y-6 text-stone md:columns-2 md:gap-16">
              {ministry.fullContent.split("\n\n").map((para, i) => (
                <p key={i} className="break-inside-avoid">{para}</p>
              ))}
            </div>
            <Button
              href={`mailto:${ministry.coordinatorEmail || "rueldelmonte4@gmail.com"}`}
              className="mt-10"
            >
              <Mail size={18} aria-hidden="true" /> Contact the coordinator
            </Button>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default MinistryDetail;
