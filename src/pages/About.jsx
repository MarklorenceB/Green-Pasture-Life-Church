import { serviceSchedule } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import MediaPanel from "../components/MediaPanel";
import Portrait from "../components/Portrait";
import Button from "../components/Button";
import pastor from "../assets/pastor.jpg";
import historic from "../assets/fampic.jpg";
import heroBg from "../assets/caregroup.jpg";

const pillars = [
  {
    title: "The Triune God",
    body: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. He is the Creator, Sustainer, and Ruler of all things, worthy of our worship and obedience.",
    verse: "Deuteronomy 6:4",
  },
  {
    title: "Scripture Alone",
    body: "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the final authority for our faith, doctrine, and daily life.",
    verse: "2 Timothy 3:16-17",
  },
  {
    title: "Jesus Christ",
    body: "We believe Jesus Christ is the eternal Son of God, fully God and fully man. He lived a sinless life, died for our sins, rose again, and is the only mediator between God and humanity.",
    verse: "John 14:6",
  },
  {
    title: "Salvation by Grace",
    body: "We believe salvation is the gift of God's grace, received through repentance and faith in Jesus Christ alone, not by works. Through Him we receive forgiveness and eternal life.",
    verse: "Ephesians 2:8-9",
  },
  {
    title: "The Holy Spirit",
    body: "We believe the Holy Spirit gives new life, empowers believers for holy living, and enables us to grow spiritually and be effective witnesses for Christ.",
    verse: "Acts 1:8",
  },
  {
    title: "The Mission of the Church",
    body: "We believe the Church is called to proclaim the Gospel, make disciples, and demonstrate God's love to all nations for His glory.",
    verse: "Matthew 28:19-20",
  },
];

const About = () => {
  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="Our Story · Our People"
        title="Rooted in faith, growing in grace"
        subtitle="Committed to community, and to bringing people into a living relationship with Jesus Christ."
        image={heroBg}
      />

      <Section>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Psalm 23:1–2 (NIV)</Eyebrow>
            <p className="eyebrow mt-4 text-wheat-700">GPLC Theme Verse</p>
          </div>
          <blockquote className="text-pasture text-[clamp(2rem,3.35vw,3rem)] font-semibold tracking-[-0.04em] leading-[1.2] lg:col-span-8">
            “The Lord is my shepherd, I lack nothing. He makes me lie down in
            green pastures, He leads me beside <em className="type-emphasis">quiet waters</em>, He refreshes my
            soul.”
          </blockquote>
        </Reveal>
      </Section>

      <Section compact className="!pt-0">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-6 lg:items-center">
          <Reveal className="lg:col-span-5">
            <Portrait src={pastor} name="Ruel Del Monte" alt="Pastor Ruel Del Monte" ratio="6 / 5" position="center top" />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <div>
              <p className="type-subheading text-pasture">Ruel Del Monte</p>
              <p className="eyebrow text-wheat-700 mt-2">Senior Pastor</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <Eyebrow>A Word from Pastor Ruel</Eyebrow>
            <blockquote className="mt-8 text-pasture text-[clamp(1.625rem,2.5vw,2.25rem)] leading-[1.3] font-medium tracking-[-0.035em]">
              “I believe the church is more than a building, it is a family. Our
              desire is to bring people to Christ, nurture them in His Word, and
              equip them to become fully trained disciples who will serve God
              faithfully in every season of life.”
            </blockquote>
            <p className="type-body text-stone mt-8 max-w-[60ch]">
              2 Timothy 2:2: “And the things you have heard me say in the
              presence of many witnesses entrust to reliable people who will also
              be qualified to teach others.”
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6 lg:row-start-2">
            <Button to="/contact">Connect with Pastor Ruel</Button>
          </Reveal>
        </div>
      </Section>

      <Section compact className="bg-mist">
        <div className="space-y-16">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 className="type-subheading text-pasture lg:col-span-4">Our Mission</h2>
            <div className="lg:col-span-8">
              <blockquote className="type-heading text-pasture !text-[clamp(1.875rem,3vw,2.625rem)] !font-medium !leading-[1.2] !tracking-[-0.035em]">
                “To <em className="type-emphasis">love and care</em> for people so they may experience God's salvation
                through Jesus Christ.”
              </blockquote>
              <p className="type-body text-stone mt-8 max-w-[58ch]">
                Romans 5:8: “But God demonstrates His own love for us in this:
                While we were still sinners, Christ died for us.”
              </p>
            </div>
          </Reveal>
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 className="type-subheading text-pasture lg:col-span-4">Our Vision</h2>
            <div className="lg:col-span-8">
              <blockquote className="type-heading text-pasture !text-[clamp(1.875rem,3vw,2.625rem)] !font-medium !leading-[1.2] !tracking-[-0.035em]">
                “A church fully committed to bringing people to Christ, nurturing
                them, and empowering them to be effective witnesses in their
                families, communities, and to the <em className="type-emphasis">whole world.</em>”
              </blockquote>
              <p className="type-body text-stone mt-8 max-w-[58ch]">
                Acts 1:8: “You will be My witnesses in Jerusalem, in all Judea and
                Samaria, and to the ends of the earth.”
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
              <SectionHeading className="text-pasture" eyebrow="What We Believe" title="The pillars of our faith" emphasis="faith" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-12 lg:space-y-16">
            {pillars.map(({ title, body, verse }) => (
              <Reveal key={title} as="article">
                <h3 className="type-subheading text-pasture">{title}</h3>
                <p className="type-body text-stone mt-4 max-w-[62ch]">{body}</p>
                <p className="eyebrow text-wheat-700 mt-6">{verse}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section compact className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading className="text-pasture" eyebrow="Since July 25, 2008" title="Our history" emphasis="history" />
            <MediaPanel src={historic} alt="The Green Pasture Life Church family" ratio="4 / 3" className="mt-8 lg:mt-12" />
          </Reveal>
          <Reveal className="lg:col-span-7 max-w-[62ch] type-body text-stone space-y-6">
            <p>
              Our church began as an outreach in Barangay Santisimo Rosario, San
              Pablo City, Laguna. The ministry started through an evangelistic
              crusade, followed by intentional follow-up and discipleship. From
              there, small groups were formed in different areas of Santisimo.
              By God's grace, these small gatherings continued to grow as more
              people came to know Christ.
            </p>
            <p>
              On July 25, 2008, a greater work officially began as the ministry
              was established as a church. What was once known as Frontline
              Worship Center San Isidro, also recognized as Greenbox, has now
              been given a new name: Green Pasture Life Church Inc.
            </p>
            <p>
              The mission remains the same, but we believe the Lord is leading
              us into a greater purpose and wider harvest. We believe that the
              true Church is not defined by a structure, but by the people of
              God united together for His glory.
            </p>
            <p className="type-subheading text-pasture !mt-10">
              We thank the Lord for His faithfulness through the years. To Him
              be all the glory.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section compact className="bg-mist !pb-12 lg:!pb-16">
        <Reveal>
          <SectionHeading className="text-pasture" eyebrow="Come and Worship" title="Join us this week" emphasis="week" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-12 lg:mt-16">
            {serviceSchedule.map((s, i) => (
              <div key={i} className="grid grid-cols-[0.85fr_1.15fr] gap-x-6 sm:block">
                <p className="type-subheading text-pasture">{s.day}</p>
                <div className="min-w-0">
                  <p className="text-base leading-relaxed text-pasture sm:mt-3 sm:text-body">{s.time}</p>
                  <p className="eyebrow text-stone mt-3">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default About;
