import dish1 from "../assets/r1.jpeg";
import dish2 from "../assets/r2.jpeg";
import dish3 from "../assets/r3.jpeg";
import dish4 from "../assets/r4.jpeg";
import dish5 from "../assets/Rahul_sir.jpeg";
import dish6 from "../assets/r6.jpeg";
import dish7 from "../assets/art_craft.jpeg";
import dish8 from "../assets/carrom.jpeg";
import dish9 from "../assets/r1.jpeg";
import dish10 from "../assets/r3.jpeg";

import chess from "../assets/chess.jpeg";
import art_craft from "../assets/art_craft.jpeg";
import carrom from "../assets/carrom.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love to bring change!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
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
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
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