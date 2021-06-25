const React = require('react');
const { Text, Color } = require("scenegraph");

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };

        this.onDoneClick = (e) => {
            const selection = this.props.selection;
            const newText = new Text();
            newText.text = this.state.name;
            newText.styleRanges = [{
                length: newText.text.length,
                fill: new Color("#00F"),
                fontSize: 50
            }];
            selection.insertionParent.addChild(newText);
            newText.moveInParentCoordinates(100, 100);
            props.dialog.close();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onDoneClick} >Done</button>
            </div>
        );
    }
}

module.exports = HelloForm;