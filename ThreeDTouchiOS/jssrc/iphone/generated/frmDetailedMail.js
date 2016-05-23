//Form JS File
function addWidgetsfrmDetailedMail() {
    var browser1971220793534 = new kony.ui.Browser({
        "id": "browser1971220793534",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "text": "Browser",
        "isVisible": true,
        "htmlString": "<h3>Google</h3>\n\n<p>To:sreenikony@gmail.com &nbsp; more... &nbsp; &nbsp; &nbsp;<img alt=\"\" src=\"http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png\" style=\"width: 30px; height: 30px;\" /></p>\n\n<hr />\n<p>New sign-in from iPhone</p>\n\n<pre>\n<samp>15 March 2016 at 1:50 PM</samp></pre>\n\n<hr />\n<p>Your Google Account was just used to sign in on iPhone we donot recognize. If this was not you, you can review &nbsp;and remove the access to this device in My Account</p>\n\n<p><span style=\"line-height: 20.8px;\">Your Google Account was just used to sign in on iPhone we donot recognize. If this was not you, you can review &nbsp;and remove the access to this device in My Account</span></p>\n\n<p><span style=\"line-height: 20.8px;\">Your Google Account was just used to sign in on iPhone we donot recognize. If this was not you, you can review &nbsp;and remove the access to this device in My Account</span></p>\n\n<p><span style=\"line-height: 20.8px;\">Your Google Account was just used to sign in on iPhone we donot recognize. If this was not you, you can review &nbsp;and remove the access to this device in My Account</span></p>\n",
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    frmDetailedMail.add(
    browser1971220793534);
};

function frmDetailedMailGlobals() {
    var MenuId = [];
    frmDetailedMail = new kony.ui.Form2({
        "id": "frmDetailedMail",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmDetailedMail
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmDetailedMail.setDefaultUnit(kony.flex.DP);
};