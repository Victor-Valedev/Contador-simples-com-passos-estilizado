function contar(){
    //Variáveis de interligação com o html
    let inicio = document.querySelector('input#numbStart')
    let fim = document.querySelector('input#numbEnd')
    let passo = document.querySelector('input#pass')
    let res = document.querySelector('div#res')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR] Impossivel contar sem preencher todos os campos!')
    }else{
        //Manipulação de dados
        res.innerHTML ='contando: '
        //Aqui chamo as variavéis do input para fazer a manipulção de dados. String --> Number
        let i = Number(inicio.value)
        let  f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            //contagem crescente
            // += --> Concatenação
            // c += p --> c = c + p
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            // c -= p --> c = c - p
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `Fim! \u{1F3C1}` 
 }
