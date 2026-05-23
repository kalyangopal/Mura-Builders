import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {

  // =========================
  // FORM STATE
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // HANDLE FORM SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      // PASTE YOUR GOOGLE SCRIPT URL HERE
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyHBMg4Tx4XkV_QGfQhTjlJAPmZjVtVDwG-5kLFMTrw1mHMtGtq8owHdUt3IbGtauI/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message Sent Successfully!");

        // CLEAR FORM
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {
        alert("Failed to send message.");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#1f1b1d] text-white py-20 overflow-hidden">

      <div className="container mx-auto px-6 lg:px-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-yellow-500 text-lg mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            GET IN TOUCH
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Have a project in mind? Contact MuRa Builders today and let’s
            build your dream together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* PHONE */}
            <div className="flex gap-5 bg-[#2a2527] p-6 rounded-2xl hover:bg-[#332d30] transition duration-300">
              <div className="bg-yellow-500 p-4 rounded-xl text-black">
                <Phone size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Phone Number
                </h3>

                <p className="text-gray-300 text-lg">
                  +91 79044 00495
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-5 bg-[#2a2527] p-6 rounded-2xl hover:bg-[#332d30] transition duration-300">
              <div className="bg-yellow-500 p-4 rounded-xl text-black">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Email Address
                </h3>

                <p className="text-gray-300 text-lg break-all">
                  murabuildersinfo@gmail.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex gap-5 bg-[#2a2527] p-6 rounded-2xl hover:bg-[#332d30] transition duration-300">
              <div className="bg-yellow-500 p-4 rounded-xl text-black">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Office Address
                </h3>

                <p className="text-gray-300 text-lg leading-8">
                  Tiruvapur, Pudukkottai, <br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex gap-5 bg-[#2a2527] p-6 rounded-2xl hover:bg-[#332d30] transition duration-300">
              <div className="bg-yellow-500 p-4 rounded-xl text-black">
                <Clock size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Working Hours
                </h3>

                <p className="text-gray-300 text-lg">
                  Mon - Sat : 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#2a2527] p-8 md:p-10 rounded-3xl shadow-2xl"
          >

            <h3 className="text-3xl md:text-4xl font-bold mb-10">
              Send Message
            </h3>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-[#1f1b1d] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition duration-300"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-[#1f1b1d] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition duration-300"
              />

              {/* PHONE */}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-[#1f1b1d] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition duration-300"
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-[#1f1b1d] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition duration-300"
              />

              {/* MESSAGE */}
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message..."
                required
                className="w-full bg-[#1f1b1d] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition duration-300"
              ></textarea>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl transition duration-300 w-full md:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;