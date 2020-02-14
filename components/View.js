window.onload=function()
{
    fetch('./../components/View.php')
    .then(response=>response.json())
    .then(data=>{
        let text
        let header = document.createElement("div")
            header.setAttribute("class","rdn row bg-dark")
            document.getElementById("cb").appendChild(header)
        
        let col1 = document.createElement("div")
            col1.setAttribute("class","col-2 text-white")
        text=document.createTextNode("Fecha Recepcion")
            col1.appendChild(text)
            header.appendChild(col1)

        let col2 = document.createElement("div")
            col2.setAttribute("class","col-2 text-white")
        text=document.createTextNode('Fecha Entrega')
            col2.appendChild(text)
            header.appendChild(col2)

        let col3 = document.createElement("div")
            col3.setAttribute("class","col-2 text-white")
        text=document.createTextNode('Cliente')
            col3.appendChild(text)
            header.appendChild(col3)

        let col4 = document.createElement("div")
            col4.setAttribute("class","col-1 text-white")
        text=document.createTextNode('Kilos')
            col4.appendChild(text)
            header.appendChild(col4)

        let col5 = document.createElement("div")
            col5.setAttribute("class","col-2 text-white")
        text=document.createTextNode("Importe")
            col5.appendChild(text)
            header.appendChild(col5)

        let col6 = document.createElement("div")
            col6.setAttribute("class","col-3 text-white" )
        text=document.createTextNode("Observaciones")
            col6.appendChild(text)
            header.appendChild(col6)



        data.map((value)=>{
            let row = document.createElement("div")
                row.setAttribute("class","row")
            document.getElementById("cb").appendChild(row)

            let Recepcion = document.createElement("div")
                Recepcion.setAttribute("class","col-2")
            text=document.createTextNode(value.Fecha_Recepcion)
                Recepcion.appendChild(text)
            row.appendChild(Recepcion)

            let Entrega = document.createElement("div")
                Entrega.setAttribute("class","col-2")
            text=document.createTextNode(value.Fecha_Entrega)
                Entrega.appendChild(text)
            row.appendChild(Entrega)

            let Cliente = document.createElement("div")
                Cliente.setAttribute("class","col-2")
            text=document.createTextNode(value.Cliente)
                Cliente.appendChild(text)
            row.appendChild(Cliente)

            let Kg = document.createElement("div")
                Kg.setAttribute("class","col-1")
            text=document.createTextNode(value.Kilos)
                Kg.appendChild(text)
            row.appendChild(Kg)

            let Importe = document.createElement("div")
                Importe.setAttribute("class","col-2")
            text=document.createTextNode("$"+value.Importe)
                Importe.appendChild(text)
            row.appendChild(Importe)

            let Observaciones = document.createElement("div")
                Observaciones.setAttribute("class","col-3")
            text=document.createTextNode(value.Observaciones)
                Observaciones.appendChild(text)
            row.appendChild(Observaciones)
        })
    })
}