interface IMenu {
  title: string;
  subs?: IMenu[];
}

const list: IMenu[] = [
  {
    title: "Front-End",
    subs: [
      { title: "React JS" },
      { title: "Angular JS" },
      {
        title: "Vue JS",
        subs: [
          { title: "PDP-B-19" },
          { title: "PDP-B-18", subs: [{ title: "Arslonbek" }] },
        ],
      },
    ],
  },
  { title: "Back-End" },
  { title: "Mobile Development" },
];
