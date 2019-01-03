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
        INFO_CAF: "infoCaf",
        INFO_CPAM: "infoCpam",
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
        RSA_GESTIONNAIRE: "rsaGestionnaire",
        INFO_CAF: "infoCaf",
        INFO_MSA: "infoMsa",
        BACK: "rsaSelection"
      },
      onEntry: "rsaLetter"
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
    infoCafOnline: {
      on: { BACK: "rsaLetter" },
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
