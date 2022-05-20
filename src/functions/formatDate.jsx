export default function formatDate(date){
 
    const formattedDate = new Date(date)
    const day = formattedDate.getDate()
    const month = formattedDate.toString().split(' ')[1]
    const year = formattedDate.getFullYear()

    return month+' '+day+', '+year
    
}