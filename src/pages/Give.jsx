import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, QrCode, Heart, HandHeart, Globe } from "lucide-react";
import { givingMethods } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Eyebrow from "../components/Eyebrow";
import heroBg from "../assets/outreach.jpg";

const uses = [
  {
    Icon: HandHeart,
    title: "Local Ministry",
    body: "Sustaining weekly worship, discipleship, and care for our church family.",
  },
  {
    Icon: Globe,
    title: "Outreach & Missions",
    body: "Feeding programs, house churches, and sharing the Gospel beyond our walls.",
  },
  {
    Icon: Heart,
    title: "People in Need",
    body: "Meeting practical needs and showing Christ's compassion in our community.",
  },
];

/* Reserve a full-width mobile row and a desktop square for either QR state. */
const QrPanel = ({ src, label }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="aspect-[2/1] md:aspect-square w-full rounded-[var(--radius-panel)] bg-canvas flex items-center justify-center overflow-hidden p-4">
      {failed ? (
        <div className="text-center text-stone">
          <QrCode size={32} aria-hidden="true" className="mx-auto mb-3 text-pasture" />
          <p className="text-sm font-medium">QR code coming soon</p>
          <p className="text-xs mt-1">{label}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={`${label} QR code`}
          width="240"
          height="240"
          className="aspect-square w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

const GiveMethod = ({ method }) => {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(method.accountNumber);
      clearTimeout(copyTimer.current);
      setCopied(true);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="grid gap-8 border-t border-pasture/20 py-10 md:py-12 md:grid-cols-[minmax(0,1fr)_208px] lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.5fr)_208px] lg:gap-12">
      <div className="flex items-baseline justify-between gap-4 md:col-span-2 lg:col-span-1 lg:block">
        <h3 className="type-subheading text-pasture">{method.name}</h3>
        <p className="eyebrow text-pasture lg:mt-4">{method.badge}</p>
      </div>

      <div className="min-w-0">
        <dl>
          <dt className="eyebrow text-stone mb-2">Account Name</dt>
          <dd className="text-xl md:text-2xl text-ink font-medium leading-snug mb-7">{method.accountName}</dd>
          <dt className="eyebrow text-stone mb-2">Account Number</dt>
          <dd className="flex items-center gap-3 md:gap-5">
            <span className="font-mono text-[clamp(1.375rem,2.3vw,2rem)] leading-tight tracking-[-.04em] tabular-nums whitespace-nowrap text-pasture">
              {method.accountNumber}
            </span>
            <button
              type="button"
              onClick={copyNumber}
              className="flex shrink-0 items-center justify-center size-13 rounded-full border border-pasture/50 text-pasture hover:bg-pasture hover:text-canvas transition-colors motion-reduce:transition-none"
              aria-label={`Copy ${method.name} account number`}
            >
              {copied ? <Check size={20} aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}
            </button>
          </dd>
        </dl>
        <p role="status" aria-live="polite" className="h-6 pt-1 text-xs font-medium text-pasture">{copied ? "Copied!" : ""}</p>
        <p className="mt-3 max-w-md text-base text-stone leading-relaxed">{method.note}</p>
      </div>

      <div className="w-full">
        <QrPanel src={method.qr} label={method.name} />
      </div>
    </article>
  );
};

const Give = () => {
  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="2 Corinthians 9:7"
        title="Give cheerfully, give freely"
        emphasis="freely"
        subtitle="“Each of you should give what you have decided in your heart to give, for God loves a cheerful giver.” Thank you for partnering with us in the work of the Gospel."
        image={heroBg}
        ratio="16 / 11"
      />

      <Section compact className="bg-mist pb-12">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16 mb-12 md:mb-16">
          <div>
            <Eyebrow>Ways to Give</Eyebrow>
            <h2 className="type-heading mt-6 text-pasture">Give online</h2>
          </div>
          <p className="type-body text-stone max-w-lg">
            Scan a QR code with your banking app, or send your gift to the
            account details below.
          </p>
        </Reveal>

        <div>
          {givingMethods.map((method) => (
            <GiveMethod key={method.id} method={method} />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:items-baseline md:gap-16 border-t border-pasture/20 pt-8">
          <p className="type-body text-stone">
            Prefer to give in person? You are always welcome to give during our
            Sunday Worship Celebration.
          </p>
          <p className="type-body text-stone">
            For questions about giving,{" "}
            <Link to="/contact" className="inline-flex items-center min-h-11 text-pasture font-semibold underline underline-offset-4 decoration-pasture/40 hover:decoration-pasture">
              reach out to the church office
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section compact>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>Your Generosity at Work</Eyebrow>
            <h2 className="type-heading mt-6 text-pasture max-w-xl">Where your gift goes</h2>
            <p className="type-body mt-6 text-stone max-w-lg">
              Every gift helps us love and care for people so they may experience
              God's salvation through Jesus Christ, here in San Pablo City and
              beyond.
            </p>
          </Reveal>

          <div>
            {uses.map(({ Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 0.065} className="grid grid-cols-[32px_minmax(0,1fr)] gap-5 py-6 border-t border-pasture/20 first:pt-0 first:border-0 last:pb-0">
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" className="text-pasture mt-1" />
                <div>
                  <h3 className="type-subheading text-pasture">{title}</h3>
                  <p className="type-body text-stone mt-3 max-w-md">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section compact className="bg-mist">
        <Reveal className="max-w-4xl mx-auto text-center">
          <Eyebrow align="center">Thank You</Eyebrow>
          <h2 className="type-subheading font-medium mt-8 text-pasture max-w-2xl mx-auto">
            “Freely you have received; <span className="type-emphasis">freely give.</span>”
          </h2>
          <p className="type-body mt-8 text-stone max-w-2xl mx-auto">
            We are deeply grateful for your faithfulness. May the Lord bless you
            as you give from a willing and joyful heart.
          </p>
        </Reveal>
      </Section>
    </div>
  );
};

export default Give;
