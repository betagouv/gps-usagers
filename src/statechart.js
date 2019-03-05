const statechart = {
  initial: "start",
  states: {
    start: {
      on: {
        RSA: "rsa",
        HOUSING: "housingSelection"
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
        INFO_CMS: "infoCms",
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
    housingSelection: {
      on: {
        BACK: "start",
        INFO_HOUSING_SEARCH: "infoHousingSearch",
        HOUSING_ASSISTANCE: "housingAssistance",
        HOUSING_RENT: "housingRent",
        HOUSING_ACQUISITION: "housingAcquisition",
        INFO_HOUSING_ENERGY_BILLS: "infoHousingEnergyBills"
      },
      onEntry: "housingSelection"
    },
    housingAssistance: {
      on: {
        BACK: "housingSelection",
        INFO_HOUSING_ASSISTANCE: "infoHousingAssistance",
        INFO_HOUSING_ASSISTANCE_REQUEST: "infoHousingAssistanceRequest",
        INFO_HOUSING_ASSISTANCE_HELP: "infoHousingAssistanceHelp"
      },
      onEntry: "housingAssistance"
    },
    housingRent: {
      on: {
        BACK: "housingSelection",
        INFO_HOUSING_RENT: "infoHousingRent",
        INFO_HOUSING_RENT_REQUEST: "infoHousingRentRequest",
        INFO_HOUSING_RENT_HELP: "infoHousingRentHelp"
      },
      onEntry: "housingRent"
    },
    housingAcquisition: {
      on: {
        BACK: "housingSelection",
        HOUSING_ACQUISITION_SELECTION: "housingAcquisitionSelection"
      },
      onEntry: "housingAcquisition"
    },
    housingAcquisitionSelection: {
      on: {
        BACK: "housingAcquisition",
        INFO_HOUSING_ACQUISITION_INFOS: "infoHousingAcquisitionInfos",
        INFO_HOUSING_ACQUISITION_HELP: "infoHousingAcquisitionHelp"
      },
      onEntry: "housingAcquisitionSelection"
    },
    infoHousingSearch: {
      on: { BACK: "housingSelection" },
      onEntry: "infoHousingSearch"
    },
    infoHousingAssistance: {
      on: { BACK: "housingAssistance" },
      onEntry: "infoHousingAssistance"
    },
    infoHousingAssistanceRequest: {
      on: { BACK: "housingAssistance" },
      onEntry: "infoHousingAssistanceRequest"
    },
    infoHousingAssistanceHelp: {
      on: { BACK: "housingAssistance" },
      onEntry: "infoHousingAssistanceHelp"
    },
    infoHousingRent: {
      on: { BACK: "housingRent" },
      onEntry: "infoHousingRent"
    },
    infoHousingRentRequest: {
      on: { BACK: "housingRent" },
      onEntry: "infoHousingRentRequest"
    },
    infoHousingRentHelp: {
      on: { BACK: "housingRent" },
      onEntry: "infoHousingRentHelp"
    },
    infoHousingAcquisitionInfos: {
      on: { BACK: "housingAcquisitionSelection" },
      onEntry: "infoHousingAcquisitionInfos"
    },
    infoHousingAcquisitionHelp: {
      on: {
        BACK: "housingAcquisitionSelection",
        INFO_HOUSING_ACQUISITION_HELP_CMS: "infoHousingAcquisitionHelpCms"
      },
      onEntry: "infoHousingAcquisitionHelp"
    },
    infoHousingAcquisitionHelpCms: {
      on: {
        BACK: "infoHousingAcquisitionHelp"
      },
      onEntry: "infoHousingAcquisitionHelpCms"
    },
    infoHousingEnergyBills: {
      on: { BACK: "housingSelection" },
      onEntry: "infoHousingEnergyBills"
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
    infoCms: {
      on: { BACK: "rsaSelection" },
      onEntry: "infoCms"
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
