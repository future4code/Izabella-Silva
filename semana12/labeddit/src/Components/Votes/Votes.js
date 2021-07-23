import React, { useState } from 'react'
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import {createPostVote, changePostVote, deletePostVote } from '../../services/votes'
import {ContainerVotesPost} from './styled'

const Votes = ({voteSum, id, getData}) => {
    const[upVote, setUpVote] = useState(false)

    const onClickUpVote = () => {
        if(upVote){
            setUpVote(false)
            deletePostVote(id, getData)
        }else{
            setUpVote(true)
            createPostVote(id, getData)
        }
    }

    const onClickDownVote = () =>{
        if(upVote){
            setUpVote(false)
            deletePostVote(id, getData)
        }else{
            setUpVote(true)
            changePostVote(id, getData)
        }
    }

    return(
        <ContainerVotesPost>
            <img src={uparrow} alt={"Voto Positivo"} onClick={onClickUpVote}/>
            {voteSum ? <p>{voteSum}</p>: <p>0</p>}
            <img src={downarrow} alt={"Voto Negativo"} onClick={onClickDownVote}/>
        </ContainerVotesPost>
    )
}

export default Votes