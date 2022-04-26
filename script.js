const divTotalAsteroides = document.getElementById("total-asteroides")
const divContainerAsteroides = document.getElementById("container-cards")
const divSelecionarData = document.getElementById("selecionar-data")
const input = document.getElementById("input")





function imagemAleatoria(){
    return Math.floor(Math.random()*22)
}

function filtrarAsteroides(data=dataAtual){
    
    const asteroides = listaAsteroides.map((elem)=>{
      return elem[data]
        
    })
    return asteroides[0]
}

function criarCard(totalAsteroides, dataUsuario){
   
    if(totalAsteroides > 0){      
        if(dataUsuario === ""){
            divTotalAsteroides.innerHTML=""
            divContainerAsteroides.innerHTML=""
            const h2 = document.createElement("h2")
            h2.innerText = `Buscando data` 
            divContainerAsteroides.append(h2)
            setTimeout(()=>{
            criarTexto()
    
            divContainerAsteroides.innerHTML=""
            const asteroides = filtrarAsteroides()
            
            asteroides.sort(function(a,b){
                    return new Date(a.close_approach_data[0].close_approach_date_full) - new Date(b.close_approach_data[0].close_approach_date_full)
                    });
            
            asteroides.forEach((elem)=>{
                const divCard = document.createElement("div")
                const velocidade = elem.close_approach_data[0].relative_velocity.kilometers_per_second
                const aproximacaoFull = elem.close_approach_data[0].close_approach_date_full
                const diametroMinimo = elem.estimated_diameter.meters.estimated_diameter_min
                const diametroMaximo = elem.estimated_diameter.meters.estimated_diameter_max
        
                let nomeSemParenteses= elem.name.replaceAll("(", "").replaceAll(")", "")
                let aproximacaoHoras =  aproximacaoFull.slice(-5)   
                let converterParaInteiro = parseInt(velocidade)
                
    
                
                divCard.setAttribute("class", "card")
                divCard.style.backgroundImage=`url(./img/${imagemAleatoria()}.jpg)`
                divCard.style.backgroundSize= "190%"
                
                
                if(elem.is_potentially_hazardous_asteroid == false){
                    divCard.innerHTML=
                    `
                    <div class = "descricao-asteroide"> 
                        <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                        <h4 class="id-asteroide">ID: ${elem.id}</h4>
                        <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                        <h4 class="aproximacao-asteroide">Hoje às ${aproximacaoHoras}</h4>
                        <h4 class="diametro-asteroide">Entre ${diametroMinimo.toFixed() } e ${diametroMaximo.toFixed()} metros de Diâmetro </h4>
                    </div>
                    <div class="div-asteroide-perigoso">
                            <h4 class="asteroide-nao-perigoso ">Não é um Asteróide perigoso</h4>
                    </div>    
                    
                    `
                    divContainerAsteroides.append(divCard)
                } else {
                    divCard.innerHTML=
                    `
                    <div class = "descricao-asteroide"> 
                    <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                    <h4 class="id-asteroide">ID: ${elem.id}</h4>
                    <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                    <h4 class="aproximacao-asteroide">Hoje às ${aproximacaoHoras}</h4>
                    <h4 class="diametro-asteroide">Entre ${diametroMinimo } e  ${diametroMaximo} metros de Diâmetro </h4>
                    </div>
                    
                    <div class="div-asteroide-perigoso">
                            <h4 class="asteroide-perigoso">É um Asteróide perigoso</h4>
                    </div>   
                    
                    
                    `
                    divContainerAsteroides.append(divCard)
                    
                }
                
                
            })
            }, 1000)

       




        }
        if(dataUsuario != "") {

            divTotalAsteroides.innerHTML=""
            divContainerAsteroides.innerHTML=""
            const h2 = document.createElement("h2")
            h2.innerText = `Buscando data` 
            divContainerAsteroides.append(h2)
            criarTexto(dataUsuario)


            divContainerAsteroides.innerHTML=""  
           
            const asteroides =  filtrarAsteroides(dataUsuario)
            asteroides.sort(function(a,b){
                    return new Date(a.close_approach_data[0].close_approach_date_full) - new Date(b.close_approach_data[0].close_approach_date_full)
                });
            
            asteroides.forEach((elem)=>{
                

                let DataReverse = dataUsuario.split("-").reverse().join().replaceAll(",", "-")

                const divCard = document.createElement("div")
                const velocidade = elem.close_approach_data[0].relative_velocity.kilometers_per_second
                const aproximacaoFull = elem.close_approach_data[0].close_approach_date_full
                const diametroMinimo = elem.estimated_diameter.meters.estimated_diameter_min
                const diametroMaximo = elem.estimated_diameter.meters.estimated_diameter_max

                let nomeSemParenteses= elem.name.replaceAll("(", "").replaceAll(")", "")
                let aproximacaoHoras =  aproximacaoFull.slice(-5)   
                let converterParaInteiro = parseInt(velocidade)
                

            
                divCard.setAttribute("class", "card")
                divCard.style.backgroundImage=`url(./img/${imagemAleatoria()}.jpg)`
                divCard.style.backgroundSize= "190%"
                
                
                if(elem.is_potentially_hazardous_asteroid == false){
                    divCard.innerHTML=
                    `
                    <div class = "descricao-asteroide"> 
                        <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                        <h4 class="id-asteroide">ID: ${elem.id}</h4>
                        <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                        <h4 class="aproximacao-asteroide">No dia ${DataReverse} às  ${aproximacaoHoras}</h4>
                        <h4 class="diametro-asteroide">Entre ${diametroMinimo.toFixed()} e  ${diametroMaximo.toFixed()} metros de Diâmetro </h4>
                    </div>
                    <div class="div-asteroide-perigoso">
                        <h4 class="asteroide-nao-perigoso ">Não é um Asteróide perigoso</h4>
                    </div>    
                    
                    `
                    divContainerAsteroides.append(divCard)
                } else {
                    divCard.innerHTML=
                    `
                    <div class = "descricao-asteroide"> 
                        <h4 class="nome-asteroide">${nomeSemParenteses}</h4>
                        <h4 class="id-asteroide">ID: ${elem.id}</h4>
                        <h4 class="velocidade-asteroide">Velocidade: ${converterParaInteiro} KM/s</h4>
                        <h4 class="aproximacao-asteroide">No dia ${DataReverse} às  ${aproximacaoHoras}</h4>
                        <h4 class="diametro-asteroide">Entre ${diametroMinimo.toFixed(0) } e  ${diametroMaximo.toFixed(0)} metros de Diâmetro </h4>
                    </div>
                
                    <div class="div-asteroide-perigoso">
                        <h4 class="asteroide-perigoso">É um Asteróide perigoso</h4>
                    </div>   
                
                    
                    `
                    divContainerAsteroides.append(divCard)
                }

            
            })

        
        }

      
    }else {
        divTotalAsteroides.innerHTML=""
            divContainerAsteroides.innerHTML=""
            const h2 = document.createElement("h2")
            h2.innerText = `Nenhum Asteróide encontrado` 
            divContainerAsteroides.append(h2)
    }
   
    
}


function criarTexto(dataUsuario=""){
    divTotalAsteroides.innerHTML=""
    if(dataUsuario == ""){
        const h2 = document.createElement("h2")
        h2.innerText = `Hoje irão passar ${totalAsteroides} Asteróides` 
        divTotalAsteroides.append(h2)
          
      
    } 
    if(dataUsuario != "") {
        if(dataUsuario >  dataAtual){
            divTotalAsteroides.innerHTML=""
            const h2 = document.createElement("h2")
            h2.innerText = `Irão passar ${totalAsteroides} Asteróides` 
            divTotalAsteroides.append(h2)
              
           
        } 
        if(dataUsuario <  dataAtual) {
            divTotalAsteroides.innerHTML=""
            const h2 = document.createElement("h2")
            h2.innerText = `Passaram ${totalAsteroides} Asteróides` 
            divTotalAsteroides.append(h2)
          
       
        }
    }
   

    
         

}









