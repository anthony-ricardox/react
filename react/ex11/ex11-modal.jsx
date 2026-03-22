import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const ExModal = () =>{ 
    const [modal, setModal] = React.useState(false)
    return(
        <div>
            
            <Modal modal={modal} setModal={setModal}/>
            <ButtonModal setModal={setModal}/>
        </div>
    )
}



export default ExModal