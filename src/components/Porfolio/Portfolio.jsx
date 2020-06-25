import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import TitleBar from "../TitleBar";
import Sample from "./Sample";
import SelectedPortfolio from "./SelectedPortfolio";
import data from "../../portfolio";

class Portfolio extends Component {

    state={
        portfolio_data: [],
        categories: [],
        setCategory: null,
        selectedPortfolio: null,
    }


    componentDidMount = ()=> {
        this.loadOriginalData();
        let categories = this.getCategories();
        this.setState({categories});
    }

    loadOriginalData = () => {
        this.setState({portfolio_data: data});
    }

    getCategories = () => {     
        const cats = [];
        data.map(cat => {
            cats.push(cat.category);
        });
        return cats;
    }

    portfolioByCategory = (category) => {        
        //setting category
        this.setState({setCategory: category});

        if(category === null){
            this.loadOriginalData();
        } else {
            const portfolio = data.filter(item => {
            return item.category === category; 
            } );
            this.setState({portfolio_data: portfolio});    
        }
    }

    openSelectedPortfolio = (key) => {
        const selected = data.filter(item => {
            return item.key === key;
        })
        this.setState({selectedPortfolio: selected});
    }



    displayPortfolio = () => {
        if(this.state.selectedPortfolio !== null){
            return <SelectedPortfolio selectedCategory={this.state.setCategory} backToPortfolioPage={this.clearSelectedPortfolio} info={this.state.selectedPortfolio} />
        }
          return (

            <div className='container'>
                <div className='row'>
                {   this.state.portfolio_data.map(item => {
                return (

                            <div key={item.key} className="col-md-4 my-4">
                                <Sample info={item} openSelectedPortfolio={this.openSelectedPortfolio} changeCat={this.portfolioByCategory}/>
                            </div>

                )}) }
                </div>
            </div>
            )
    }

    clearSelectedPortfolio = () => {
        this.setState({selectedPortfolio: null});
    }

    displayCatSelection = () => {
        return this.state.selectedPortfolio == null ? <CategoryMenu currentCat={this.state.setCategory} cats={this.state.categories} changeCat={this.portfolioByCategory} /> : null;
    }


    render() { 
        const title = this.state.setCategory !== null ? "My " + this.state.setCategory + " work" : "Check out my portfolio"; 
        return( 
            <React.Fragment>
                <TitleBar pageTitle = {title} />
                {this.displayCatSelection()}
                {this.displayPortfolio()}
            </React.Fragment>    
        );
    }

}



export default Portfolio;