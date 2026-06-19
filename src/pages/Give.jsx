import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Copy, Check, QrCode, Heart, HandHeart, Globe } from "lucide-react";
import { givingMethods } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
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

/* QR image with a graceful placeholder until a real file is added. */
const QrPanel = ({ src, label }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="aspect-square w-full rounded-2xl bg-canvas border border-mist overflow-hidden flex items-center justify-center p-3">
      {failed ? (
        <div className="text-center text-stone px-4">
          <QrCode size={40} className="mx-auto mb-3 text-meadow/60" />
          <p className="text-sm font-medium">QR code coming soon</p>
          <p className="text-xs text-stone/70 mt-1">{label}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={`${label} QR code`}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

const GiveCard = ({ method }) => {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(method.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col bg-canvas rounded-3xl border border-mist shadow-sm overflow-hidden"
    >
      <div className="flex items-center justify-between px-7 pt-7">
        <h3 className="font-display text-2xl text-pasture">{method.name}</h3>
        <span className="text-xs font-semibold uppercase tracking-widest text-meadow bg-mist px-3 py-1.5 rounded-full">
          {method.badge}
        </span>
      </div>

      <div className="p-7 grid sm:grid-cols-2 gap-6 items-center">
        <QrPanel src={method.qr} label={method.name} />

        <div>
          <p className="eyebrow text-wheat mb-1">Account Name</p>
          <p className="text-ink font-medium mb-4 leading-snug">{method.accountName}</p>

          <p className="eyebrow text-wheat mb-1">Account Number</p>
          <div className="flex items-center gap-2">
            <p className="font-display text-xl text-pasture tracking-wide">
              {method.accountNumber}
            </p>
            <button
              onClick={copyNumber}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-mist text-pasture hover:bg-meadow hover:text-canvas transition-colors"
              aria-label={`Copy ${method.name} account number`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-meadow font-medium mt-1.5">Copied!</p>
          )}
        </div>
      </div>

      <p className="px-7 pb-7 text-sm text-stone leading-relaxed">{method.note}</p>
    </motion.div>
  );
};

const Give = () => {
  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="2 Corinthians 9:7"
        title="Give cheerfully, give freely"
        subtitle="“Each of you should give what you have decided in your heart to give, for God loves a cheerful giver.” Thank you for partnering with us in the work of the Gospel."
        image={heroBg}
      />

      {/* Where gifts go */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow align="center">Your Generosity at Work</Eyebrow>
          <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
            Where your gift goes
          </h2>
          <p className="mt-5 text-stone text-lg leading-relaxed">
            Every gift helps us love and care for people so they may experience
            God's salvation through Jesus Christ — here in San Pablo City and
            beyond.
          </p>
        </Reveal>

        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {uses.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="text-center bg-mist/50 rounded-3xl p-7"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-canvas shadow-sm mb-5">
                <Icon size={24} className="text-meadow" />
              </span>
              <h3 className="font-display text-xl text-pasture mb-2">{title}</h3>
              <p className="text-[15px] text-ink/70 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Giving methods */}
      <section className="bg-mist py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow align="center">Ways to Give</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl md:text-5xl">
              Give online
            </h2>
            <p className="mt-5 text-stone text-lg leading-relaxed">
              Scan a QR code with your banking app, or send your gift to the
              account details below.
            </p>
          </Reveal>

          <motion.div
            className="grid md:grid-cols-2 gap-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {givingMethods.map((method) => (
              <GiveCard key={method.id} method={method} />
            ))}
          </motion.div>

          <Reveal className="mt-10 text-center text-sm text-stone max-w-xl mx-auto">
            Prefer to give in person? You are always welcome to give during our
            Sunday Worship Celebration. For questions about giving,{" "}
            <Link to="/contact" className="text-meadow font-semibold hover:text-pasture transition-colors">
              reach out to the church office
            </Link>
            .
          </Reveal>
        </div>
      </section>

      {/* Thank you */}
      <section className="relative bg-moss overflow-hidden">
        <Reveal className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-20 md:py-24 text-center">
          <Eyebrow align="center" tone="light">
            Thank You
          </Eyebrow>
          <h2 className="mt-5 font-display font-light text-canvas text-3xl sm:text-4xl leading-tight">
            “Freely you have received; freely give.”
          </h2>
          <p className="mt-5 text-meadow-300/90 text-lg leading-relaxed">
            We are deeply grateful for your faithfulness. May the Lord bless you
            as you give from a willing and joyful heart.
          </p>
        </Reveal>
      </section>
    </div>
  );
};

export default Give;
