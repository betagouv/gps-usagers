import React from "react";
import Modal from "react-modal";
import "./Styles.css";

export const CMSModal = ({ onRequestClose, circo, cms, ...rest }) => (
  <Modal
    className="modal"
    overlayClassName="overlay"
    isOpen
    onRequestClose={onRequestClose}
    ariaHideApp={false}
    {...rest}
  >
    <div className="modalHeader">
      <div onClick={onRequestClose} className="modalClose" />
    </div>
    <div className="modalContainer">
      <div className="modalContent">
        <div>
          <div className="modalText">
            Vous pouvez joindre par téléphone ou vous déplacer dans la
            circonscription ou le centre médico-social le plus proche de chez
            vous :
          </div>
          <h3>{circo.title}</h3>
          <div className="address">
            <div style={{ display: "block" }}>{circo.name}</div>
            {circo.address}
            <br />
            {circo.bp ? `${circo.bp} - ` : ""}
            {circo.zipCode} {circo.city}
          </div>
          <div className="phone">
            <a href={`tel:${circo.phone}`} target="_top">
              {circo.phone}
            </a>
          </div>
        </div>
        <br />
        <h3>Centre médico-social</h3>
        <div className="flex">
          {cms.map(c => (
            <div key={c.name} className="cms">
              <div className="heading2">{c.name}</div>
              <div className="address">
                {c.address} <br />
                {c.zipCode} {c.city}
              </div>
              <div className="phone">
                <a href={`tel:${c.phone}`} target="_top">
                  {c.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="modalFooter" />
  </Modal>
);

export const GestionnaireModal = ({ onRequestClose, circo, cms, ...rest }) => (
  <Modal
    className="modal"
    overlayClassName="overlay"
    isOpen
    onRequestClose={onRequestClose}
    ariaHideApp={false}
    {...rest}
  >
    <div className="modalHeader">
      <div onClick={onRequestClose} className="modalClose" />
    </div>
    <div className="modalContent">
      <div>
        Veuillez contacter votre gestionnaire de dossier <br />
        au numéro de téléphone suivant :
      </div>
      <div className="phone">
        <a href={`tel:${circo}`} target="_top">
          {circo}
        </a>
      </div>
    </div>
    <div className="modalFooter" />
  </Modal>
);
