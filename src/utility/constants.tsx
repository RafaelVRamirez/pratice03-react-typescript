
import FacebookIcon from "../components/footer/FacebookIcon";
import XIcon from "../components/footer/XIcon";
import InstagranIcon from "../components/footer/InstagranIcon";

import type { ContactInformation, Feature, Media, Testismonios } from "../type/types";


export const contacts: ContactInformation[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    iconUrl: "/images/icon-location.svg",
    alt: "Icon location",
  },
  {
    text: "+1-543-123-4567",
    iconUrl: "/images/icon-phone.svg",
    alt: "Icon phone",
  },
  {
    text: "example@fylo.com",
    iconUrl: "/images/icon-email.svg",
    alt: "Icon email",
  },
];

export const pages: string[] = ["About Us", "Jobs", "Press", "Blog"];

export const condition: string[] = ["Contact Us", "Terms", "Privacy"];

export const medias: Media[] = [
  {
    text: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "X",
    icon: <XIcon />,
  },
  {
    text: "Instagram",
    icon: <InstagranIcon />,
  },
];




export const Feat : Feature[]=[
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl: "/public/images/icon-access-anywhere.svg",
    },

    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        iconUrl: "/public/images/icon-collaboration.svg",
    },

    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.",
        iconUrl: "/public/images/icon-any-file.svg",
    },

    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl: "/public/images/icon-access-anywhere.svg",
    },



];




export const Test: Testismonios[]=[
    {
        name: "Satish Patel",
        role: "Founder & CEO, Huddle",
        image: "/public/images/profile-1.jpg",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ",
    },

    {
        name: "Bruce McKenzie",
        role: "Founder & CEO, Huddle",
        image: "/public/images/profile-2.jpg",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ",
    },

    {
        name: "Iva Boyd",
        role: "Founder & CEO, Huddle",
        image: "/public/images/profile-3.jpg",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ",
    },
];