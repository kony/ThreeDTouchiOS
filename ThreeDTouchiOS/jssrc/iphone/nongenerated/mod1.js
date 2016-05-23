/*****************************************************************
 *	Name    : registerForPeekAndPop
 *	Author  : Kony
 *	Purpose : Setting the Peek and Pop callbacks to segment
 ******************************************************************/
function registerForPeekAndPop() {
    frmMailsList.segMailList.registerForPeekAndPop(myOnPeekCallback, myOnPopCallback);
}
/*****************************************************************
 *	Name    : myOnPeekCallback
 *	Author  : Kony
 *	Purpose : Returns the preview info table containing the peek form,
 * 			  focus rectangle and content size. Also sets the preview
 * 			  action items that need to appear when the row is swiped up
 ******************************************************************/
function myOnPeekCallback(widget, contextInfo) {
    if (typeof(contextInfo) == undefined) {
        return null;
    }
    var previewInfoTable = {
        "peekForm": frmDetailedMail,
        "focusRect": [0, 0, 200, 200],
        "contentSize": [320, 480]
    }
    frmDetailedMail.info = {
        selectedMailIndex: contextInfo.rowIndex
    };
    var readflag = frmMailsList.segMailList.data[contextInfo.rowIndex].readflag;
    setPreviewActionItems(readflag);
    return previewInfoTable;
}
/*****************************************************************
 *	Name    : myOnPopCallback
 *	Author  : Kony
 *	Purpose : Returns the form to be shown with 'pop' after peeking
 ******************************************************************/
function myOnPopCallback(widgetref, peekForm) {
    return peekForm;
}
/*****************************************************************
 *	Name    : setPreviewActionItems
 *	Author  : Kony
 *	Purpose : Set the actions to be shown when we swipe
 * 			  up in the peek view
 ******************************************************************/
function setPreviewActionItems(readflag) {
    if (readflag == true) {
        readtitle = "Mark as Unread";
        readaction = markasunread;
    } else {
        readtitle = "Mark as Read";
        readaction = markasread;
    }
    frmDetailedMail.setPreviewActionItems([{
        "type": constants.PREVIEW_ACTION_TYPE_INDIVIDUAL,
        "title": "Reply",
        "style": constants.PREVIEW_ACTION_STYLE_DEFAULT,
        "onPreviewAction": openReplyForm
    }, {
        "type": constants.PREVIEW_ACTION_TYPE_INDIVIDUAL,
        "title": "Delete",
        "style": constants.PREVIEW_ACTION_STYLE_DESTRUCTIVE,
        "onPreviewAction": deleteMail
    }, {
        "type": constants.PREVIEW_ACTION_TYPE_INDIVIDUAL,
        "title": readtitle,
        "style": constants.PREVIEW_ACTION_STYLE_DEFAULT,
        "onPreviewAction": readaction
    }]);
}
/*****************************************************************
 *	Name    : openReplyForm
 *	Author  : Kony
 *	Purpose : Action handler for Preview Action - Reply
 ******************************************************************/
function openReplyForm(param1) {
    //alert("param1 :"+JSON.stringify(param1));
    frmReplyMail.show();
}
/*****************************************************************
 *	Name    : deleteMail
 *	Author  : Kony
 *	Purpose : Action handler for Preview Action - Delete
 ******************************************************************/
function deleteMail() {
    var ind = frmDetailedMail.info.selectedMailIndex;
    frmMailsList.segMailList.removeAt(ind, 0);
}
/*****************************************************************
 *	Name    : markasread
 *	Author  : Kony
 *	Purpose : Action handler for Preview Action - Mark as Read/Unread
 ******************************************************************/
function markasread() {
    var ind = frmDetailedMail.info.selectedMailIndex;
    changeSkinForTheItem(ind, "sknmailread", true);
}
/*****************************************************************
 *	Name    : setPreviewActionItems
 *	Author  : Kony
 *	Purpose : Action handler for Preview Action - Mark as Read/Unread
 ******************************************************************/
function markasunread() {
    var ind = frmDetailedMail.info.selectedMailIndex;
    changeSkinForTheItem(ind, "sknmailunread", false);
}
/*****************************************************************
 *	Name    : changeSkinForTheItem
 *	Author  : Kony
 *	Purpose : Setting the segment row with the read/unread skin.
 * 			  Called by markasread/markasunread
 ******************************************************************/
function changeSkinForTheItem(rowInd, newskin, readflagval) {
    var selItem = frmMailsList.segMailList.data[rowInd];
    var newVal = {
        lblSubj: selItem.lblSubj,
        lblLine1: {
            text: selItem.lblLine1.text,
            skin: newskin
        },
        lblDate: selItem.lblDate,
        lblDomain: selItem.lblDomain,
        readflag: readflagval
    };
    frmMailsList.segMailList.setDataAt(newVal, rowInd, 0);
}
/*****************************************************************
 *	Name    : processAppService
 *	Author  : Kony
 *	Purpose : This function is called from Appservice callback. Launch
 * 			  mode 3 indicates that the quick action is performed. So,
 * 			  this function hadles the launch mode 3 and returns
 * 			  the approriate form
 ******************************************************************/
function processAppService(params) {
    if (params["launchmode"] == 3) {
        var quickActionItem = params["launchparams"]["quickactionitem"];
        if (quickActionItem) {
            if (quickActionItem["id"] == "inboxactionid") {
                return frmMailsList;
            } else if (quickActionItem["id"] == "composeactionid") {
                return frmComposeMail;
            }
        }
    }
}
/*****************************************************************
 *	Name    : setQuickActionItems
 *	Author  : Kony
 *	Purpose : Setting the Quick Actions
 ******************************************************************/
function setQuickActionItems() {
    var myQuickActionItems = [{
        "id": "inboxactionid",
        "title": "Inbox",
        "subtitle": "No unread messages",
        "icon": constants.QUICK_ACTION_ICON_TYPE_MAIL,
        "info": {
            "feed": "feed to first form"
        }
    }, {
        "id": "composeactionid",
        "title": "Compose",
        "subtitle": "Compose a new mail",
        "icon": constants.QUICK_ACTION_ICON_TYPE_COMPOSE,
        "info": {
            "feed": "feed to second form"
        }
    }];
    kony.forcetouch.setQuickActionItems(myQuickActionItems);
}
/*****************************************************************
 *	Name    : setMailsToSegment
 *	Author  : Kony
 *	Purpose : Setting the items to the segment
 ******************************************************************/
function setMailsToSegment() {
    var segdata = [{
        "lblSubj": "New sign-in from iPhone",
        "lblLine1": {
            skin: "sknmailunread",
            text: "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account"
        },
        "lblDate": "15/03/16",
        "lblDomain": "Google",
        "readflag": false
    }, {
        "lblSubj": "New sign-in from iPhone",
        "lblLine1": {
            skin: "sknmailunread",
            text: "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account"
        },
        "lblDate": "14/03/16",
        "lblDomain": "Google",
        "readflag": false
    }, {
        "lblSubj": "New sign-in from iPhone",
        "lblLine1": {
            skin: "sknmailunread",
            text: "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account"
        },
        "lblDate": "13/03/16",
        "lblDomain": "Google",
        "readflag": false
    }, {
        "lblSubj": "New sign-in from iPhone",
        "lblLine1": {
            skin: "sknmailunread",
            text: "New sign-in from iPhone Did not get a new phone?Someone may have your password. Review the devices that have access to your Google account"
        },
        "lblDate": "12/03/16",
        "lblDomain": "Google",
        "readflag": false
    }];
    frmMailsList.segMailList.setData(segdata);
}