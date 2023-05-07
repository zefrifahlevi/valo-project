import imgWebDev from "./assets/images/Launching-amico.svg";
import imgDesign from "./assets/images/Launching-pana.svg";
import imgPhoto from "./assets/images/Launching-bro.svg";
import imgAbout from "./assets/images/outer_space_cuate.svg";

const identity = {
  name: "Zein Irfansyah",

  img: imgAbout,
};

const services = [
  {
    id: 1,
    service_title: "Web Development",
    service_subtitle:
      "We design and develop websites that are responsive and user friendly",
    service_icon: imgWebDev,
  },

  {
    id: 2,
    service_title: "Design Graphic",
    service_subtitle:
      "We create and design logos, banners, posters, flyers, business cards, etc.",
    service_icon: imgDesign,
  },

  {
    id: 3,
    service_title: "Photo & Video Editing",
    service_subtitle:
      "We edit photos and videos for your business or personal use",
    service_icon: imgPhoto,
  },
];

export default { services, identity };
