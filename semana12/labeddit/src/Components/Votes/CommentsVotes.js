import React, {useState} from 'react'
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import {createCommentVote, changeCommentVote, deleteCommentVote, } from '../../services/votes'
import {ContainerVotesPost} from './styled'

const CommentsVoltes = ({voteSum, id, getData}) => {
    const[upVote, setUpVote] = useState(false)

    const onClickUpVote = () => {
        if(upVote){
            setUpVote(false)
            deleteCommentVote(id, getData)
        }else{
            setUpVote(true)
            createCommentVote(id, getData)
        }
    }

    const onClickDownVote = () =>{
        if(upVote){
            setUpVote(false)
            deleteCommentVote(id, getData)
        }else{
            setUpVote(true)
            changeCommentVote(id, getData)
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