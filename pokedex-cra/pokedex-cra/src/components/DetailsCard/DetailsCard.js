import React from "react";
import "./DetailsCard.css";
export class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tets: "uwu",
    };
  }
  render() {
    const leftText = {
      textAlign: "left",
      margin: "20px",
    };
    return (
      <div style={{ margin: "7%" }}>
        <h3 style={leftText}>Name: {this.props.details.name}</h3>
        <h3 style={leftText}>Order: {this.props.details.order}</h3>
        
        <h3 style={leftText}>Moves:</h3>
        {this.props.details.moves !== undefined && (
          <ul>
            {this.props.details.moves.map((move) => (
              <li style={leftText} key={move}>{move}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}