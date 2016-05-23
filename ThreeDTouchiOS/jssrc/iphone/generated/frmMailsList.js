//Form JS File
function frmMailsList_frmMailsList_init_seq0(eventobject) {
    setMailsToSegment.call(this);
};

function frmMailsList_segMailList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    frmDetailedMail.show();
    changeSkinForTheItem(rowNumber, "sknmailread", true);
};

function addWidgetsfrmMailsList() {
    var segMailListbox = new kony.ui.FlexContainer({
        "id": "segMailListbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segMailList = new kony.ui.SegmentedUI2({
        "id": "segMailList",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "70.0%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblSubj": "lblSubj",
            "segTemplateMailList": "segTemplateMailList",
            "lblLine1": "lblLine1",
            "flexContainer19712207938": "flexContainer19712207938",
            "flexContainer19712207929": "flexContainer19712207929",
            "flexContainer197122079176": "flexContainer197122079176",
            "lblDate": "lblDate",
            "lblDomain": "lblDomain",
            "readflag": "readflag",
            "flexContainer19712207925": "flexContainer19712207925"
        },
        "data": [{
            "lblSubj": "New sign-in from iPhone",
            "lblLine1": "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account",
            "lblDate": "15/03/16",
            "lblDomain": "Google",
            "readflag": "false"
        }, {
            "lblSubj": "New sign-in from iPhone",
            "lblLine1": "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account",
            "lblDate": "14/03/16",
            "lblDomain": "Google",
            "readflag": "false"
        }, {
            "lblSubj": "New sign-in from iPhone",
            "lblLine1": "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account",
            "lblDate": "13/03/16",
            "lblDomain": "Google",
            "readflag": "false"
        }, {
            "lblSubj": "New sign-in from iPhone",
            "lblLine1": "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account",
            "lblDate": "12/03/16",
            "lblDomain": "Google",
            "readflag": "false"
        }],
        "Location": "[0,0]",
        "rowTemplate": flexContainer19712207925,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": frmMailsList_segMailList_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    segMailListbox.add();
    frmMailsList.add(
    segMailList);
};

function frmMailsListGlobals() {
    var MenuId = [];
    frmMailsList = new kony.ui.Form2({
        "id": "frmMailsList",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmMailsList_frmMailsList_init_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMailsList
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
    frmMailsList.setDefaultUnit(kony.flex.DP);
};