//this is to have a single source of truth for the coding/naming of professions throughout the site,
//primarily to have easy consistency with any database writes and reads on the backend
//and also to have consistent naming practices in the front-en UI

import { enAndFrContent } from "./utilities";

const professionCodes = {
  couple: "couple-and-family-therapists",
  social: "social-workers",
  psychologist: "psychologists",
  sexologist: "sexologists",
  indigenous: "indigenous-elders-and-healers",
  psychotherapist: "psychotherapists",
  other: "other-mental-health-professionals",
  //note: these are new in the site text,
  psychoeducator: "psychoeducators",
  creative: "creative-arts-therapists",
};

//this is to consistently pull titles in each language based on the professionCode encoded in the route
//most Static text is held at the root of the component that it is used in
//but this static text is used in at least two pages, the SeekingPage's ProfessionCard subcomponent and the FilterPage
const staticProfessionTitle = {
  [professionCodes.couple]: enAndFrContent(
    "Couple and family therapists",
    "Thérapeutes de couple / de mariage et de famille"
  ),
  [professionCodes.social]: enAndFrContent(
    "Social workers",
    "Travailleurs sociaux"
  ),
  [professionCodes.psychologist]: enAndFrContent(
    "Psychologists",
    "Psychologues"
  ),
  [professionCodes.sexologist]: enAndFrContent("Sexologists", "Sexologues"),
  [professionCodes.indigenous]: enAndFrContent(
    "Indigenous elders and healers",
    "Aînés et guérisseurs autochtones "
  ),
  [professionCodes.psychotherapist]: enAndFrContent(
    "Psychotherapists and others with psychotherapy permit",
    "Psychothérapeutes et titulaires de permis en psychothérapie"
  ),
  [professionCodes.other]: enAndFrContent(
    "Other mental health professionals",
    "D’autres professionnels de la santé mentale"
  ),
  //note: these are new in the site text,
  [professionCodes.psychoeducator]: enAndFrContent(
    "Psychoeducators",
    "Psychoéducateurs"
  ),
  [professionCodes.creative]: enAndFrContent(
    "Creative arts therapies",
    "Thérapies par les arts créatifs"
  ),
};

