let hoje = new Date()
const mesAtual = String(hoje.getMonth() + 1).padStart(2, '0')
let dataAtual = hoje.getFullYear()+'-'+mesAtual+'-'+hoje.getDate()
const api_url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-18&end_date=2022-04-18&api_key=BRxEfpRHnuPrToZ9c4BdPpKynsKUrlcUuGVfAHge"  /* `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=BRxEfpRHnuPrToZ9c4BdPpKynsKUrlcUuGVfAHge` */ /* 2022-05-17 */



let totalAsteroides = 0
const listaAsteroides = []


async function obterAsteroides(){

    const response = await fetch(api_url)
    const data = await response.json()
    totalAsteroides = data.element_count
    listaAsteroides.push({...data.near_earth_objects})
   
}
obterAsteroides()





