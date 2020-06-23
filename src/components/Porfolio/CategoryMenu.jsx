import React from 'react';



const CategoryMenu = (props) => {
    const {cats, changeCat, currentCat} = props;

    

    const setClasses = (category) => {
        return currentCat == category ? "btn btn-light active" : "btn btn-light";
    }

    const allCatsShown = () => {
        return currentCat == null ? "btn btn-light active" : "btn btn-light";
    }

    let uniqueCat = [];
    // SELF INVOKING FUNCTION TO INITIATE THE UNIQUE CATEGORY LIST ARRAY
    (function uniqueCategoryList(){
        cats.map(category => {    
            // Only unique categories are shown
            if(!uniqueCat.includes(category)){
                uniqueCat.push(category);
            }
        })
    }());

    // in order to change the category in dropdown menu function has to be run on <select onChange={}> element
    const changeCategory = (e) => {
        let category = e.target.value === "all" ? null : e.target.value;
        changeCat(category);
    }



    return (
        <div className='container'>
            
            {/* BUTTON GROUP HIDES ON SMALL VIEWPORT */}
            <div  className="btn-group d-none d-sm-none d-md-block d-lg-block" role="group">
            <button onClick={ ()=>changeCat(null) } className={allCatsShown()} >Show all</button>

                {    uniqueCat.map(category => {
                        return  (<button key={category} onClick={ ()=>changeCat(category) } className={setClasses(category)} >{category}</button>)
                })
                }
            </div>


            {/* Dropdown MENU HIDDEN ON LARGE VIEWPORTS */}
            
            <div className='d-block d-sm-block d-md-none  px-4'>
            
                <select className="form-control form-control-md" onChange={(e) => changeCategory(e)}>
                <option key="213231" value="all" >Show all</option>
                    { 
                    uniqueCat.map(category => {
                            return  (<option key={category} value={category}>{category}</option>)
                        })
                    }

                </select>
            </div>

        </div>
    )
}

export default CategoryMenu;