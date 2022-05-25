function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('firstModal')
    modal.insertAdjacentHTML('afterbegin', `    
        <div class="modalOverlay">
            <div class="modalWindow">
                <div class="modalHeader">
                    <span class="modalTitle">Modal title</span>
                    <span class="modalClose">&times;</span>
                </div>
                <div class="modalBody">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>                
                </div>
                <div class="modalFooter">
                    <button>Ok</button>
                    <button>Cancel</button>                
                </div>
            </div>
        </div>
    `)
    return modal
}

$.modal = function (options){
    const $modal = _createModal(options)
    return {
        open(){},
        close(){},
        destroy(){}
    }
}