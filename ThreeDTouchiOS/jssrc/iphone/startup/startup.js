//startup.js file
function ThreeDTouchiOSpostappinit_seq0(params) {
    setQuickActionItems.call(this);
    setPreviewActionItems.call(this);
    registerForPeekAndPop.call(this);
};

function ThreeDTouchiOSappservice_seq0(params) {
    return processAppService(params);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "ThreeDTouchiOS",
    appName: "ThreeDTouchiOS",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.27.59",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "ThreeDTouchiOS",
    isMFApp: false,
    eventTypes: [],
    url: "https://kony-e2e-prod.konycloud.com/ThreeDTouchiOS/MWServlet",
    secureurl: "https://kony-e2e-prod.konycloud.com/ThreeDTouchiOS/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializesegTemplateMailList();
    frmComposeMailGlobals();
    frmDetailedMailGlobals();
    frmMailsListGlobals();
    frmReplyMailGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: ThreeDTouchiOSpostappinit_seq0,
        appservice: ThreeDTouchiOSappservice_seq0,
        showstartupform: function() {
            frmMailsList.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;