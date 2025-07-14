
import { useEffect, useState } from "react";
import { Button } from "../../atomo/button";
import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


interface SocialMedia {
  link: string;
  name: string;
};

export const ButtonGroup = () => {
  const [medias, setMedias] = useState<SocialMedia[]>([]);

  useEffect(() => {
    fetch("/social_medias.json")
      .then(response => response.json())
      .then(data => {
        setMedias(data);
      })
      .catch(error => {
        console.error("Erro para ler a API de social medias:", error);
      });
  }, []);

  return (
    <div className="socialMedias w-[45%] grid grid-cols-2 gap-4">
      {medias.map((socialMedia) => (
        <Button 
        color="brown" 
        size="small" 
        type="mediaIcon">
          <a href={`${socialMedia.link}`} id={socialMedia.name}>
            {socialMedia.name === "Github" 
            ? (<IoLogoGithub/>)
            : socialMedia.name === "Linkedin" 
            ?(<BsLinkedin />)
            : socialMedia.name === "Whatsapp"
            ?(<FaWhatsapp/>)
            : socialMedia.name === "Email"
            ? (<MdEmail />)
            : ""
            }
          </a>
        </Button>
      ))}
    </div>
  );
};
