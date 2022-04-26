let hoje = new Date()
const mesAtual = String(hoje.getMonth() + 1).padStart(2, '0')
let dataAtual = hoje.getFullYear()+'-'+mesAtual+'-'+hoje.getDate()
const api_url =  `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=BRxEfpRHnuPrToZ9c4BdPpKynsKUrlcUuGVfAHge`
const btnPesquisar = document.getElementById("botao-pesquisar")



let totalAsteroides = 0
const listaAsteroides = []
let dataUsuario = ""

btnPesquisar.addEventListener("click", ()=>{
    let inputParaString = input.value.toString()
    dataUsuario = inputParaString
    let apiUsuario =  `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataUsuario}&end_date=${dataUsuario}&api_key=BRxEfpRHnuPrToZ9c4BdPpKynsKUrlcUuGVfAHge`
    listaAsteroides.length = 0  
    obterAsteroides(apiUsuario)
    criarTexto(dataUsuario)
    divTotalAsteroides.innerHTML=""
    divContainerAsteroides.innerHTML=""  
    const h2 = document.createElement("h2")
    h2.innerText = `Buscando data` 
    divContainerAsteroides.append(h2)
   
   })

async function obterAsteroides(api=api_url){
    const response = await fetch(api)
    const data = await response.json()
    totalAsteroides = data.element_count   
    listaAsteroides.push({...data.near_earth_objects})
    criarCard(totalAsteroides, dataUsuario)
    
   
}
obterAsteroides()








