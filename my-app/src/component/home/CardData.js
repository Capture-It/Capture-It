import React, { Component } from "react";
import CardColumns from 'react-bootstrap/CardColumns';
import './CardData.css'

export class CardData extends Component {
  render() {
    return (

      <CardColumns>
        {this.props.data.map((item, idx) => {
          return (

            <>
            
              <div className="img-container">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.imagel} alt="pic"></img>
              </div>
              <div className="text-container">
                <h4>{item.title}</h4>

              </div>


              <section className="container">

                <button className="btttn" variant="primary" onClick={() => this.props.sendPhoto1(item.title, item.description, item.imagel)} data-hover="Save!"><div>Add To My Photo</div></button>

              </section>
            </>
          )
        })}
      </CardColumns>

    );
  }
}
export default CardData;
