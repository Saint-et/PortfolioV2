// User
import imgUser from '../assets/IMG_5359-FR_Passeport-35x45_mm.jpg';
//___
// Realisation
import hotSauce from '../assets/images/hot-sauce.jpg';
import kanapImg from '../assets/images/kanap.png';
import Ohmyfood from '../assets/images/seo.png';
import Groupomania from '../assets/images/groupomania.png';
import ChouetteAgence from '../assets/images/MetaImageComp.jpg';
import ChouetteAgence2 from '../assets/images/logo-google-analytics-e1537095603731.png';
import ChouetteAgence3 from '../assets/images/google-analytics-g4-dashboard.webp';
//___
// hotSauce
import hotSauce1 from '../assets/img_hotSauce/home.png';
import hotSauce2 from '../assets/img_hotSauce/produit.png';
import hotSauce3 from '../assets/img_hotSauce/form.png';
//___
// kanapImg
import kanapImg1 from '../assets/kanapImg/kanap1.png';
import kanapImg2 from '../assets/kanapImg/kanap2.png';
import kanapImg3 from '../assets/kanapImg/kanap3.png';
//___
// Ohmyfood
import Ohmyfood1 from '../assets/Ohmyfood/Ohmyfood1.png';
import Ohmyfood2 from '../assets/Ohmyfood/Ohmyfood2.png';
//___
// Groupomania
import Groupomania1 from '../assets/Groupomania/Groupomania1.png';
import Groupomania2 from '../assets/Groupomania/Groupomania2.png';
import Groupomania3 from '../assets/Groupomania/Groupomania3.png';
//___
// Realisation_Personnel
import Eventv1 from '../assets/images/logo_eventv1.png';
import Eventv2 from '../assets/images/vieux-fond-noir-texture-grunge-fond-ecran-sombre-tableau-noir-tableau-noir-mur-salle.jpg';
import EventvmobileImg1 from '../assets/images/logo_eventv1Mobile.png';
//___
// Eventv1
import EventvImg1 from '../assets/eventv/eventv3.png';
import EventvImg2 from '../assets/eventv/eventv2.png';
import EventvImg3 from '../assets/eventv/eventv1.png';
//___
// Eventv1Mobile
import Eventvmobile1 from '../assets/eventv/eventmobile.jpg';
//___
// Eventv2
import EventvImg4 from '../assets/eventv/ezgif-5-cee98ce57f.gif';
import EventvImg5 from '../assets/eventv/ezgif-5-610e489276.gif';
import EventvImg6 from '../assets/eventv/EventvImg1.png';
//___
// Experience
import html5 from '../assets/images/html5-icon-1.png';
import css from '../assets/images/CSS.png';
import Js from '../assets/images/Js.png';
import Sass from '../assets/images/Sass.svg.png';
import Git from '../assets/images/Git.png';
import React_js from '../assets/images/React-icon.svg.png';
import Node_js from '../assets/images/nodejs.png';
import Mongo from '../assets/images/Mongodb-Transparent.png';
import Sql from '../assets/images/mysql.png';
import Sequelize from '../assets/images/Sequelize.png';
import Io from '../assets/images/Socket_io.png';
//___
// User
export const user = {
    firstname: 'Meddy',
    lastname: 'Saint-etienne',
    image: imgUser,
    job: 'Full stack web developer',
    presentation: `Je suis passionné par les nouvelles technologies depuis mon adolescence. J’aime créer, découvrir de nouvelles choses.
    J’ai découvert le développement web après mon BTS en froid et climatisation grâce à une formation avec Openclassroom j’ai donc décidé de m’orienter vers le développement web
    où j’ai pu apprendre à concevoir et à maintenir des applications Web que ce soit frontend, backend, base de données et par la suite j’ai continué mon apprentissage autodidacte.`,
    telephone: '0680709681',
    email: 'meddysaintetienne@gmail.com'
}
//___


