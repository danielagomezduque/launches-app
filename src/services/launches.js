const API_URL= 'https://api.spacexdata.com/v3';

export const getDataLauches = async () => {
    try{
        const response = await fetch(`${API_URL}/launches`)
        const data = await response.json()
        return data;
    } catch (error){
        console.error(error)
    }
}
export const getLaunchByFlightNumer = async (flightNumber) => {
    try{
        const response = await fetch(`${API_URL}/launches/${flightNumber}`)
        const data = await response.json()
        return data;
    } catch (error){
        console.error(error)
    }
}