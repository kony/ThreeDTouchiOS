//Template File
function initializesegTemplateMailList() {
    var lblDomain = new kony.ui.Label({
        "id": "lblDomain",
        "top": "2%",
        "left": "4%",
        "width": "100dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDate = new kony.ui.Label({
        "id": "lblDate",
        "top": "2%",
        "right": "0.0%",
        "width": "20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknDate"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainer19712207929 = new kony.ui.FlexContainer({
        "id": "flexContainer19712207929",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "40.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer19712207929.setDefaultUnit(kony.flex.DP)
    flexContainer19712207929.add(
    lblDomain, lblDate);
    var lblSubj = new kony.ui.Label({
        "id": "lblSubj",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknGrayfont"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainer19712207938 = new kony.ui.FlexContainer({
        "id": "flexContainer19712207938",
        "top": "40%",
        "left": "0dp",
        "width": "100%",
        "height": "20.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,44]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer19712207938.setDefaultUnit(kony.flex.DP)
    flexContainer19712207938.add(
    lblSubj);
    var lblLine1 = new kony.ui.Label({
        "id": "lblLine1",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "maxHeight": "98%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknmailunread"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexContainer197122079176 = new kony.ui.FlexContainer({
        "id": "flexContainer197122079176",
        "top": "60.0%",
        "left": "0dp",
        "width": "100%",
        "height": "40.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,67]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer197122079176.setDefaultUnit(kony.flex.DP)
    flexContainer197122079176.add(
    lblLine1);
    flexContainer19712207925 = new kony.ui.FlexContainer({
        "id": "flexContainer19712207925",
        "top": "0.0%",
        "left": "0dp",
        "width": "100%",
        "height": "25.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer19712207925.setDefaultUnit(kony.flex.DP)
    flexContainer19712207925.add(
    flexContainer19712207929, flexContainer19712207938, flexContainer197122079176);
};