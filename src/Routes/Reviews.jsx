import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Reviews() {
  const reviews = [
    {
      name: "Arun Kumar",
      location: "Pudukkottai",
      review:
        "Muraa Builders delivered our dream home with outstanding quality and professionalism.",
    },
    {
      name: "Priya Sharma",
      location: "Villupuram",
      review:
        "Excellent workmanship and timely completion. Highly recommended construction company.",
    },
    {
      name: "Rahul Menon",
      location: "Trichy",
      review:
        "Very transparent communication throughout the construction process.",
    },
    {
      name: "Sathish Kumar",
      location: "Madurai",
      review:
        "Their team maintained quality and safety standards from start to finish.",
    },
    {
      name: "Naveen Raj",
      location: "Salem",
      review:
        "Professional team with modern designs and impressive execution.",
    },
    {
      name: "Anjali Nair",
      location: "Karaikudi",
      review:
        "The interior work exceeded our expectations with beautiful finishing.",
    },
    {
      name: "Vignesh R",
      location: "Trichy",
      review:
        "Very satisfied with their support and commitment to deadlines.",
    },
    {
      name: "Deepa Krishnan",
      location: "Aranthagi, Pudukkottai",
      review:
        "Reliable builders who truly understand customer requirements.",
    },
    {
      name: "Karthik S",
      location: "Arasarkulam, Pudukkottai",
      review:
        "They transformed our ideas into a modern and elegant living space.",
    },
    {
      name: "Mohammed Asif",
      location: "Ramanathapuram",
      review:
        "Highly professional service with premium quality construction.",
    },
    {
      name: "Harini V",
      location: "Dindigul",
      review:
        "Smooth project management and excellent communication.",
    },
    {
      name: "Ajay Kumar",
      location: "Karur",
      review:
        "Delivered our commercial project on time without compromising quality.",
    },
    {
      name: "Sneha Paul",
      location: "Thanjavur",
      review:
        "Creative design ideas and exceptional attention to detail.",
    },
    {
      name: "Ramesh Babu",
      location: "Viralimalai, Pudukkottai",
      review:
        "Trustworthy company with highly skilled engineers and workers.",
    },
    {
      name: "Divya Lakshmi",
      location: "Pudukkottai",
      review:
        "Very happy with the final outcome. Strongly recommended.",
    },
    {
      name: "Vikram S",
      location: "Tirumayam, Pudukkottai",
      review:
        "Their professionalism made the entire process stress-free.",
    },
    {
      name: "Keerthana",
      location: "Namakkal",
      review:
        "Outstanding finishing work and modern architectural execution.",
    },
    {
      name: "Santhosh Raj",
      location: "Pudukkottai",
      review:
        "Affordable pricing with excellent construction quality.",
    },
    {
      name: "Fathima Noor",
      location: "Pudukkottai",
      review:
        "The team delivered exactly what we envisioned for our home.",
    },
    {
      name: "Hari Prasad",
      location: "Tanjore",
      review:
        "One of the best construction companies for quality and reliability.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-yellow-600 text-lg mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            CUSTOMER REVIEWS
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 relative overflow-hidden"
            >
              {/* QUOTE ICON */}
              <div className="absolute top-6 right-6 text-yellow-200">
                <Quote size={50} />
              </div>

              {/* STARS */}
              <div className="flex gap-1 text-yellow-500 mb-5 relative z-10">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-600 leading-8 mb-8 text-lg relative z-10">
                "{item.review}"
              </p>

              {/* USER INFO */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-black">
                  {item.name}
                </h3>

                <p className="text-yellow-600 mt-1 font-medium">
                  {item.location}
                </p>
              </div>

              {/* HOVER EFFECT */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-30"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;