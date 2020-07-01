import React, { Component } from "react";
import TitleBar from "../TitleBar";
import Input from "./Input";

export default class Contact extends Component {


    state = {
        name: "",
        email: "",
        message: ""
    }



    updateField = ( e ) => {


        console.log(e.target.name, e.target.value);
        const field = e.target.name;

        this.setState({ name : e.target.value  });
    }
    
    
    render() { 
        
        
        return (

            <React.Fragment>
                <TitleBar pageTitle='Lets talk' />

                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-6'>
                            
                            <p>Feel free to contact me and I will get back to you shortly</p>
                            <form>
                                <Input name='name' type='text' value={ this.state.name } process={ (e) => this.updateField(e) } label='Your name' />
                            </form> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}
