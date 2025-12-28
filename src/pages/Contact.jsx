import { useState, useRef } from "react";
// Removed import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React from "react";

// Color Palette Variables: Primary: #1a531a (Deep Forest Green), Secondary: #6aa84f (Bright Lime Green)

// Mock Data updated with user's provided information
const churchInfo = {
  name: "Green Pasture Life Church",
  tagline: "Loving God, Loving People, Serving the World.",
  email: "sample@gmail.com",
  phone: "(555) 123-4567",
  address: "Bgry, Santisimo Rosario, City of San Pablo, Laguna Philippines",
  socials: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // --- REAL-WORLD EMAIL INTEGRATION NOTE ---
    // If you were using a service like EmailJS, you would uncomment the block below
    // and provide your service credentials. Since external libraries cannot be
    // guaranteed to load in this environment, we use a simulation.

    /*
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("success");
        if (form.current) form.current.reset();
        setTimeout(() => setStatus(""), 4000); 
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus(""), 4000); 
      }
    );
    */

    // --- SIMULATION FOR LOCAL TESTING ---
    setTimeout(() => {
      // Logic for successful simulation
      setStatus("success");
      if (form.current) {
        form.current.reset();
      }

      // Clear status after a short delay so the user can submit again
      setTimeout(() => setStatus(""), 4000);
    }, 1500); // Simulate 1.5 second network delay
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="md:pr-12">
            <h1
              className="text-4xl font-bold mb-6"
              style={{ color: "#1a531a" }}
            >
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We would love to hear from you! Whether you have a prayer request,
              a question about our ministries, or just want to say hello.
            </p>

            <div className="space-y-8">
              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#6aa84f1A", color: "#1a531a" }} // Light Secondary Background
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#1a531a" }}
                  >
                    Visit Us
                  </h3>
                  <p className="text-gray-600">{churchInfo.address}</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#6aa84f1A", color: "#1a531a" }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#1a531a" }}
                  >
                    Call Us
                  </h3>
                  <p className="text-gray-600">{churchInfo.phone}</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#6aa84f1A", color: "#1a531a" }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#1a531a" }}
                  >
                    Email Us
                  </h3>
                  <p className="text-gray-600">{churchInfo.email}</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#6aa84f1A", color: "#1a531a" }}
                >
                  <Clock size={24} />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#1a531a" }}
                  >
                    Office Hours
                  </h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: "#1a531a" }}
            >
              Send a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-150"
                  placeholder="John Doe"
                  // Use style to handle focus for the green accent
                  onFocus={(e) => {
                    e.target.style.borderColor = "#6aa84f";
                    e.target.style.boxShadow = "0 0 0 2px #6aa84f";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-150"
                  placeholder="john@example.com"
                  // Use style to handle focus for the green accent
                  onFocus={(e) => {
                    e.target.style.borderColor = "#6aa84f";
                    e.target.style.boxShadow = "0 0 0 2px #6aa84f";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-150"
                  placeholder="(555) 123-4567"
                  // Use style to handle focus for the green accent
                  onFocus={(e) => {
                    e.target.style.borderColor = "#6aa84f";
                    e.target.style.boxShadow = "0 0 0 2px #6aa84f";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-150"
                  placeholder="How can we help you?"
                  // Use style to handle focus for the green accent
                  onFocus={(e) => {
                    e.target.style.borderColor = "#6aa84f";
                    e.target.style.boxShadow = "0 0 0 2px #6aa84f";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-white font-bold py-3 rounded-lg transition duration-300 shadow-md disabled:opacity-50"
                style={{
                  backgroundColor: "#1a531a", // Deep Forest Green
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    status !== "sending" ? "#6aa84f" : "#1a531a")
                } // Hover to Bright Lime Green only if not sending
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1a531a")
                } // Reset
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div
                  className="p-4 rounded-lg font-medium"
                  style={{ backgroundColor: "#6aa84f1A", color: "#1a531a" }}
                >
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg font-medium">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Google Maps Embed Placeholder */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15485.169769367923!2d121.29309396008247!3d14.000666153023998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd43cb29a03635%3A0x49006a6c62527cd0!2sSantisimo%20Rosario%2C%20San%20Pablo%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1764676848300!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
