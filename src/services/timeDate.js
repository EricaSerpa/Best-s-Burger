import differenceInMinutes from 'date-fns/differenceInMinutes'
import format from 'date-fns/format'



export const statusTime = (updatedAt) => {
    const timeMin = differenceInMinutes(new Date(), new Date(updatedAt))
    return timeMin
};

export const formatDate = (timeDate) => {
    const date = new Date(timeDate);
    const result = format(new Date(date), "ccc  dd/MM/yyyy - HH:mm'h' - aa")
    return result;

};
