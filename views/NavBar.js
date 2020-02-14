function Nav()
{
    var a = document.createElement("a")
    a.setAttribute("class","navbar-brand")
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
        link.setAttribute("href","views/"+links[i]+".html")
        link.setAttribute("class","btn nav-link")

        var txt = document.createTextNode(links[i])
        link.appendChild(txt)

        document.getElementById(i).appendChild(link)
    }
}
window.onload=function()
{
    this.Nav()
    let formActivar = document.getElementById("Activar")
    formActivar.addEventListener('submit',e=>{
        e.preventDefault()
        let mySubmit = new FormData(formActivar)
        mySubmit.append('Iniciar',1)
        fetch('./config/Conect.php',{
            method:'POST',
            body:mySubmit
        }).then(response=>response.json())
        .then(response=>{
            if(response==='Activado')
                alert("Activación Exitosa!!!")
            else
                alert("Error de activación")
        }).catch(e=>{
            alert('Error',e)
            console.log(e)
        })
    })

    let formDesactivar = document.getElementById("Desactivar")
    formDesactivar.addEventListener('submit',e=>{
        e.preventDefault()
        let mySubmit = new FormData(formDesactivar)
        mySubmit.append('Terminar',1)
        fetch('./config/Conect.php',{
            method:'POST',
            body:mySubmit
        }).then(response=>response.json())
        .then(response=>{
            if(response=='Desactivado')
                alert("Desactivación Exitosa!!!")
            else
                alert("Error de Desactivación")
        }).catch(e=>{
            alert('Error',e)
            console.log(e)
        })
    })
}
