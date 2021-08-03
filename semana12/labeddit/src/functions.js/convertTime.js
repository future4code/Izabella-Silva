export const convertTime = (time) => {
    const newTime = time.split(".")[0]
    const date = newTime.split("T")[0]
    const hours = newTime.split("T")[1]
    const year = date.split("-")[0]
    const month = date.split("-")[1]
    const day = date.split("-")[2]
    const nweDate = `${day}/${month}/${year}`

    return(` postado em ${nweDate} às ${hours}`)
    
}