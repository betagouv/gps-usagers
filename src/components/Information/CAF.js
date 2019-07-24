import React from "react";
import { Back, Feedback } from "../../components";
import {
  RSA,
  RECIPIENT_RSA,
  RSA_LETTER,
  RSA_SITUATION,
  INFO_CAF
} from "../BreadCrumps";
import "./Styles.css";

const InfoCAF = ({ transition, machineState }) => {
  const {
    history: { value }
  } = machineState;
  let breadCrumps;
  if (value === "rsaLetter") {
    breadCrumps = [RSA, RECIPIENT_RSA, RSA_LETTER, INFO_CAF];
  } else if (value === "rsaSituation") {
    breadCrumps = [RSA, RECIPIENT_RSA, RSA_SITUATION, INFO_CAF];
  } else {
    breadCrumps = [RSA, RECIPIENT_RSA, INFO_CAF];
  }
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={breadCrumps}
        />
      </div>
      <div className="content final">
        <h1>Contactez la Caisse d'Allocations Familiales (CAF)</h1>
        Rendez-vous sur votre compte CAF :
        <p>
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JjgpR-VnpOfBHZNpGNekrFFun5UUWpaalFqkV5pEVA4o6SkwErVQNWgvLxcLzkxTS-tSNUAm-qM_OIS_QiEKv2C3AgD3aikynJHRUUAO_ejAA!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature",
                "_blank"
              )
            }
          >
            Accéder à votre compte
          </button>
        </p>
        <br />
        <p>
          Si vous avez oublié votre numéro d'allocataire ou votre mot de passe,
          suivez les instructions sur{" "}
          <a
            href="http://www.caf.fr/allocataires/aide/utiliser-mon-compte"
            rel="noopener noreferrer"
            target="_blank"
          >
            cette page
          </a>
        </p>
        <p>
          Pour joindre la CAF par téléphone, appelez le numéro suivant :
          <h2 className="phone">
            <a href="tel:+33810251410" target="_top">
              0810 25 14 10
            </a>{" "}
            <span>(6cts / minute + prix de l'appel)</span>
          </h2>
        </p>
        <p>
          Vous pouvez également retrouver la liste des points d'accueil CAF sur
          cette{" "}
          <a
            href="https://www.caf.fr/allocataires/caf-du-calvados/points-d-accueil"
            rel="noopener noreferrer"
            target="_blank"
          >
            cette page
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default InfoCAF;
