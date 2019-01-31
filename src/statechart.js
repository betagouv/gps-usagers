const statechart = {
  initial: "start",
  states: {
    start: {
      on: {
        RSA: "rsa"
      },
      onEntry: "start"
    },
    rsa: {
      on: {
        RSA_TRUE: "rsaSelection",
        RSA_FALSE: "rsaOther",
        BACK: "start"
      },
      onEntry: "rsa"
    },
    rsaSelection: {
      on: {
        RSA_LETTER: "rsaLetter",
        RSA_CIRCONSCRIPTION: "rsaCirconscription",
        RSA_SITUATION: "rsaSituation",
        INFO_CPAM: "infoCpam",
        INFO_CAF: "infoCafRsaSelection",
        BACK: "rsa"
      },
      onEntry: "rsaSelection"
    },
    rsaOther: {
      on: {
        INFO_PE: "infoPe",
        INFO_EPN: "infoEpn",
        INFO_CAF_ONLINE: "infoCafOnline",
        INFO_ONLINE: "infoOnline",
        BACK: "rsa"
      },
      onEntry: "rsaOther"
    },
    rsaLetter: {
      on: {
        INFO_GESTIONNAIRE: "infoGestionnaire",
        INFO_CAF: "infoCaf",
        INFO_MSA: "infoMsa",
        BACK: "rsaSelection"
      },
      onEntry: "rsaLetter"
    },
    rsaSituation: {
      on: {
        INFO_GESTIONNAIRE: "infoGestionnaireRsaSituation",
        INFO_CAF: "infoCafRsaSituation",
        BACK: "rsaSelection"
      },
      onEntry: "rsaSituation"
    },
    rsaGestionnaire: {
      on: {
        BACK: "rsaLetter"
      },
      onEntry: "rsaGestionnaire"
    },
    rsaCirconscription: {
      on: {
        BACK: "rsaSelection"
      },
      onEntry: "rsaCirconscription"
    },
    infoCaf: {
      on: { BACK: "rsaLetter" },
      onEntry: "infoCaf"
    },
    infoCafRsaSelection: {
      on: { BACK: "rsaSelection" },
      onEntry: "infoCaf"
    },
    infoCafRsaSituation: {
      on: { BACK: "rsaSituation" },
      onEntry: "infoCaf"
    },
    infoGestionnaire: {
      on: { BACK: "rsaLetter" },
      onEntry: "infoGestionnaire"
    },
    infoGestionnaireRsaSituation: {
      on: { BACK: "rsaSituation" },
      onEntry: "infoGestionnaire"
    },
    infoCafOnline: {
      on: { BACK: "rsaOther" },
      onEntry: "infoCafOnline"
    },
    infoMsa: {
      on: { BACK: "rsaLetter" },
      onEntry: "infoMsa"
    },
    infoCpam: {
      on: { BACK: "rsaSelection" },
      onEntry: "infoCpam"
    },
    infoPe: {
      on: { BACK: "rsaOther" },
      onEntry: "infoPe"
    },
    infoEpn: {
      on: { BACK: "rsaOther" },
      onEntry: "infoEpn"
    },
    infoOnline: {
      on: { BACK: "rsaOther" },
      onEntry: "infoOnline"
    }
  }
};

export default statechart;
