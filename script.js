const divContainerAsteroides = document.getElementById("container-cards")
const divTotalAsteroides = document.getElementById("total-asteroides")




function filtrarSomenteAsteroides(){

    const asteroides = listaAsteroides.map((elem)=>{
      return elem[dataAtual]
    
    })
  
   return asteroides[0]
}



function criarTextoTotal(){
    setTimeout(()=>{
        const h1 = document.createElement("h1")
        h1.innerText = `Total de Asteróides de hoje: ${totalAsteroides}` 
        divTotalAsteroides.append(h1)
    }, 500)
         

}
criarTextoTotal()


function criarCard(){
    divContainerAsteroides.innerHTML=""
   
    setTimeout(()=>{
        const asteroides = filtrarSomenteAsteroides()
        asteroides.forEach((elem)=>{
            
            console.log(elem)

            const divCard = document.createElement("div")
            const velocidade = elem.close_approach_data[0].relative_velocity.kilometers_per_second
            const aproximacao = elem.close_approach_data[0].close_approach_date
            const aproximacaoFull = elem.close_approach_data[0].close_approach_date_full

            let nomeSemParenteses= elem.name.replaceAll("(", "").replaceAll(")", "")
            let aproximacaoReverse = aproximacao.split("-").reverse().join().replaceAll(",", "-")
            let aproximacaoHoras =  aproximacaoFull.slice(-5)   
            let converterParaInteiro = parseInt(velocidade)
            
            divCard.setAttribute("class", "card")

            if(elem.is_potentially_hazardous_asteroid == false){
                divCard.innerHTML=
                `
                <div class = descricao-asteroide> 
                    <h4 class="nome-asteroide">Nome: ${nomeSemParenteses}</h4>
                    <h4 class="nome-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="nome-asteroide">Aproximação em ${aproximacaoReverse} ás ${ aproximacaoHoras}</h4>
                </div>
                <div class="div-asteroide-perigoso">
                    <button class="mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-nao-perigoso ">Não é um Asteróide perigoso</h4>
                </div>    
                
                `
                divContainerAsteroides.append(divCard)
            } else {
                divCard.innerHTML=
                `
                <div class = descricao-asteroide> 
                    <h4 class="nome-asteroide">Nome: ${nomeSemParenteses}</h4>
                    <h4 class="nome-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="nome-asteroide">Aproximação em ${aproximacaoReverse} ás ${ aproximacaoHoras}</h4>
                </div>
               
                <div class="div-asteroide-perigoso">
                    <button class="mais-detalhes">Mais Detalhes</button>
                    <h4 class="asteroide-perigoso">É um Asteróide perigoso</h4>
                </div>   
               
                
                `
                divContainerAsteroides.append(divCard)
            }

           
        })
    }, 500)
    
 
}
 criarCard() 
