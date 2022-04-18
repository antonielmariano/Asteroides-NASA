const divContainerAsteroides = document.getElementById("container-cards")
const divTotalAsteroides = document.getElementById("total-asteroides")
const divSelecionarData = document.getElementById("selecionar-data")
const input = document.getElementById('input')

let dataUsuario = ""



function filtrarSomenteAsteroides(){

    const asteroides = listaAsteroides.map((elem)=>{
      return elem[dataAtual]
        
    })
   
    return asteroides[0]
}

function filtrarAsteroidesInput(){
    const asteroides = listaAsteroides.map((elem)=>{
        
        return elem[dataUsuario]
          
      })
   
    return asteroides[0]
}


function criarTextoAtual(){
    setTimeout(()=>{
        const h2 = document.createElement("h2")
        h2.innerText = `Hoje irão passar ${totalAsteroides} Asteróides` 
        divTotalAsteroides.append(h2)
      
    }, 3000)
         

}
criarTextoAtual()

function criarTextoInput(){
    if(dataUsuario >  dataAtual){
        divTotalAsteroides.innerHTML=""
        setTimeout(()=>{
            const h2 = document.createElement("h2")
            h2.innerText = `Irão passar ${totalAsteroides} Asteróides` 
            divTotalAsteroides.append(h2)
          
        }, 3000)
    } else {
        divTotalAsteroides.innerHTML=""
        setTimeout(()=>{
        const h2 = document.createElement("h2")
        h2.innerText = `Passaram ${totalAsteroides} Asteróides` 
        divTotalAsteroides.append(h2)
      
    }, 3000)
    }

    
         

}


let contadorImagem = 0
function criarCardDataAtual(){
    divContainerAsteroides.innerHTML=""
    const h2 = document.createElement("h2")
    h2.innerText = `Buscando data` 
    divContainerAsteroides.append(h2)
        
    setTimeout(()=>{
        divContainerAsteroides.innerHTML=""
        const asteroides = filtrarSomenteAsteroides()

        asteroides.sort(function(a,b){
                return new Date(a.close_approach_data[0].close_approach_date_full) - new Date(b.close_approach_data[0].close_approach_date_full)
              });
        
        asteroides.forEach((elem)=>{
            
            contadorImagem++
            const divCard = document.createElement("div")
            const velocidade = elem.close_approach_data[0].relative_velocity.kilometers_per_second
            const aproximacaoFull = elem.close_approach_data[0].close_approach_date_full

    
            let nomeSemParenteses= elem.name.replaceAll("(", "").replaceAll(")", "")
            let aproximacaoHoras =  aproximacaoFull.slice(-5)   
            let converterParaInteiro = parseInt(velocidade)
            

          
            divCard.setAttribute("class", "card")
            divCard.style.backgroundImage=`url(./img/${contadorImagem}.jpg)`
            divCard.style.backgroundSize= "190%"
            
            
            if(elem.is_potentially_hazardous_asteroid == false){
                divCard.innerHTML=
                `
                <div class = "descricao-asteroide"> 
                    <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                    <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="aproximacao-asteroide">Hoje às ${aproximacaoHoras}</h4>
                </div>
                <div class="div-asteroide-perigoso">
                    <button class="btn-mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-nao-perigoso ">Não é um Asteróide perigoso</h4>
                </div>    
                
                `
                divContainerAsteroides.append(divCard)
            } else {
                divCard.innerHTML=
                `
                <div class = "descricao-asteroide"> 
                    <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                    <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="aproximacao-asteroide">Hoje às ${aproximacaoHoras}</h4>
                </div>
               
                <div class="div-asteroide-perigoso">
                    <button class="btn-mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-perigoso">É um Asteróide perigoso</h4>
                </div>   
               
                
                `
                divContainerAsteroides.append(divCard)
            }

           
        })
    }, 3000)

    contadorImagem = 0
    
 
}
criarCardDataAtual() 



function criarCardDataInput(){
    let inputParaString = input.value.toString()
    dataUsuario = inputParaString
    let apiUsuario =  `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataUsuario}&end_date=${dataUsuario}&api_key=BRxEfpRHnuPrToZ9c4BdPpKynsKUrlcUuGVfAHge`
    listaAsteroides.length = 0  
    obterAsteroides(apiUsuario)
    
    divContainerAsteroides.innerHTML=""  
    criarTextoInput() 
    const h2 = document.createElement("h2")
    h2.innerText = `Buscando data` 
    divContainerAsteroides.append(h2)
    
    
    contadorImagem = 0 
    
    
    setTimeout(()=>{
        divContainerAsteroides.innerHTML=""  
        const asteroides = filtrarAsteroidesInput()  
        asteroides.sort(function(a,b){
                return new Date(a.close_approach_data[0].close_approach_date_full) - new Date(b.close_approach_data[0].close_approach_date_full)
              });
        
        asteroides.forEach((elem)=>{
            
            contadorImagem++

            let DataReverse = dataUsuario.split("-").reverse().join().replaceAll(",", "-")

            const divCard = document.createElement("div")
            const velocidade = elem.close_approach_data[0].relative_velocity.kilometers_per_second
            const aproximacaoFull = elem.close_approach_data[0].close_approach_date_full

    
            let nomeSemParenteses= elem.name.replaceAll("(", "").replaceAll(")", "")
            let aproximacaoHoras =  aproximacaoFull.slice(-5)   
            let converterParaInteiro = parseInt(velocidade)
            

          
            divCard.setAttribute("class", "card")
            divCard.style.backgroundImage=`url(./img/${contadorImagem}.jpg)`
            divCard.style.backgroundSize= "190%"
            
            
            if(elem.is_potentially_hazardous_asteroid == false){
                divCard.innerHTML=
                `
                <div class = "descricao-asteroide"> 
                    <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                    <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="aproximacao-asteroide">No dia ${DataReverse} às ${aproximacaoHoras}</h4>
                </div>
                <div class="div-asteroide-perigoso">
                    <button class="btn-mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-nao-perigoso ">Não é um Asteróide perigoso</h4>
                </div>    
                
                `
                divContainerAsteroides.append(divCard)
            } else {
                divCard.innerHTML=
                `
                <div class = "descricao-asteroide"> 
                    <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                    <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="aproximacao-asteroide">No dia ${DataReverse} às ${aproximacaoHoras}</h4>
                </div>
               
                <div class="div-asteroide-perigoso">
                    <button class="btn-mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-perigoso">É um Asteróide perigoso</h4>
                </div>   
               
                
                `
                divContainerAsteroides.append(divCard)
            }

           
        })
    }, 3000)

    contadorImagem = 0
    
 
}

