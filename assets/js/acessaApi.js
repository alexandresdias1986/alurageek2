import {convertDados} from "converteDados.js";

async function listadeprodutos () {
    const listaAcessada = await fetch ( );
    const listaConvertida = await listaAcessada.json

    return listaConvertida;
}