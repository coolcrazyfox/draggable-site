$.confirm = function (options) {
    return new Promise((res, rej)=>{
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onClose(){
                modal.destroy()
            },
            footerButtons: [
                {text: 'Cancel', type: 'secondary', handler() {
                        modal.close()
                        rej()
                }},
                {text: 'Delete', type: 'danger', handler() {
                        modal.close()
                        res()
                }}
            ]
        })
        setTimeout(()=> modal.open(), 100)
    })
}