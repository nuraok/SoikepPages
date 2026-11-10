document.addEventListener('DOMContentLoaded', () => {
    const contaSeguidor = document.getElementById('seguir');
    const seguidores = 176544;

    function converterSeguidor() {

        let numberSize = seguidores.toString().length
        let main = numberSize % 3

        if (main == 0) main = 3;

        if (numberSize > 6) {
            contaSeguidor.textContent = `${(seguidores / 10 ** (numberSize - main)).toFixed(1)}M Seguidores`
        } else if (numberSize > 4) {
            contaSeguidor.textContent = `${(seguidores / 10 ** (numberSize - main)).toFixed(1)}K Seguidores`
        } else {
            contaSeguidor.textContent = `${seguidores} Seguidores`
        }

    }

    function atualizarSeguidores() {

        converterSeguidor()

        requestAnimationFrame(atualizarSeguidores)
    }
    atualizarSeguidores()
})
