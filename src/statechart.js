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
        RSA_FALSE: "start",
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
    infoMsa: {
      on: { BACK: "rsaLetter" },
      onEntry: "infoMsa"
    },
    infoCpam: {
      on: { BACK: "rsaSelection" },
      onEntry: "infoCpam"
    }
  }
};

export default statechart;
