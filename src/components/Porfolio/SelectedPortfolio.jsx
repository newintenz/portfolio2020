import React from 'react'; 
import FontAwesome from "../FontAwesome/FontAwesome";

const SelectedPortfolio = (props) => {
   const cat = props.selectedCategory;
   
   const backBtnLabel = () => {
       return cat !== null ? "Back to " + cat : "Back to portfolio";
   }

   let array = ''
   props.info.map(item => {
      array = item;
   })

   // console.log(array.technologies);

   const displayTech = () =>{
      return (
         <ul className='list-group list-group-flush'>
            
            {
               array.technologies.map(item =>{
               return <li key={item} className='list-group-item'>{item}</li>
               })
            }

         </ul>
      )
   }


// Image source
const src = "../images/portfolio/" + array.image;


   return (
         <React.Fragment>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 py-3'>
                     <div  className="btn-group" role="group">
                        <button onClick={props.backToPortfolioPage} className='btn btn-light'> <FontAwesome icon='arrow-left' /> { backBtnLabel() }</button>
                        
                     </div> 
                  </div>
               </div>
               <hr/>
               <div className='row'>
                  <div className='col-sm-8 px-4'>

                     <h2>{array.title}</h2>
                     <p>{array.description}</p>
                     
                     <img src={src} className="card-img-top" alt={array.title} />
                  </div>

                  <div className='col-sm-3 py-5'>
                        <h6>Technologies used on this project:</h6>
                        {displayTech()}
                  </div>
               </div>
            </div>
         </React.Fragment>
   );
}

export default SelectedPortfolio;