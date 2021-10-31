import {megasena, quina, lotofacil, lotomania, timemania, diaDeSorte, errorColor} from '../constants/colors'
const getBackGroundColor = (lotteryId) => {
    switch(lotteryId){
        case 0:
            return megasena
        case 1:
            return quina
        case 2:
            return lotofacil
        case 3:
            return lotomania
        case 4:
            return timemania
        case 5:
            return diaDeSorte
        default:
            return errorColor
    }
}

export default getBackGroundColor