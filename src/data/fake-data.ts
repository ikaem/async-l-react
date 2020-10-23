export interface OfficeItemInterface {
  id: string;
  location: string;
  street: string;
  email: string;
  phone: string;
}

export interface ServiceItemBriefInterface {
  id: string;
  images: string[];
  title: string;
  lead: string;
  features: string[];
}

export interface ServiceItemInterface extends ServiceItemBriefInterface {
  description: string;
  work: {
    id: string;
    imageUrl: string;
    title: string;
  }[];
}

export const servicesList: ServiceItemInterface[] = [
  {
    id: "1",
    images: [
      "https://source.unsplash.com/1080x561/?nature",
      "https://source.unsplash.com/1080x560/?nature",
    ],
    title: "Software & App Development",
    lead:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur temporibus non necessitatibus.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
      "Blockchain Development",
    ],
    description:
      "Stanford has used AFS since 1990 as its enterprise-wide network file system, and I was involved in maintaining Stanford's cell from 1998 to 2014. Here are various notes, presentations, and white papers on AFS administration, tools, and configuration that I accumulated over the years. ",
    work: [
      {
        id: "1",
        imageUrl: "https://source.unsplash.com/1080x562/?nature",
        title: "Work 1",
      },
      {
        id: "2",
        imageUrl: "https://source.unsplash.com/1080x563/?nature",
        title: "Work 2",
      },
      {
        id: "3",
        imageUrl: "https://source.unsplash.com/1080x564/?nature",
        title: "Work 3",
      },
      {
        id: "4",
        imageUrl: "https://source.unsplash.com/1080x565/?nature",
        title: "Work 4",
      },
    ],
  },
  {
    id: "2",
    images: [
      "https://source.unsplash.com/1080x563/?nature",
      "https://source.unsplash.com/1080x564/?nature",
    ],
    title: "Product Marketing",
    lead:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur temporibus non necessitatibus.",
    features: [
      "SEO & Search Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Inbouc Marketing",
      "Paid Advertising",
    ],
    description:
      "Stanford has used AFS since 1990 as its enterprise-wide network file system, and I was involved in maintaining Stanford's cell from 1998 to 2014. Here are various notes, presentations, and white papers on AFS administration, tools, and configuration that I accumulated over the years. ",
    work: [
      {
        id: "1",
        imageUrl: "https://source.unsplash.com/1080x562/?nature",
        title: "Work 1",
      },
      {
        id: "2",
        imageUrl: "https://source.unsplash.com/1080x563/?nature",
        title: "Work 2",
      },
      {
        id: "3",
        imageUrl: "https://source.unsplash.com/1080x564/?nature",
        title: "Work 3",
      },
      {
        id: "4",
        imageUrl: "https://source.unsplash.com/1080x565/?nature",
        title: "Work 4",
      },
    ],
  },
  {
    id: "3",
    images: [
      "https://source.unsplash.com/1080x566/?nature",
      "https://source.unsplash.com/1080x567/?nature",
    ],
    title: "Digital Design",
    lead:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur temporibus non necessitatibus.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Graphic Design",
    ],
    description:
      "Stanford has used AFS since 1990 as its enterprise-wide network file system, and I was involved in maintaining Stanford's cell from 1998 to 2014. Here are various notes, presentations, and white papers on AFS administration, tools, and configuration that I accumulated over the years. ",
    work: [
      {
        id: "1",
        imageUrl: "https://source.unsplash.com/1080x562/?nature",
        title: "Work 1",
      },
      {
        id: "2",
        imageUrl: "https://source.unsplash.com/1080x563/?nature",
        title: "Work 2",
      },
      {
        id: "3",
        imageUrl: "https://source.unsplash.com/1080x564/?nature",
        title: "Work 3",
      },
      {
        id: "4",
        imageUrl: "https://source.unsplash.com/1080x565/?nature",
        title: "Work 4",
      },
    ],
  },
];

export const officesList: OfficeItemInterface[] = [
  {
    id: "1",
    location: "London, UK",
    street: "Vlaška ulica, 70 E",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
  {
    id: "2",
    location: "Zagreb, Croatia",
    street: "Vlaška ulica, 70 E",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
  {
    id: "3",
    location: "Zagreb, Croatia",
    street: "Vlaška ulica, 70 E",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
];
