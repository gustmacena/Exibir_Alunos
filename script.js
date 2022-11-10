function exibirAluno() {

    const objs = JSON.parse(data)

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "";

    objs.alunos.forEach(element => {
        let media = (parseFloat(element.exercicio) + parseFloat(element.avaliacaoParcial) + parseFloat(element.avaliacaoRegimental))
        let status = ""

        if (media >= 6) {
            status = "PARABENS VOCE FOI APROVADO"
        } else if (media >= 2 && media < 5.9) {
            status = "AF"
        } else {
            status = "PESSIMA NOTICIA VOCE FOI REPROVADO"
        }

        resultado.innerHTML +=

        `<div class="content">
        <img src= ${element.img} </img>
        <p>Nome: ${element.nome}</p>
        <p> Rgm: ${element.rgm}</p>
        <p> Avaliacao parcial ${element.avaliacaoParcial}</p>
        <p> Exercicio: ${element.exercicio}</p>
        <p> AvaliacaoRegimental: ${element.avaliacaoRegimental}</p>
        <p> Média: ${media} </p>
        <p> Status:  ${status}</p>
        </div>
        `

    });
}