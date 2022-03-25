import React from 'react';

class Icon extends React.Component {
  render() {
    const { name, size, color } = this.props;
    return (
        <span className={this.props.className == undefined ? "material-icons" : "material-icons " + this.props.className} style={{fontSize: size == undefined? "16px" : size, color: color == undefined ? "#d0114d" : color, userSelect: "none" }} >{name}</span>
    );
  }
}

export default Icon;