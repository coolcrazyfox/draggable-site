function _createModal(options){
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('firstModal')
    modal.insertAdjacentHTML('afterbegin', `    
        <div class="modalOverlay" data-close="true">
            <div class="modalWindow" style="width:${options.width || DEFAULT_WIDTH}">
                <div class="modalHeader">
                    <span class="modalTitle">${options.title || "Window"}</span>
                    ${options.closable ? `<span class="modalClose" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modalBody">
                    ${options.content || ''}              
                </div>
                <div class="modalFooter">
                    <button>Ok</button>
                    <button>Cancel</button>                
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options){
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    const modal = {
        open(){
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
            },ANIMATION_SPEED)
        },
    }

    $modal.addEventListener('click', ev =>{
        if (ev.target.dataset.close) {
            modal.close()
        }
    })
    return modal
}