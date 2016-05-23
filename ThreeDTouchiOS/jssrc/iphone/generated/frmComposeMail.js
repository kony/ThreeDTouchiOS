//Form JS File
function addWidgetsfrmComposeMail() {
    var browser1971220793539 = new kony.ui.Browser({
        "id": "browser1971220793539",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "text": "Browser",
        "isVisible": true,
        "htmlString": "<head>\n <style>\n tr {\n height:40px;\n }\n</style>\n</head>\n\n<table>\n \n <tr>\n <td>To: </td>\n <td><input type=\"text\" name=\"to\"></td>\n </tr>\n <tr>\n <td>Cc: </td>\n <td><input type=\"text\" name=\"Cc\"></td>\n </tr>\n <tr>\n <td>Subject:</td>\n <td><input type=\"text\" name=\"Subject\"></td>\n </tr>\n <tr>\n <td>Body: </td>\n <td><textarea name=\"textarea\" style=\"width:250px;height:150px;\"></textarea></td>\n </tr>\n \n</table>\n\n</br>\n</br>\n</br>\n\n<button type=\"button\" align=\"center\">Send</button>\n\n",
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    frmComposeMail.add(
    browser1971220793539);
};

function frmComposeMailGlobals() {
    var MenuId = [];
    frmComposeMail = new kony.ui.Form2({
        "id": "frmComposeMail",
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
        "addWidgets": addWidgetsfrmComposeMail
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
    frmComposeMail.setDefaultUnit(kony.flex.DP);
};