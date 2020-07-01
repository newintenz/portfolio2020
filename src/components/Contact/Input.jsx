import React from "react";


const Input = ( props ) => {

    const {name, value, label, type, description, process} = props;

    return (
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input type={ type } name={ name } className="form-control" id={ name } onChange = {(e) => process(e) } value={ value } aria-describedby={ name } placeholder={ label } />
            <small id={ name } className="form-text text-muted">{ description }</small>
        </div>
    )

}

export default Input;