const metodoPago = "crypto";


// El switch es básicamente para no poner tantos else if, ejecuta excatamente la misma función. Claramente, sólo lo usamos cuando tenemos muchos elseif, sino no lo usaríamos.
switch(metodoPago) { // Declaro el switch con la variable que quiero usar
    case "tarjeta": // Si variable es igual/es el caso de "tarjeta" entonces...
        console.log("Pagaste con tarjeta") // ...hace esto.
        break; // termino este case.
    case "crypto":
        console.log("Pagaste con crypto")
        break;
    case "cheque":
        console.log("Pagaste con un cheque")
        break;
    default: // Si metodoPago no tiene ningún valor o tiene un valor no aclarado entonces...
        console.log("No realizaste el pago") // ...ejecuta esto por defecto. Por eso es que se declara con "default".
        break;
}