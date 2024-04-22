import React from 'react'

const AboutScreen = () => {
  return (
    <div className="container">
      <section className="home-section">
        <h2>Les créateurs</h2>
        <p>
          Les créateurs ont accès à une très grande base de données de contes,
          légendes et histoires. Cette base de données leur oijre un potentiel
          de création quasi infini de scénettes 3D. Ils peuvent ensuite
          soumettre leurs créations sur notre plateforme, pour qu’elles aient
          des chances d’être sélectionnées par un orateur qui voudra les
          intégrer dans son point d’interêt.
        </p>

        <p>
          Nous parlons donc ici de la mise en place d’un marketplace dans lequel
          les créateurs proposent leurs services qui pourront être acheté/loué
          par les orateurs.
        </p>
        <p>
          Au delà de ça il s’agit également de bâtir une communauté de
          créateurs, en favorisant les échanges de compétences et les
          collaborations entre eux. En eijet, un artiste 3D peut faire appel
          d’autres artistes, illustrateurs, ingénieurs du son, animateurs... de
          sortir à ofrir la meilleure expérience possible aux spectateurs, mais
          également à élargir son réseau.
        </p>
      </section>
      <div className="section">
        <h2>Les spectateurs</h2>
        <p>
          Les spectateurs ont accès aux Histoires géolocalisées mises en place
          sur les points d’interêts.
        </p>
        <p>
          Leur expérience est gratuite et ludique. En scannant un QR Code
          installé par un orateur, ils ont accès à une des scénettes 3D
          réalisées par les créateurs, intégrée dans leur environnement en
          réalitée augmentée. Cette scénette est accompagnée d’un récit audio et
          écrit de l’Histoire qu’elle illustre, permettant de compléter
          l’expérience culturelle ou touristique du spectateur. Si l’expérience
          lui a plu, il lui est possible de laisser un pourboire qui sera perçu
          par le créateur de la scénette.
        </p>
        <p>
          Pour les spectateurs étant déjà inscrits sur See Stories, le QR Code
          n’est plus nécessaire. Les expériences étant géolocalisées sur notre
          plateforme /application, nous pouvons envoyer une notification au
          spectateur lui indiquant qu’il est proche d’un point d’interêt. De la
          même manière, une carte interactive indique les expériences proches de
          l’utilisateur.
        </p>
        <p>
          Pour les passionnés, un abonnement permet d’avoir un répertoire des
          expériences en réalité augmentée du monde entier, les contes et
          histoires de toutes cultures en poche !
        </p>
      </div>
    </div>
  )
}

export default AboutScreen
