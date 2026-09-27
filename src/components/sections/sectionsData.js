import im1 from './Capture.PNG'
import im2 from './2.PNG'


// kind of takes time to write this  , so why no use claude  to gain some time ? 

const sectionsData = [
    {
    id: 1,
    badge: "NEW",
    eyebrow: "SAAS BOILERPLATE FOR NEXT.JS",
    heading: "A Complete Solution for SaaS Startup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.",
    image: im1,
    imagePosition: "left",
    features: [
      { number: "01", title: "React 18, Next.js 13 and TypeScript", text: "Ut ultricies lacus non fermentum ultrices." },
      { number: "02", title: "Fully Customizable", text: "consectetur adipiscing elit fermentum ultrices." },
    ],
    cta: null,
  },
  {
    id: 2,
    badge: null,
    eyebrow: "LAUNCH YOUR SAAS FAST",
    heading: "Packed with All Essential Integrations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.",
    image:im2,
    imagePosition: "right",     
    features: [],               // no numbered list here, just a CTA link instead
    cta: "Know More",
  },
];
 export default sectionsData;