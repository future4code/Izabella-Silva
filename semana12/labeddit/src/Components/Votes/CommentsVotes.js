import React, {useState} from 'react'
import blackUpVote from '../../assets/blackUpVote.png'
import whiteUpVote from '../../assets/whiteUpVote.png'
import blackDownVote from '../../assets/blackDownVote.png'
import whitedownVote from '../../assets/whitedownVote.png'
import {createCommentVote, changeCommentVote, deleteCommentVote } from '../../services/votes'
import {ContainerVotesPost} from './styled'

const CommentsVoltes = ({voteSum, id, getData}) => {
    const[upVote, setUpVote] = useState(false)
    const[iconUpVote, setIconUpVote] = useState(whiteUpVote)
    const[iconDownVote, setIconDownVote] = useState(whitedownVote)

    const onClickUpVote = () => {
        if(upVote){
            setUpVote(false)
            setIconUpVote(whiteUpVote)
            deleteCommentVote(id, getData)
        }else{
            setUpVote(true)
            setIconUpVote(blackUpVote)
            createCommentVote(id, getData)
        }
    }

    const onClickDownVote = () =>{
        if(upVote){
            setUpVote(false)
            setIconDownVote(whitedownVote)
            deleteCommentVote(id, getData)
        }else{
            setUpVote(true)
            setIconDownVote(blackDownVote)
            changeCommentVote(id, getData)
        }
    }


    return(
        <ContainerVotesPost>
            <img src={iconUpVote} alt={"Voto Positivo"} onClick={onClickUpVote}/>
            {voteSum ? <p>{voteSum}</p>: <p>0</p>}
            <img src={iconDownVote} alt={"Voto Negativo"} onClick={onClickDownVote}/>
        </ContainerVotesPost>
    )
}

export default CommentsVoltes