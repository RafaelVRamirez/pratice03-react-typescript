import type { ContactInformation, Media } from "../../type/types";
import { condition, contacts, medias, pages } from "../../utility/constants";
import ContactItem from "./ContactItem";
import ListItem from "./ListItem";

const Footer = () => {
  return (
    <footer className="pt-60 xl:pt-40 px-4 pb-4">
      <a href="#">
        <img className="pb-5" src="/public/images/logo.svg" alt="" />
      </a>

      <div className="xl:flex xl:gap-5">
        <div className="flex flex-col gap-4 xl:gap-8 md:flex-row ">
          <ContactItem style="flex-1" {...contacts[0]} />

          <div className="flex flex-col gap-4 flex-1">
            {contacts.slice(1, 4).map((contacto: ContactInformation) => (
              <ContactItem key={contacto.alt} {...contacto} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-16 xl:mt-0  mb-5 md:flex-row md:gap-35 xl:gap-28">
          <ul>
            {pages.map((page: string) => (
              <ListItem key={page} text={page} />
            ))}
          </ul>

          <ul>
            {condition.map((cond: string) => (
              <ListItem key={cond} text={cond} />
            ))}
          </ul>

          <div className="flex justify-center gap-5 ">
            {medias.map((media: Media) => (
              <div
                key={media.text}
                className="text-White hover:text-teal-200 cursor-pointer border rounded-full size-7 p-1"
              >
                {media.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
