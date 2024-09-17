import about from "../assets/kids_play.jpeg";
import rahul_sir from "../assets/Rahul_sir.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CoreValue from "../components/CoreValue";
import compassionImage from "../assets/compassion.jpeg"; // Example image imports
import educationImage from "../assets/education.jpeg";
import inclusivityImage from "../assets/inclusivity.jpeg";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
});

const About_Us = () => {
  return (
    <>
      <section className="container mt-20 mx-auto " id="about">
        <h2 className=" text-center text-4xl  lg:text-4xl">About Us</h2>
        <div className="py-10 flex flex-wrap">
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl"
            >
              {ABOUT.header}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            >
              {ABOUT.content}
            </motion.p>
          </div>
          <div className="w-full p-6 lg:w-1/2">
            <img src={about} className="rounded-3xl lg:rotate-3" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-8" id="core_values">
        {/* <h2 className="mb-8 text-center text-6xl tracking-tighter lg:text-4xl">
          
        </h2> */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-36 bg-yellow-400 lg:rotate-3"
          ></motion.div>

          <div className="flex flex-wrap justify-center">
            {/* Compassion */}
            <CoreValue
              image={compassionImage}
              title="Compassion"
              description="We treat every child with love and respect."
            />

            {/* Education */}
            <CoreValue
              image={educationImage}
              title="Education"
              description="We believe education is the key to breaking the cycle of poverty."
            />

            {/* Inclusivity */}
            <CoreValue
              image={inclusivityImage}
              title="Inclusivity"
              description="We welcome children from all backgrounds."
            />
          </div>
        </div>
      </section>
      <section className="container mt-20 mx-auto " id="mentor">
        <h2 className=" text-center text-4xl  lg:text-4xl">Our Mentor</h2>
        <div className="py-10 flex flex-wrap">
          <div className="w-full p-6 lg:w-1/2">
            <img src={rahul_sir} className="rounded-3xl lg:rotate-3" />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl"
            >
              Mr. B H Gali
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 mt-1 h-2 w-36 bg-yellow-400 lg:rotate-3"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            >
              Details about our mentor
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container mt-20 mx-auto" id="our_location">
        <h2 className="text-center text-4xl lg:text-4xl">Our Location</h2>
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
              VF48+878, 26/2, Devagere, Kaggalipur Road, Kumbalgodu, Bengaluru,
              Karnataka 560060
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_Us;