// Realisation
export const Data_Realisation = [
    {
        title: 'Hot-sauce',
        image: hotSauce,
        data: `Hot sauce est un projet réalisé durant ma formation.
        L’objectif était de créer une API sécurisé pour un site où il est possible de partager et noté les sauces des autre utilisateurs.`,
        image1: hotSauce1,
        image2: hotSauce2,
        image3: hotSauce3,
        github: 'https://github.com/Saint-et/Web-Developer-P6-master.git'
    },
    {
        title: 'Kanap',
        image: kanapImg,
        data: `kanap est un projet réalisé durant ma formation. 
        L’objectif était de créer le frontend en Javascript pour un site e-commerce qui vend des canapés avec les fonctionnalités suivantes: 
        Page d'acceuil avec l'enssemble des produit, Page produit avec sélecteur de quantité, couleurs...`,
        image1: kanapImg1,
        image2: kanapImg2,
        image3: kanapImg3,
        github: 'https://github.com/Saint-et/P5-Dev-Web-Kanap-master.git'
    },
    {
        title: 'Ohmyfood',
        image: Ohmyfood,
        data: `Ohmyfood est un projet réalisé durant ma formation. L’objectif était de créer le frontend avec des animation modern.`,
        image1: Ohmyfood1,
        image2: Ohmyfood2,
        image3: null,
        github: 'https://github.com/Saint-et/MeddySaint-etienne_3_03122021.git'
    },
    {
        title: 'Chouette agence',
        image: ChouetteAgence,
        image2: ChouetteAgence2,
        image3: ChouetteAgence3,
        data: `Chouette agence est un projet réalisé lors de ma formation.
        Le but était d’optimiser un site déjà existant et d'améliorer le référencement pour augmenter sa visibilité sur le moteur de recherche.`,
        github: 'https://github.com/Saint-et/Starting-website.git'
    },
    {
        title: 'Groupomania',
        image: Groupomania,
        data: `Groupomania est l’un des projets qui a été réalisé à l’issue de la formation afin de la valider.
        L’objectif était de créer un réseau social de A à Z pour une entreprise avec les fonctionnalités suivantes:
        Connexion / inscription, Compte administrateur, forum de discution, gestion de profile...`,
        image1: Groupomania1,
        image2: Groupomania2,
        image3: Groupomania3,
        github: 'https://github.com/Saint-et/Groupomania-P7.git'
    }
]
//___

// Realisation_Personnel
export const Data_Realisation_Personnel = [
    {
        title: 'Event-v1',
        image: Eventv1,
        data: `J’ai commencé le projet suite à quelque event-V qui ont connu le même sort que celui-ci afin de pouvoir renforcer mes connaissances,
        En tant que joueur de MMO, je voulais créer une application qui pourrait aider certains joueurs, mais le projet a été abandonné car j’ai appris de nouvelles façons de coder et 
        nouveau logiciel le code est devenu de moins en moins maintenable.`,
        image1: EventvImg1,
        image2: EventvImg2,
        image3: EventvImg3
    },
    {
        title: 'Event-v1 Mobile',
        image: EventvmobileImg1,
        data: `J’ai commencé à m’intéresser à react native pour pouvoir faire une application mobile alors j’ai connecté mon application mobile sur le backend du site pour compléter mon site
         dans un but de m'entraînner a utilisé mes outils.`,
        image1: Eventvmobile1,
        image2: null,
        image3: null
    },
    {
        title: 'Event-v2',
        image: Eventv2,
        data: `J’ai commencé le projet un peu après event-V1 changeant complètement de event-V1 je voulais créer une application de style e-commerce qui est toujours en cours... 
        Côté backend j'ai utilisé nodeJs pour les requête, socket.io pour les message instantané et sequelize session pour maintenir la connection d'un utilisateur.`,
        image1: EventvImg4,
        image2: EventvImg5,
        image3: EventvImg6
    }
]
//___

// Experience
export const Experience = [
    {
        title: 'HTML',
        image: html5,
        progressBar: `80`,
        color: '#ff8800a4',
        textColor: '#fffff'
    },
    {
        title: 'CSS',
        image: css,
        progressBar: `80`,
        color: '#00a2ff9c',
        textColor: '#fffff'
    },
    {
        title: 'Javascript',
        image: Js,
        progressBar: `80`,
        color: '#fbff00a4',
        textColor: '#fffff'
    },
    {
        title: 'Sass',
        image: Sass,
        progressBar: `65`,
        color: '#ff00d48f',
        textColor: '#fffff'
    },
    {
        title: 'Github',
        image: Git,
        progressBar: `60`,
        color: '#2e2e2ea9',
        textColor: '#fffff'
    },
    {
        title: 'React js',
        image: React_js,
        progressBar: `60`,
        color: '#00eeffb7',
        textColor: '#fffff'
    },
    {
        title: 'Node js',
        image: Node_js,
        progressBar: `60`,
        color: '#00b618a1',
        textColor: '#fffff'
    },
    {
        title: 'Mongo db',
        image: Mongo,
        progressBar: `60`,
        color: '#00b618a1',
        textColor: '#fffff'
    },
    {
        title: 'MySQL',
        image: Sql,
        progressBar: `60`,
        color: '#000cb993',
        textColor: '#fffff'
    },
    {
        title: 'Sequelize',
        image: Sequelize,
        progressBar: `60`,
        color: '#00b3e0ab',
        textColor: '#fffff'
    },
    {
        title: 'Socket.io',
        image: Io,
        progressBar: `40`,
        color: '#2e2e2ea9',
        textColor: '#fffff'
    }

]
//___