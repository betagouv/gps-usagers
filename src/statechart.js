const statechart = {
  initial: "start",
  states: {
    start: {
      on: {
        RSA: "rsa",
        HOUSING: "housingSelection",
        HANDICAPPED: "handicappedSelection",
        SENIORS: "seniorsSelection"
      },
      onEntry: "start"
    },
    // RSA
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
    // HOUSING
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
    // HANDICAPPED
    handicappedSelection: {
      on: {
        BACK: "start",
        INFO_HANDICAPPED_INFOS: "infoHandicappedInfos",
        HANDICAPPED_REQUEST: "handicappedRequest",
        HANDICAPPED_TRACKING_REQUEST: "handicappedTrackingRequest",
        HANDICAPPED_PAYMENT: "handicappedPayment",
        HANDICAPPED_FAMILY_HOME: "infoSeniorsTeleassistance",
        HANDICAPPED_TRANSPORT: "infoSeniorsSuccession",
        INFO_HANDICAPPED_FINANCIAL: "infoHandicappedFinancial"
      },
      onEntry: "handicappedSelection"
    },
    handicappedRequest: {
      on: {
        BACK: "handicappedSelection",
        INFO_HANDICAPPED_REQUEST_FORM: "infoHandicappedRequestForm",
        INFO_HANDICAPPED_REQUEST_HELP: "infoHandicappedRequestHelp"
      },
      onEntry: "handicappedRequest"
    },
    handicappedTrackingRequest: {
      on: {
        BACK: "handicappedSelection",
        INFO_HANDICAPPED_TRACKING_REQUEST: "infoHandicappedTrackingRequest",
        HANDICAPPED_TRACKING_REQUEST_HELP: "handicappedTrackingRequestHelp",
        INFO_HANDICAPPED_TRACKING_REQUEST_FINANCIAL:
          "infoHandicappedTrackingRequestFinancial"
      },
      onEntry: "handicappedTrackingRequest"
    },
    handicappedTrackingRequestHelp: {
      on: {
        BACK: "handicappedTrackingRequest",
        INFO_HANDICAPPED_TRACKING_REQUEST_HELP_FILE:
          "infoHandicappedTrackingRequestHelpFile",
        INFO_HANDICAPPED_TRACKING_REQUEST_HELP_ONLINE:
          "infoHandicappedTrackingRequestHelpOnline"
      },
      onEntry: "handicappedTrackingRequestHelp"
    },
    handicappedPayment: {
      on: {
        BACK: "handicappedSelection",
        HANDICAPPED_PAYMENT_PCH: "handicappedPaymentPch",
        HANDICAPPED_PAYMENT_THIRD_PARTY: "handicappedPaymentThirdParty",
        HANDICAPPED_PAYMENT_AAH: "infoHandicappedTrackingRequestHelpFile",
        HANDICAPPED_PAYMENT_AAEH: "infoHandicappedTrackingRequestHelpFile"
      },
      onEntry: "handicappedPayment"
    },
    handicappedPaymentPch: {
      on: {
        BACK: "handicappedPayment",
        HANDICAPPED_PAYMENT_AAH: "infoHandicappedTrackingRequestHelpFile",
        HANDICAPPED_PAYMENT_AAEH: "infoHandicappedTrackingRequestHelpFile"
      },
      onEntry: "handicappedPaymentPch"
    },
    handicappedPaymentThirdParty: {
      on: {
        BACK: "handicappedPayment",
        HANDICAPPED_PAYMENT_AAH: "infoHandicappedTrackingRequestHelpFile",
        HANDICAPPED_PAYMENT_AAEH: "infoHandicappedTrackingRequestHelpFile"
      },
      onEntry: "handicappedPaymentThirdParty"
    },
    // FINAL HANDICAPPED
    infoHandicappedInfos: {
      on: { BACK: "handicappedSelection" },
      onEntry: "infoHandicappedInfos"
    },
    infoHandicappedRequestForm: {
      on: { BACK: "handicappedRequest" },
      onEntry: "infoHandicappedRequestForm"
    },
    infoHandicappedRequestHelp: {
      on: { BACK: "handicappedRequest" },
      onEntry: "infoHandicappedRequestHelp"
    },
    infoHandicappedTrackingRequestReceive: {
      on: { BACK: "handicappedTrackingRequest" },
      onEntry: "infoHandicappedTrackingRequestReceive"
    },
    infoHandicappedTrackingRequestComplete: {
      on: { BACK: "handicappedTrackingRequest" },
      onEntry: "infoHandicappedTrackingRequestComplete"
    },
    infoHandicappedTrackingRequestFinancial: {
      on: { BACK: "handicappedTrackingRequest" },
      onEntry: "infoHandicappedTrackingRequestFinancial"
    },
    infoHandicappedTrackingRequestHelpFile: {
      on: { BACK: "handicappedTrackingRequestHelp" },
      onEntry: "infoHandicappedTrackingRequestHelpFile"
    },
    infoHandicappedTrackingRequestHelpOnline: {
      on: { BACK: "handicappedTrackingRequestHelp" },
      onEntry: "infoHandicappedTrackingRequestHelpOnline"
    },
    infoHandicappedFinancial: {
      on: { BACK: "handicappedSelection" },
      onEntry: "infoHandicappedFinancial"
    },
    infoHandicappedTrackingRequest: {
      on: { BACK: "handicappedTrackingRequest" },
      onEntry: "infoHandicappedTrackingRequest"
    },
    // SENIORS
    seniorsSelection: {
      on: {
        BACK: "start",
        SENIORS_HOMECARE_SERVICES: "seniorsHomecareServices",
        SENIORS_AUTONOMY: "seniorsAutonomy",
        SENIORS_FAMILY_HOME: "seniorsFamilyHome",
        INFO_SENIORS_HOME_HELP: "infoSeniorsHomeHelp",
        SENIORS_TELEASSISTANCE: "infoSeniorsTeleassistance",
        SENIORS_SUCCESSION: "infoSeniorsSuccession",
        SENIORS_MAINTENANCE_OBLIGATION: "infoSeniorsMaintenanceObligation",
        SENIORS_EHPAD: "seniorsEHPAD",
        SENIORS_REPORTING: "seniorsReporting",
        INFO_SENIORS_FINANCIERS_MEETING: "infoSeniorsFinanciersMeeting"
      },
      onEntry: "seniorsSelection"
    },
    seniorsHomecareServices: {
      on: {
        BACK: "seniorsSelection",
        INFO_SENIORS_HOMECARE_SERVICES_ASK: "infoSeniorHomecareServiceAsk",
        INFO_SENIORS_HOMECARE_SERVICES_DIRECTORY:
          "infoSeniorHomecareServiceDirectory"
      },
      onEntry: "seniorsHomecareServices"
    },
    seniorsAutonomy: {
      on: {
        BACK: "seniorsSelection",
        INFO_SENIORS_APA: "infoSeniorsApa",
        INFO_SENIORS_APA_REQUEST: "infoSeniorsApaRequest",
        INFO_SENIORS_APA_HELP_REQUEST: "infoSeniorsApaHelpRequest",
        INFO_SENIORS_APA_HELP_ONLINE: "infoSeniorsApaHelpOnline"
      },
      onEntry: "seniorsAutonomy"
    },
    seniorsFamilyHome: {
      on: {
        BACK: "seniorsSelection",
        INFO_SENIORS_FAMILY_HOME_REQUEST: "infoSeniorsFamilyHomeRequest",
        INFO_SENIORS_FAMILY_HOME_TRACKING: "infoSeniorsFamilyHomeTracking"
      },
      onEntry: "seniorsFamilyHome"
    },
    seniorsEHPAD: {
      on: {
        BACK: "seniorsSelection",
        INFO_SENIORS_EHPAD_LIST: "infoSeniorsEhpadList",
        INFO_SENIORS_EHPAD_REQUEST: "infoSeniorsEhpadRequest",
        INFO_SENIORS_EHPAD_HELP_REQUEST: "infoSeniorsEhpadHelpRequest",
        INFO_SENIORS_EHPAD_HELP_ONLINE: "infoSeniorsEhpadHelpOnline"
      },
      onEntry: "seniorsEHPAD"
    },
    seniorsReporting: {
      on: {
        BACK: "seniorsSelection",
        INFO_SENIORS_REPORTING_INFO: "infoSeniorsReportingInfo",
        SENIORS_REPORTING_REQUEST: "seniorsReportingRequest"
      },
      onEntry: "seniorsReporting"
    },
    seniorsReportingRequest: {
      on: {
        BACK: "seniorsReporting",
        INFO_SENIORS_REPORTING_REQUEST_PERSONAL:
          "infoSeniorsReportingRequestPersonal",
        INFO_SENIORS_REPORTING_REQUEST_PRO: "infoSeniorsReportingRequestPro"
      },
      onEntry: "seniorsReportingRequest"
    },
    // FINAL SENIOR
    infoSeniorHomecareServiceAsk: {
      on: { BACK: "seniorsHomecareServices" },
      onEntry: "infoSeniorHomecareServiceAsk"
    },
    infoSeniorsApa: {
      on: { BACK: "seniorsAutonomy" },
      onEntry: "infoSeniorsApa"
    },
    infoSeniorsApaRequest: {
      on: { BACK: "seniorsAutonomy" },
      onEntry: "infoSeniorsApaRequest"
    },
    infoSeniorsApaHelpRequest: {
      on: { BACK: "seniorsAutonomy" },
      onEntry: "infoSeniorsApaHelpRequest"
    },
    infoSeniorsApaHelpOnline: {
      on: { BACK: "seniorsAutonomy" },
      onEntry: "infoSeniorsApaHelpOnline"
    },
    infoSeniorsFamilyHomeRequest: {
      on: { BACK: "seniorsFamilyHome" },
      onEntry: "infoSeniorsFamilyHomeRequest"
    },
    infoSeniorsFamilyHomeTracking: {
      on: { BACK: "seniorsFamilyHome" },
      onEntry: "infoSeniorsFamilyHomeTracking"
    },
    infoSeniorHomecareServiceDirectory: {
      on: { BACK: "seniorsHomecareServices" },
      onEntry: "infoSeniorHomecareServiceDirectory"
    },
    infoSeniorsHomeHelp: {
      on: { BACK: "seniorsSelection" },
      onEntry: "infoSeniorsHomeHelp"
    },
    infoSeniorsTeleassistance: {
      on: { BACK: "seniorsSelection" },
      onEntry: "infoSeniorsTeleassistance"
    },
    infoSeniorsSuccession: {
      on: { BACK: "seniorsSelection" },
      onEntry: "infoSeniorsSuccession"
    },
    infoSeniorsMaintenanceObligation: {
      on: { BACK: "seniorsSelection" },
      onEntry: "infoSeniorsMaintenanceObligation"
    },
    infoSeniorsEhpadList: {
      on: { BACK: "seniorsEHPAD" },
      onEntry: "infoSeniorsEhpadList"
    },
    infoSeniorsEhpadRequest: {
      on: { BACK: "seniorsEHPAD" },
      onEntry: "infoSeniorsEhpadRequest"
    },
    infoSeniorsEhpadHelpRequest: {
      on: { BACK: "seniorsEHPAD" },
      onEntry: "infoSeniorsEhpadHelpRequest"
    },
    infoSeniorsEhpadHelpOnline: {
      on: { BACK: "seniorsEHPAD" },
      onEntry: "infoSeniorsEhpadHelpOnline"
    },
    infoSeniorsReportingInfo: {
      on: { BACK: "seniorsReporting" },
      onEntry: "infoSeniorsReportingInfo"
    },
    infoSeniorsReportingRequestPersonal: {
      on: { BACK: "seniorsReportingRequest" },
      onEntry: "infoSeniorsReportingRequestPersonal"
    },
    infoSeniorsReportingRequestPro: {
      on: { BACK: "seniorsReportingRequest" },
      onEntry: "infoSeniorsReportingRequestPro"
    },
    infoSeniorsFinanciersMeeting: {
      on: { BACK: "seniorsSelection" },
      onEntry: "infoSeniorsFinanciersMeeting"
    },
    // FINAL HOUSING
    infoHousingSearch: {
      on: { BACK: "housingSelection" },
      onEntry: "infoHousingSearch"
    },
    infoHousingAssistance: {
      on: { BACK: "housingAssistance" },
      onEntry: "infoHousingAssistance"
    },
    infoHousingAssistanceRequest: {
      on: {
        BACK: "housingAssistance",
        INFO_HOUSING_ASSISTANCE_REQUEST_CMS: "infoHousingAssistanceRequestCms"
      },
      onEntry: "infoHousingAssistanceRequest"
    },
    infoHousingAssistanceRequestCms: {
      on: {
        BACK: "infoHousingAssistanceRequest"
      },
      onEntry: "infoHousingAssistanceRequestCms"
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
      on: {
        BACK: "housingRent",
        INFO_HOUSING_RENT_REQUEST_CMS: "infoHousingRentRequestCms"
      },
      onEntry: "infoHousingRentRequest"
    },
    infoHousingRentRequestCms: {
      on: { BACK: "infoHousingRentRequest" },
      onEntry: "infoHousingRentRequestCms"
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
        BACK: "housingAcquisitionSelection"
      },
      onEntry: "infoHousingAcquisitionHelp"
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
