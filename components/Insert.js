function NavBar()
{
    var a = document.createElement("a")
    a.setAttribute("class","navbar-brand")
    a.setAttribute("href","./../Index.html")
    var text = document.createTextNode("Menú")
    a.appendChild(text)
    document.getElementById("NavBar").appendChild(a)

    var btn = document.createElement("button")
    btn.setAttribute("id","NavBtn")
    btn.setAttribute("class","navbar-toggler")
    btn.setAttribute("type","button")
    btn.setAttribute("data-toggle","collapse")
    btn.setAttribute("data-target","#navbarSupportedContent")
    btn.setAttribute("aria-controls","navbarSupportedContent")
    btn.setAttribute("aria-expanded","false")
    btn.setAttribute("aria-label","Toggle navigation")
    document.getElementById("NavBar").appendChild(btn)

    var spn= document.createElement("span")
    spn.setAttribute("class","navbar-toggler-icon")
    document.getElementById("NavBtn").appendChild(spn)

    var collapse= document.createElement("div")
    collapse.setAttribute("class","collapse navbar-collapse")
    collapse.setAttribute("id","navbarSupportedContent")
    document.getElementById("NavBar").appendChild(collapse)

    var ul=document.createElement("ul")
    ul.setAttribute("id","ul")
    ul.setAttribute("class","navbar-nav mr-auto")
    document.getElementById("navbarSupportedContent").appendChild(ul)

    let links = ["Insert","Update","View","Delete"]
    
    for(let i=0;i<4;i++)
    {
        var li = document.createElement("li")
        li.setAttribute("id",i)
        li.setAttribute("class","nav-item")
        document.getElementById("ul").appendChild(li)

        var link = document.createElement("a")
        link.setAttribute("class","btn nav-link")
        link.setAttribute("href","./../views/"+links[i]+".html")
        link.setAttribute("class","btn nav-link")

        var txt = document.createTextNode(links[i])
        link.appendChild(txt)

        document.getElementById(i).appendChild(link)
    }
}
window.onload=function()
{
    this.NavBar()
    var formulario = document.getElementById('form')
    var respuesta = document.getElementById('answer')
    formulario.addEventListener('submit',function(e){
        e.preventDefault()
        let data = new FormData(formulario)
        let txt
        let div = document.createElement("div")
        if(confirm('Sus datos son correctos?'))
        {
            fetch('./../components/Insert.php',{
                method: 'POST',
                body: data
            }).then(response=>response.json())
            .then(responseData=>{
                if(data ==='Error')
                {
                    div.setAttribute("class","alert alert-danger")
                    txt = document.createTextNode("Problema de registro")
                    div.appendChild(txt)
                    respuesta.appendChild(div)
                }
                else
                {
                    div.setAttribute("class","alert alert-primary")
                    txt = document.createTextNode("Registro Exitoso :) !!!!")
                    div.appendChild(txt)
                    respuesta.appendChild(div)
                }
            }).catch((error)=>{
                console.log(error)
                div.setAttribute("class","alert alert-danger")
                txt = document.createTextNode("Error, algo salio mal intentelo de nuevo")
                div.appendChild(txt)
                respuesta.appendChild(div)
            })
        }
    })
}