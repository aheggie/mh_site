import placeholderPhoto from "../static/img/bio-image.jpg";

const placeholderItems = [
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
];

const placeholderData = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    title: "Psychologist, PhD, OPQ",
    photo: placeholderPhoto,
    //note: this is probably the most divergent from what firebase db will send?
    aboutText: `<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id velit
    faucibus, pharetra mauris non, dictum nunc. Vestibulum sem lorem, semper
    sed iaculis at, ultricies non lacus. Suspendisse vestibulum tellus quis
    enim dictum, sed pulvinar nisi eleifend. Mauris pulvinar, est quis
    ultrices pellentesque, est ligula tincidunt libero, non scelerisque
    velit risus in magna. Donec pulvinar malesuada orci in varius. Etiam
    convallis, risus eu iaculis condimentum, tortor felis vulputate orci, id
    laoreet turpis nulla gravida purus. Quisque malesuada nisi a diam
    suscipit vestibulum. Curabitur lobortis pellentesque orci, vel pretium
    erat ornare eu. Vivamus feugiat tempor pretium. Quisque lacus risus,
    ornare at consectetur eget, commodo in sapien. Nullam vulputate laoreet
    consequat.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id velit
    faucibus, pharetra mauris non, dictum nunc. Vestibulum sem lorem, semper
    sed iaculis at, ultricies non lacus. Suspendisse vestibulum tellus quis
    enim dictum, sed pulvinar nisi eleifend. Mauris pulvinar, est quis
    ultrices pellentesque, est ligula tincidunt libero, non scelerisque
    velit risus in magna. Donec pulvinar malesuada orci in varius. Etiam
    convallis, risus eu iaculis condimentum, tortor felis vulputate orci, id
    laoreet turpis nulla gravida purus. Quisque malesuada nisi a diam
    suscipit vestibulum. Curabitur lobortis pellentesque orci, vel pretium
    erat ornare eu. Vivamus feugiat tempor pretium. Quisque lacus risus,
    ornare at consectetur eget, commodo in sapien. Nullam vulputate laoreet
    consequat.
  </p>`,
    email: "janedoe@psychologist.ca",
    phone: "514-000-0000",
    address: "1455 de Maisonneuve Blvd West H3G 1M8",
    //also not sure how this will actually load in from db
    languages: ["English", "French", "Haitian Créole"],
    // these hydrate the sidebar in PractitionerPage
    specialisationsItems: placeholderItems,
    issuesItems: placeholderItems,
    approachItems: placeholderItems,
  },
];

export default placeholderData;
