import React from 'react'
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import {createPostVote, changePostVote, deletePostVote } from '../../services/votes'
import {ContainerVotesPost} from './styled'

const Votes = ({voteSum, id}) => {
    let upVote = false

    const onClickUpVote = () => {
        if(upVote){
            upVote = false
            deletePostVote(id)
        }else{
            upVote = true
            createPostVote(id)
        }
    }

    const onClickDownVote = () =>{
        if(upVote){
            upVote = false
            deletePostVote(id)
        }else{
            upVote = true
            changePostVote(id)
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