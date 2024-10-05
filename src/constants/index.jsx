import story1 from "../assets/r1.jpeg";
import story2 from "../assets/r2.jpeg";
import story3 from "../assets/r3.jpeg";
import story4 from "../assets/r4.jpeg";
import story5 from "../assets/Rahul_sir.jpeg";
import story6 from "../assets/r6.jpeg";
import story7 from "../assets/art_craft.jpeg";
import story8 from "../assets/carrom.jpeg";
import story9 from "../assets/r1.jpeg";
import story10 from "../assets/r3.jpeg";

import chess from "../assets/chess.jpeg";
import art_craft from "../assets/art_craft.jpeg";
import carrom from "../assets/carrom.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Home", targetId: "/" },
  { text: "About", targetId: "/about_us" },
  { text: "Mission", targetId: "/mission" },
  { text: "Activities", targetId: "/activities" },
  { text: "Contribute ", targetId: "/contribute" },
  { text: "Contact Us", targetId: "/contact_us" },
];

export const DISHES = [
  {
    image: story1,
    title: "Artistry in Motion",
    description:
      "A child expresses their creativity through painting and crafts.",
  },
  {
    image: story2,
    title: "Culinary Creations",
    description:
      "Learning to cook delicious meals and experimenting with flavors.",
  },
  {
    image: story3,
    title: "Music for the Soul",
    description: "Playing instruments and composing tunes that inspire.",
  },
  {
    image: story4,
    title: "Theatrical Talents",
    description: "Acting and performing in plays that tell heartfelt stories.",
  },
  {
    image: story5,
    title: "Sports Achievers",
    description:
      "Showing discipline and teamwork on the field in various sports.",
  },
  {
    image: story6,
    title: "Future Innovators",
    description:
      "Building and creating with science, technology, and imagination.",
  },
  {
    image: story7,
    title: "Dancers with Dreams",
    description:
      "Mastering different dance styles and expressing emotions through movement.",
  },
  {
    image: story8,
    title: "Storytellers of Tomorrow",
    description:
      "Writing captivating stories and poems that reflect their world.",
  },
  {
    image: story9,
    title: "Crafting with Care",
    description:
      "Creating beautiful handmade crafts that showcase creativity and precision.",
  },
  {
    image: story10,
    title: "Young Leaders in Action",
    description:
      "Developing leadership and teamwork skills through group projects.",
  },
];

export const ABOUT = {
  header: "We love to bring change!",
  content:
    "“At Prajakirana Seva Charitable Trust, we are committed to creating a safe, nurturing environment where orphaned children can thrive emotionally, physically, and academically. Our mission is to provide every child with the love, care, and support they need to overcome challenges and realize their full potential. Academically. Our mission is to provide every child with the love, care, and support they need to overcome challenges and realize their full potential.  We are extremely grateful to our donors and volunteers who make our work possible. Together, we are changing lives and building a brighter future for orphaned children in need”",
};

export const MISSION =
  "At our NGO ,our mission is to empower children by nurturing their talents and providing opportunities for a brighter, self-sustained future.";

export const CUSINES = [
  {
    number: "01.",
    image: chess,
    title: "Chess",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: art_craft,
    title: "Art and Craft",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: carrom,
    title: "Carrom",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "B.H Gali",
  profession: "Founder",
  content:
    "“At our NGO, we believe every child has unique talents waiting to shine. Our mission is to provide a nurturing environment where orphaned children can discover and develop their skills, empowering them to reach their full potential. Whether it's art, music, sports, or academics, we support and guide each child on their journey to success. Through love, care, and opportunity, we strive to build a brighter future where their talents become their stepping stones to a fulfilling life. Together, we are shaping futures and changing lives, one skill at a time.”",
};

export const CONTACT = [
  {
    key: "address",
    value:
      "Address: VF48+878, 26/2, Devagere, Kaggalipur Road, Kumbalgodu, Bengaluru,Karnataka 560060",
  },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
