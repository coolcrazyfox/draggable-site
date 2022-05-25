Element.prototype.appendAfter = function (element){
    element.parentNode.insertBefore(this, element.nextSibling)
}
function _createModalFooter(buttons=[]){
    if (buttons.length === 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modalFooter')
    return wrap
}

function _createModal(options) {
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
                <div class="modalBody" data-content>
                    ${options.content || ''}              
                </div>                
            </div>
        </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))

    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false
    const modal = {
        open() {
            if (destroyed) {
                return
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }
    const listener = e => {
        if (e.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', ev => {
        if (ev.target.dataset.close) {
            modal.close()
        }
    })
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}