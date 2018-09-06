const outputDiv = document.querySelector("#output");

const Singleton = (function () {

    let instancia = null;
    let _contadorInstancia = 0;

    function inicializar() {

        return {

            getContadorInstancia: function () {
                return _contadorInstancia;
            }

        };

    };

    return {

        getInstancia: function () {

            if (instancia === null) {
                instancia = inicializar();
                _contadorInstancia++;
            }

            return instancia;
        }

    };

})();

function crearInstancia() {
    const instancia = Singleton.getInstancia();
    const count = instancia.getContadorInstancia();
    const el = document.createElement("p");
    el.textContent = "Instancias creadas: " + count;
    outputDiv.appendChild(el);
}