import placeholderPhoto from "../static/img/bio-image.jpg";
import placeholderThumbnailPhoto from "../static/img/bio-image-thumbnail.jpg";

const placeholderItems = [
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit amet, consectetur.",
];

const placeholderPractitionerOne = {
  id: 1,
  name: "Dr. Jane Doe",
  title: "Psychologist, PhD, OPQ",
  photo: placeholderPhoto,
  thumbnailPhoto: placeholderThumbnailPhoto,
  //there is a data discrepancy in the front end design
  //this ethnic self-identity appears in the FilterPage Preview cards
  //but not in the PractitionerPage
  selfIdentity: "Haitian Créole",
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
  //these hydrate the BioPayment component
  paymentRates: {
    individual: 100,
    studentIndividual: 75,
    coupleFamily: 125,
    studentCoupleFamily: 100,
  },
  paymentMethods: ["Cash", "etransfer", "cheque"],
  insuranceAccepted: ["PlanGreen", "PlanYellow"],
  accessibilityBooleans: {
    wheelchair: true,
    trans: true,
    slidingScale: true,
  },
  orderAffiliation: "Order of Psychologists of Quebec (OPQ)",
  licenseNumber: "1280058",
  schooling: "McGill University Post-Doc - Clinical Psychology",
  yearGraduated: "2015",
  yearsInPractice: 5,
  extraCredentials: `Phasellus sagittis, risus id gravida feugiat.`,
};

const placeholderPractitionerTwo = {
  id: 1,
  name: "Jane Doe",
  title: "Social Worker",
  photo: placeholderPhoto,
  thumbnailPhoto: placeholderThumbnailPhoto,
  //there is a data discrepancy in the front end design
  //this ethnic self-identity appears in the FilterPage Preview cards
  //but not in the PractitionerPage
  selfIdentity: "Black",
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
  email: "janedoe@socialworker.ca",
  phone: "514-555-5555",
  address: "2100 rue McKay Montreal",
  //also not sure how this will actually load in from db
  languages: ["English", "French", "Spanish"],
  // these hydrate the sidebar in PractitionerPage
  specialisationsItems: placeholderItems,
  issuesItems: placeholderItems,
  approachItems: placeholderItems,
  //these hydrate the BioPayment component
  paymentRates: {
    individual: 120,
    studentIndividual: 85,
    coupleFamily: 145,
    studentCoupleFamily: 110,
  },
  paymentMethods: ["Cheque", "Etransfer"],
  insuranceAccepted: ["PlanGreen", "PlanBlue", "PlanRed"],
  accessibilityBooleans: {
    wheelchair: false,
    trans: true,
    slidingScale: true,
  },
  orderAffiliation: "Order of Social Workers of Quebec",
  licenseNumber: "777-77555",
  schooling: "McGill School of Social Work",
  yearGraduated: "2016",
  yearsInPractice: 4,
  extraCredentials: `Certified therapist.`,
};

const placeholderData = [
  placeholderPractitionerOne,
  placeholderPractitionerOne,
  placeholderPractitionerTwo,
  placeholderPractitionerTwo,
  placeholderPractitionerTwo,
  placeholderPractitionerOne,
  placeholderPractitionerOne,
  placeholderPractitionerTwo,
  placeholderPractitionerTwo,
];

const getPlaceHolderPractitioner = (id) => placeholderData[id];

export default placeholderData;

export { getPlaceHolderPractitioner };
