const Modal = {
    open() {
        let novaTransacao = document.querySelector(".modal-overlay")
        novaTransacao.classList.add('active')
        },
    

    close() {
        let fecharTransacao = document.querySelector(".modal-overlay")
        fecharTransacao.classList.remove('active') 
    }
}