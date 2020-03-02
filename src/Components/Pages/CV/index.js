import React, { useState } from "react";
import RoundedBox from "../../usefull/Rounded/RoundedBox";
import Title from "../../../Components/usefull/Title";
import Theme from "../../../Ressources/Theme";

const RBcv = ({ titre, children }) => {
  const [extend, setExtend] = useState(false);
  let fs = "0px";
  if (extend) fs = "inherit";
  return (
    <RoundedBox
      leftbar={Theme.Color.RoundedBoxSide}
      onClick={() => {
        setExtend(!extend);
      }}
      cursor={"pointer"}
    >
      <Title h3>{titre}</Title>
      <div style={{ fontSize: fs }}>{extend ? children : ""}</div>
    </RoundedBox>
  );
};

const CV = () => {
  return (
    <>
      <div style={{ width: "1000px" }}></div>
      <RoundedBox>
        <Title text={"Utiles"} textAlign="center" h2 />
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: "1" }}>
            <RBcv titre="Mon objectif">
              A long terme je souhaite travailler dans les sciences de la
              donnée, aussi je cherche un stage à temps plein dans les domaines
              : Data Science, Machine Learning, I.A… d’une durée de 14 semaines
              minimum, au sein d’une entreprise compris entre le 25 mai et 6
              septembre 2020. Sinon une alternance a partir de septembre pour 1
              an.
            </RBcv>
            <RBcv titre="Télécharger mon CV">
              <a
                href="../../../../public/Files/CVAlexandrePachoud.pdf"
                download=""
              >
                Download
              </a>
            </RBcv>
            <a href="https://github.com/AlexandrePachoud" target="blank">
              <RBcv titre="Mon Git Hub"></RBcv>
            </a>
          </div>
          <div
            style={{ flexBasis: "0", width: "min-content", border: "solid" }}
          >
            <img
              alt="photo_de_CV"
              src="../../../Ressources/img/photoCV.png"
            ></img>
          </div>
        </div>
      </RoundedBox>
      <RoundedBox>
        <Title text={"Experience Professionnelles"} textAlign="center" h2 />
        <RBcv titre="DÉVELOPPEUR ReactJS POSTE - B. NUMÉRIQUE ÉTÉ 2019">
          <p>
            Durant ce stage, j’ai intégré une équipe de 4 développeurs, dans un
            projet agile, qui a pour objectif de créer une box Relationnelle sur
            la boutique en ligne. J’y ai découvert le <b>ReactJS</b> (et
            certaines librairies), Git, et les principes des{" "}
            <b>projets en agile</b> (Scrum).
          </p>
        </RBcv>

        <RBcv titre=" ASSISTANT CREDIT CONTROLEUR • DAIKIN • AOUT 2018 ">
          <p>
            Satisfait de mon travail de l’année précédente, la société Daikin
            m’a employé dans le service crédit contrôle pour assister l’équipe
            dans l’augmentation d’activité saisonnière. Manipulation de{" "}
            <b>SAP, Excel</b>…
          </p>
        </RBcv>
        <RBcv titre=" ASSISTANT COMPTABLE • DAIKIN • AOUT 2017">
          <p>
            Première expérience professionnelle dans une grande entreprise, ma
            mission était de traiter le courrier de la comptabilité : facture,
            traites, chèques et comptabiliser les mouvements dans la base de
            données SAP.
          </p>
        </RBcv>
      </RoundedBox>
      <RoundedBox>
        <Title text={" FORMATIONS & DIPLOMES "} textAlign="center" h2 />
        <RBcv titre=" MASTER MIAGE • 2019 - 2021 • UNIVERSITÉ PARIS DAUPHINE LICENCE ">
          <p>
            En cours de formation pour obtenir un master en Méthodes
            Informatiques Appliqués à la Gestion d’Entreprise. J’y apprends dans
            l’informatique :{" "}
            <b>
              le Machine Learning, l’Intelligence Artificielle, l’optimisation
              combinatoire, la programmation objet avancée
            </b>
            . Mais aussi la communication, la sociologie des organisation,
            l’analyse financière, et les Système d’informations.
          </p>
        </RBcv>
        <RBcv titre=" INFORMATIQUE DES ORGANISATIONS• 2016-2019 • UNIVERSITÉ PARIS DAUPHINE ">
          <p>
            Analyse de données, programmation en <b>Unix, Java, C, python.</b>
            <br />
            Réalisation de projets en équipes de 2, un algorithme de
            recommandation de films, simulation d’un processeur. Cette licence
            m’a donné une formation solide en informatique, m’a fourni des
            outils théoriques me permettant d’analyser les systèmes complexes,
            ainsi que des compétences dans le domaine de la gestion des
            entreprises.
          </p>
        </RBcv>
      </RoundedBox>
      <RoundedBox>
        <Title text="Loisirs" h2 textAlign="center"></Title>
        <RBcv titre="Plongée">
          Plongée sous-marine niveau 1, 17 plongées à mon actif,
        </RBcv>
        <RBcv titre="Poker">Poker, participation à des tournois</RBcv>
      </RoundedBox>
      <RoundedBox>
        <Title text="Compétences" h2 textAlign="center"></Title>
        <RBcv titre="langage informatique">
          Java (avancé), C, python, R, HTML, ReactJS.
        </RBcv>
        <RBcv titre="Langues">Bon niveau d’anglais </RBcv>
        <RBcv titre="Logiciels">Très bon niveau PowerPoint, Excel, Access</RBcv>
      </RoundedBox>
    </>
  );
};
export default CV;
