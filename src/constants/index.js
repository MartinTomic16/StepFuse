import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "2k+", label: "Brands" },
  { value: "700+", label: "Shops" },
  { value: "500k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "StepFuse StrideTech",
    price: "$230",
  },
  {
    imgURL: shoe5,
    name: "StepFuse FlexFit",
    price: "$250",
  },
  {
    imgURL: shoe6,
    name: "StepFuse PowerGrip",
    price: "$270",
  },
  {
    imgURL: shoe7,
    name: "StepFuse ComfortWalk",
    price: "$300",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Kyle Butler",
    rating: 4.6,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Alice Johnson",
    rating: 4.7,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "STFS StrideTech", link: "/" },
      { name: "STFS FlexFit", link: "/" },
      { name: "STFS PowerGrip", link: "/" },
      { name: "STFS ComfortWalk", link: "/" },
      { name: "STFS AeroStride", link: "/" },
      { name: "STFS MaxComfort", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@stfs.com", link: "mailto:customer@stfs.com" },
      { name: "+001 1234 5678 98", link: "tel:+001 1234 5678 98" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
