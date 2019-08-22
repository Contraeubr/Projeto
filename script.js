function contar() {
    var inicio = document.getElementById('texto_inicio')
    var fim = document.getElementById('texto_fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERRO]!!!')
    } else {
        res.innerHTML = 'Contado: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
          for(c = i;c <= f;c += p){
            res.innerHTML += ` ${c} \u{1F449}` 
          }
        } else {
            //Contagem Regressiva
            for(c = i;c >= f;c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}