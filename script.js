document.addEventListener('DOMContentLoaded', () => {
    const contaSeguidor = document.getElementById('seguir');
    const david = document.getElementById('david');
    const pix = document.getElementById('pix');
    const mineIp = document.getElementById('mine-ip');

    const seguidores = 439;

    function converterSeguidor() {
        let numberSize = seguidores.toString().length;
        let main = numberSize % 3;
        if (main == 0) main = 3;

        if (numberSize > 6) {
            contaSeguidor.textContent = `${(seguidores / 10 ** (numberSize - main)).toFixed(1)}M Seguidores`;
        } else if (numberSize > 4) {
            contaSeguidor.textContent = `${(seguidores / 10 ** (numberSize - main)).toFixed(1)}K Seguidores`;
        } else {
            contaSeguidor.textContent = `${seguidores} Seguidores`;
        }
    }

    function atualizarSeguidores() {
        converterSeguidor();
        requestAnimationFrame(atualizarSeguidores);
    }

    atualizarSeguidores();

    pix.addEventListener('mouseover', () => {
        david.style.opacity = "100";
        console.log("dentro");
    });

    pix.addEventListener('mouseout', () => {
        david.style.opacity = "0";
        console.log("fora");
    });

    mineIp.addEventListener('click', clipboardCopy);

    async function clipboardCopy() {
        let text = "Soikep.aternos.me";
        await navigator.clipboard.writeText(text);
    }
});
