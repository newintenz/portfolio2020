import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faAddressCard, faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const fa = (props) => {
    library.add(faCoffee, faAddressCard, faArrowLeft)
    return <FontAwesomeIcon icon={props.icon}/>
}

export default fa;