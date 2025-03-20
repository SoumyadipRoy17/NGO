import React from "react";

import { motion } from "framer-motion";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import ContactSection from "../components/ContactSection";
const Contact_Us = () => {
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
  });

  return (
    <>
      <section className="container mt-20 mx-auto" id="our_location">
        <ContactSection />
        <section className="container mt-20 mx-auto" id="our_location">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl text-center tracking-tighter lg:text-6xl"
            // className="text-center text-4xl lg:text-4xl"
          >
            Our Location
          </motion.h2>
          <div className="py-10 flex flex-wrap">
            <div className="w-full z-10 p-6 lg:w-1/2 rounded-3xl ">
              <MapContainer
                center={[12.856022368965954, 77.46562519109459]} // Adjust the coordinates to your desired location
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "500px", width: "100%" }} // Adjust the size as needed
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[12.856022368965954, 77.46562519109459]}
                  icon={customIcon}
                >
                  <Popup>
                    We are here! <br /> PRAJAKIRANA SEVA CHARITABLE TRUST(R).
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="w-full px-2 lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl tracking-tighter lg:text-6xl"
              >
                We are Here !
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 mt-1 h-2 w-36 bg-green-300 lg:rotate-3"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
              >
                VF48+878, 26/2, Devagere, Kaggalipur Road, Kumbalgodu,
                Bengaluru, Karnataka 560060
              </motion.p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact_Us;
