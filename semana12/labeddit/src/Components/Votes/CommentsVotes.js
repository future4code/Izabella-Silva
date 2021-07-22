import React from 'react'
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import {createCommentVote, changeCommentVote, deleteCommentVote, } from '../../services/votes'
import {ContainerVotesPost} from './styled'

const CommentsVoltes = ({voteSum, id}) => {
    let upVote = false

    const onClickUpVote = () => {
        if(upVote){
            upVote = false
            deleteCommentVote(id)
        }else{
            upVote = true
            createCommentVote(id)
        }
    }

    const onClickDownVote = () =>{
        if(upVote){
            upVote = false
            deleteCommentVote(id)
        }else{
            upVote = true
            changeCommentVote(id)
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

export default CommentsVoltes