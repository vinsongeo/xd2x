const reactShim = require("./react-shim");
const React = require("react");
const ReactDOM = require("react-dom");
const XD2XPanel = require("./xd2x-panel.jsx")

function show(selection) {
    let dialog;

    function getDialog() {
        if (dialog == null) {
            dialog = document.createElement("div");
            ReactDOM.render(<XD2XPanel dialog={dialog} selection={selection} />, dialog);
        }
        return dialog
    }

    return document.body.appendChild(getDialog());
}

module.exports = {
    panels: {
        xd2dPanel:
        {
            show
        }
        
    }
};