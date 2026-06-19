import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { churchInfo } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import heroBg from "../assets/image.png";

const contactItems = [
  {
    Icon: MapPin,
    title: "Visit Us",
    lines: [churchInfo.address],
  },
  {
    Icon: Phone,
    title: "Call Us",
    lines: [churchInfo.phone, churchInfo.phone2],
  },
  {
    Icon: Mail,
    title: "Email Us",
    lines: [churchInfo.email],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Tuesday – Friday", "9:00 AM – 4:00 PM"],
  },
];

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-mist bg-canvas text-ink outline-none transition focus:border-meadow focus:ring-2 focus:ring-meadow/30";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission — no email is actually delivered.
    setTimeout(() => {
      setStatus("success");
      if (form.current) form.current.reset();
      setTimeout(() => setStatus(""), 4000);
    }, 1500);
  };

  return (
    <div className="bg-canvas">
      <PageHero
        eyebrow="Reach Out"
        title="Get in touch"
        subtitle="Whether you have a prayer request, a question about our ministry, or simply want to connect — we would love to hear from you."
        image={heroBg}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <Reveal>
            <Eyebrow>We&apos;re Here for You</Eyebrow>
            <h2 className="mt-4 font-display font-light text-pasture text-3xl sm:text-4xl mb-8">
              Come as you are
            </h2>
            <div className="space-y-6">
              {contactItems.map(({ Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist flex-shrink-0">
                    <Icon size={22} className="text-pasture" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-pasture text-lg">{title}</h3>
                    {lines.map((l, i) => (
                      <p key={i} className="text-stone leading-relaxed break-words">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="bg-mist/50 border border-mist rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl sm:text-3xl text-pasture mb-7">
                Send a message
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Full Name
                  </label>
                  <input type="text" name="user_name" required placeholder="Juan dela Cruz" className={fieldClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Email Address
                  </label>
                  <input type="email" name="user_email" required placeholder="juan@example.com" className={fieldClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Phone <span className="text-stone/60">(optional)</span>
                  </label>
                  <input type="tel" name="user_phone" placeholder="0927 938 4441" className={fieldClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Message
                  </label>
                  <textarea name="message" required rows="4" placeholder="How can we pray for you, or help you connect?" className={fieldClass} />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-pasture text-canvas font-semibold py-3.5 rounded-full hover:bg-meadow transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="p-4 rounded-xl bg-meadow/15 text-pasture font-medium text-sm">
                    Thank you! Your message has been received — we&apos;ll be in
                    touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-100 text-red-700 font-medium text-sm">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-mist h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15485.169769367923!2d121.29309396008247!3d14.000666153023998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd43cb29a03635%3A0x49006a6c62527cd0!2sSantisimo%20Rosario%2C%20San%20Pablo%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1764676848300!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Pasture Life Church location map"
          />
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
