import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { MdLocationOn, MdMessage } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
// import { MdMessage } from "react-icons/md";

export const Icons = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    icon: <FaYoutube />,
  },
  {
    id: 6,
    icon: <FaWhatsapp />,
  },
];

export const AboutUs = [
  {
    id: 1,
    name: "knowledge Base",
  },
  {
    id: 2,
    name: "FAQ",
  },
  {
    id: 3,
    name: "About Us",
  },
];

export const QuickNav = [
  {
    id: 1,
    name: "Terms and Conditions",
  },
  {
    id: 2,
    name: "Privacy Policy",
  },
  {
    id: 3,
    name: "Fees and Charges",
  },
];

export const ContactUs = [
  {
    id: 1,
    icon: <MdLocationOn />,
    name: "21, Adeyemo Alakija Street, Victoria Island Lagos, Nigeria",
  },
  {
    id: 2,
    icon: <BsTelephoneFill />,
    name: "+2349030666593",
  },
  {
    id: 1,
    icon: <MdMessage />,
    name: "info@propcrowdy.com",
  },
];
