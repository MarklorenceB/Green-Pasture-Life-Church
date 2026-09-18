import React, { useState, useRef } from "react";
import { churchInfo } from "../data/mockdata";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Section from "../components/Section";
import Button from "../components/Button";
import Field from "../components/Field";
import heroBg from "../assets/image.png";

const contactItems = [
  {
    title: "Visit Us",
    lines: [churchInfo.address],
  },
  {
    title: "Call Us",
    lines: [churchInfo.phone, churchInfo.phone2],
  },
  {
    title: "Email Us",
    lines: [churchInfo.email],
  },
];

const contactValueClass =
  "max-w-lg break-words text-[clamp(1.375rem,1.9vw,1.75rem)] leading-snug tracking-tight text-pasture";

const fieldClass =
  "min-h-14 rounded-xl text-base placeholder:text-stone outline-none transition-colors focus:border-pasture focus:ring-2 focus:ring-pasture focus:ring-offset-2 focus:ring-offset-canvas user-invalid:border-wheat-700 user-invalid:ring-1 user-invalid:ring-wheat-700 motion-reduce:transition-none";

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
    <div className="bg-canvas [&_.page-hero\_\_image]:bg-[position:55%_center] md:[&_.page-hero\_\_image]:aspect-[4/3]! md:[&_.page-hero\_\_copy]:py-0">
      <PageHero
        eyebrow="Reach Out"
        title="Get in touch"
        subtitle="Whether you have a prayer request, a question about our ministry, or simply want to connect — we would love to hear from you."
        image={heroBg}
        ratio="1 / 1"
      />

      <Section compact>
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-x-24">
          {/* Contact info */}
          <Reveal className="min-w-0">
            <Eyebrow>We&apos;re Here for You</Eyebrow>
            <h2 className="type-heading max-sm:text-title mt-6 mb-10 max-w-lg text-pasture">
              Come as you are
            </h2>
            <div className="divide-y divide-pasture/20 border-t border-pasture/20">
              {contactItems.map(({ title, lines }) => (
                <div key={title} className="py-6">
                  <h3 className="eyebrow mb-3 text-pasture">{title}</h3>
                  {lines.map((l, i) => (
                    <p key={i} className={contactValueClass}>
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-pasture/20 pt-6 text-pasture">
              <h3 className="eyebrow mb-4">Office Hours</h3>
              <p className={contactValueClass}>Tuesday – Friday</p>
              <p className={`${contactValueClass} mt-2 tabular-nums`}>9:00 AM – 4:00 PM</p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="min-w-0 self-stretch lg:col-start-2">
            <div className="flex h-full flex-col rounded-panel bg-mist p-6 sm:p-10 lg:p-12">
              <h2 className="type-subheading mb-8 text-pasture">
                Send a message
              </h2>
              <form ref={form} onSubmit={sendEmail} className="flex flex-1 flex-col gap-6" aria-busy={status === "sending"}>
                <Field label="Full Name" type="text" id="contact-user_name" name="user_name" required placeholder="Juan dela Cruz" className={fieldClass} />
                <Field label="Email Address" type="email" id="contact-user_email" name="user_email" required placeholder="juan@example.com" className={fieldClass} />
                <Field label={<>Phone <span className="text-stone">(optional)</span></>} type="tel" id="contact-user_phone" name="user_phone" placeholder="0927 938 4441" className={fieldClass} />
                <Field as="textarea" label="Message" id="contact-message" name="message" required rows="4" placeholder="How can we pray for you, or help you connect?" wrapperClassName="flex flex-1 flex-col" className={`${fieldClass} min-h-40 flex-1 resize-y`} />
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full disabled:!bg-stone disabled:!text-canvas disabled:!opacity-100 disabled:cursor-wait motion-reduce:transition-none"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>

                {status === "success" && (
                  <div role="status" className="rounded-xl bg-canvas p-4 text-sm font-medium text-pasture">
                    Thank you! Your message has been received — we&apos;ll be in
                    touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="rounded-xl border border-wheat-700 bg-canvas p-4 text-sm font-medium text-ink">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal className="rounded-panel bg-mist p-5 pb-8 sm:p-6 sm:pb-8 lg:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15485.169769367923!2d121.29309396008247!3d14.000666153023998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd43cb29a03635%3A0x49006a6c62527cd0!2sSantisimo%20Rosario%2C%20San%20Pablo%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1764676848300!5m2!1sen!2sph"
              className="block h-112 w-full sm:h-120"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Pasture Life Church location map"
            />
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
