const modalDatos = new bootstrap.Modal(document.getElementById(MDatos))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', 'btn_editar', e =>{
    const fila = e.target.parentNode.parentNode

    id_editar.value = fila.children[0].innerHTML
    usuario_editar.value = fila.children[1].innerHTML
    gmail_editar = fila.children[2].innerHTML
    nombre_editar.value = fila.children[3].innerHTML
    apellidoP_editar = fila.children[4].innerHTML
    apellidoM_editar = fila.children[5].innerHTML
    curp_editar = fila.children[6].innerHTML
    domicilio_editar = fila.children[7].innerHTML
    colonia_editar = fila.children[8].innerHTML
    ciudad_editar = fila.children[9].innerHTML
    telefono_editar = fila.children[10].innerHTML
    
    modalDatos.show()
})

