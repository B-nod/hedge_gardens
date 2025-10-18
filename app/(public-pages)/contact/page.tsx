"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="">
      {/* Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[url('/images/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative text-center text-white z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-200">Home / Contact</p>
        </motion.div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            // 
          >
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              Get in Touch
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full text-green-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    123 Greenway Street, Napa Valley, CA 94558
                  </p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full text-green-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (707) 555-0123</p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full text-green-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@landscaper.com</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            // 
          >
            <iframe
              src="https://maps.google.com/maps?q=10+Hudson+Yards%2C+10256&amp;iwloc=near&amp;output=embed"
              height="920"
              loading="lazy"
              className="border-0 w-full h-[620px]"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.493064232192!2d-122.30527418432135!3d38.297539979667996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808502e3e9b8d0b3%3A0x5c704c5b4a3c8c23!2sNapa%20Valley!5e0!3m2!1sen!2sus!4v1630792207145!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full h-[400px]"
            ></iframe> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
