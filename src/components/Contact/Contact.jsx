import React, { Component } from "react";
import TitleBar from "../TitleBar";
import Input from "./Input";

export default class Contact extends Component {


    state = {
        name: "",
        email: "",
        message: "",
        formValid: false,
    }



    updateField = ( e ) => {
        console.log(e.target.name, e.target.value);
        const name = e.target.name;
        this.setState({ [ name ] : e.target.value  });
    }


    submitForm = ( e ) => {
        alert("Form Submitted", this.state.email);
    } 
    
    
    render() { 
        
        
        return (

            <React.Fragment>
                <TitleBar pageTitle='Lets talk' />

                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-6 py-5'>
                            
                            <p>Feel free to contact me and I will get back to you shortly</p>
                            <form onSubmit = {(e) => this.submitForm(e)}>
                                <Input name='name' type='text' value={ this.state.name } process={ (e) => this.updateField(e) } label='Your name' />
                                <Input name='email' type='text' value={ this.state.email } process={ (e) => this.updateField(e) } label='Email' />
                                <Input name='message' type='text' value={ this.state.message } process={ (e) => this.updateField(e) } label='Message' />
                                <button className='btn btn-purple hipcool my-4' disabled={!this.state.formValid}>Send message</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}
