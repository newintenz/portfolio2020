import React from "react";

const Sample = (props) => {
    const {key, title, description, category, image, technologies } = props.info;
    const img = "../../images/portfolio/" + image;
    const desc = description.length > 100 ? description.substr(0, 100)+"..." : description;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <button onClick={() => props.openSelectedPortfolio(key)} className="btn btn-light btn-sm">Check it out</button>
            {/* <button className='btn btn-primary mx-0 my-0' onClick={ ()=>props.changeCat(category) }>[{category}]</button> */}

            </div>
      </div>

    );
}

export default Sample;