//this is sort of deep in for this data to sit but it is only used in this component
//and it makes this component a simple finite state machine based only on lang and professionCode
const staticProfessionDescription = {
  [professionCodes.couple]: enAndFrContent(
    `Couple and family therapists practice a branch of psychotherapy that works with families and couples in intimate relationships to nurture change and development. It tends to view change in terms of the systems of interaction between family members. It emphasizes family relationships as an important factor in psychological health. 
  All couple and family therapists are part of the Quebec Order of Social Workers and Couple and Family Therapists. To verify a practitioner's registration, use their permit number found on their personal page.
  `,
    `Les thérapeutes de couple et de famille pratiquent une forme de la psychothérapie qui cible à aider les familles et les couples dans leurs relations intimes pour favoriser des changement et un meilleur développement. Un changement en termes des différents systèmes d'interaction entre les membres de la famille. Il met l'accent sur les relations familiales comme facteur important de santé psychologique. Tous les thérapeutes de couple et de famille font partie de l'Ordre des travailleurs sociaux et des thérapeutes de couple et de famille du Québec. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.`
  ),
  [professionCodes.social]: enAndFrContent(
    `Social workers are concerned with helping individuals, families, groups and communities to enhance their individual and collective well-being. It aims to help people develop their skills and their ability to use their own resources and those of the community to resolve problems. Social work is concerned with individual and personal problems but also with broader social issues such as poverty, unemployment, and domestic violence.
  All social workers are part of the Quebec Order of Social Workers and Couple and Family Therapists. To verify a practitioner’s registration, use their permit number found on their personal page.
  `,
    `Les travailleurs sociaux aident les individus, des familles, des groupes et des communautés à améliorer leur bien-être individuel et collectif. Ils visent à aider les gens aux développement de leurs compétences et leur capacité à utiliser leurs propres ressources et celles de la communauté au large pour résoudre des problèmes. Le travail social vise les soucis individuels et personnels, mais addresse également les problèmes sociaux plus étendus tels que la pauvreté, le chômage et la violence domestique.
  Tous les travailleurs sociaux font partie de l'Ordre des travailleurs sociaux et des thérapeutes de couple et de famille du Québec. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.
  `
  ),
  [professionCodes.psychologist]: enAndFrContent(
    `A psychologist studies how we think, feel and behave from a scientific viewpoint and applies this knowledge to help people understand, explain and change their behaviour.
  All psychologists are part of the Quebec Order of Psychologists and have a permit to practice psychotherapy. To verify a practitioner’s registration, use their permit number found on their personal page.
  `,
    `Un psychologue étudie comment nous pensons, ressentons et nous comportons d'un point de vue scientifique et applique ces connaissances pour aider les gens à comprendre, expliquer et changer leur comportement. Tous les psychologues font partie de l'Ordre des psychologues du Québec et sont autorisés à pratiquer la psychothérapie. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.`
  ),
  [professionCodes.sexologist]: enAndFrContent(
    `Sex therapists help identify, understand and interpret all aspects of sexuality. They listen and seek to clarify people’s needs and expectations, and help find ways to meet them that are fulfilling and in line with individuality and dignity, as well as personal and social responsibility.
  Sex therapists engage in the design, actualization, consultation, analysis and assessment of human sexuality. They determine and implement sexology plans for educational, preventive and counseling purposes aimed at the improvement, maintenance and restoration of sexual health.
  All sexologists are part of the Quebec Order of Sexologists. To verify a practitioner’s registration, use their permit number found on their personal page.
  `,
    `Les sexologues aident à identifier, comprendre et à interpréter tous les aspects de la sexualité. Ils écoutent et cherchent à clarifier les besoins et les attentes des gens pour les rendrent plus accessible et qu’ils soient conformes et s'alignent à l'individualité, la dignité, ainsi qu'à la responsabilité personnelle et sociale. Les sexothérapeutes s'engagent dans la conception, l'actualisation, la consultation, l'analyse et l'évaluation de la sexualité humaine. Ils déterminent et mettent en œuvre des plans de sexologie à des fins éducatives, préventives et des conseils visant à l'amélioration, au maintien et au rétablissement de la santé sexuelle. Tous les sexologues font partie de l'Ordre des sexologues du Québec. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.`
  ),
  [professionCodes.indigenous]: enAndFrContent(
    `Traditional healers refer to health practices, approaches, knowledge and beliefs incorporating indigenous healing and wellness while using ceremonies; plant, animal or mineral-based medicines; energetic therapies; or physical/hands on techniques.`,
    `Les guérisseurs traditionnels se réfèrent aux pratiques, approches, connaissances et croyances incorporant des méthodes curatives traditionnelles ayant recours à des cérémonies; médicaments à base de plantes, d'animaux ou de minéraux; thérapies énergétiques; ou l’usage de techniques pratiques. `
  ),
  [professionCodes.psychotherapist]: enAndFrContent(
    `Psychotherapy (psychological therapy or talking therapy) is the use of psychological methods, particularly when based on regular personal interaction, to help a person change behavior and overcome problems in desired ways. Psychotherapy aims to improve an individual's well-being and mental health, to resolve or mitigate troublesome behaviors, beliefs, compulsions, thoughts, or emotions, and to improve relationships and social skills.

  Different professionals can have a permit to practice psychotherapy managed by the Order of Psychologists of Quebec. To verify a practitioner’s registration, use their permit number found on their personal page.
  `,
    `La psychothérapie (thérapie psychologique ou thérapie orale) est l'utilisation de méthodes psychologiques, surtout lorsqu'elles sont basées sur une interaction personnelle régulière, pour aider une personne à changer leur comportement et à surmonter des problèmes de façon saine. La psychothérapie vise à améliorer le bien-être et la santé mentale d'un individu, à résoudre ou à atténuer des comportements, croyances, compulsions, pensées ou des émotions gênantes, et à améliorer les relations et les compétences sociales.

    Une variété de professionnels peuvent détenir un permis d'exercice de psychothérapie géré par l'Ordre des psychologues du Québec. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.
    `
  ),
  [professionCodes.other]: enAndFrContent(
    `Find practitioners doing other mental health work such as traditional therapies and body work.`,
    `Trouvez d'autres professionnels de la santé mentale dans les sphères divers tel que les thérapies traditionnelles et la thérapie alternative.`
  ),
  [professionCodes.psychoeducator]: enAndFrContent(
    `Psychoeducators provide evaluation, counselling, preventive action and preventive rehabilitation to people who have psychosocial adjustment difficulty in order to promote their independence and to resolve or prevent conflict.
  To achieve this, psychoeducators assess needs and establish plans and strategies, in addition to organizing and facilitating activities. They are committed to creating a climate of trust and to consider the strengths, limitations and vulnerabilities of people in order to provide assistance that promotes both social integration and learning new skills and behaviours.
  All psychoeducators are part of the Order of Psychoeducators of Quebec. To verify a practitioner’s registration, use their permit number found on their personal page.
  `,
    `Les psychoéducateurs fournissent des évaluations, des conseils, des actions préventives et des efforts de réadaptation préventives aux personnes qui ont des difficultés d'adaptation psychosociale afin de promouvoir leur indépendance et de résoudre ou de prévenir des conflits.
    Pour y parvenir, les psychoéducateurs évaluent les besoins et établissent des plans et des stratégies, en plus d'organiser et d'animer des activités. Ils sont engagés à créer un climat de confiance et à prendre en compte les forces, les limites et les vulnérabilités des personnes afin de fournir une assistance qui favorise l'intégration sociale, l'apprentissage de nouvelles compétences et de nouveaux comportements.
    Tous les psychoéducateurs font partie de l'Ordre des psychoéducateurs du Québec. Pour vérifier l'inscription d'un praticien, utilisez son numéro de permis qui se trouve sur leur page personnelle.
    `
  ),
  [professionCodes.creative]: enAndFrContent(
    `Therapeutic approaches such as art therapy, music therapy, drama therapy and movement therapy practiced by licensed professionals that use art and creativity as a means to support a balanced mental health.`,
    `Des approches thérapeutiques telles que l'art-thérapie, la musicothérapie, la dramathérapie et la danse-thérapie pratiquées par des professionnels agréés qui utilisent l'art et la créativité pour soutenir une santé mentale équilibrée.`
  ),
};

//these are utilities to use the codes to generate titles etc

//this replaces dashes with spaces, and capitalises just the first letter of the first word
//used in different parts of site ui
const toSentenceCase = (professionCode) => {
  const sentence = professionCode.split("-").join(" ");
  return capitaliseFirstLetter(sentence);
};

//this replaces dashes with spaces and capitalises the first letter of all words
//used in filter page titles
//maybe could use sentence case in filter page titles too?
const toPageTitleCase = (providerType) =>
  providerType.split("-").map(capitaliseFirstLetter).join(" ");

const capitaliseFirstLetter = (inputString) =>
  `${inputString[0].toUpperCase()}${inputString.slice(1)}`;

export {
  professionCodes,
  staticProfessionTitle,
  staticProfessionDescription,
  toSentenceCase,
  toPageTitleCase,
  capitaliseFirstLetter,
};
