const myModal = $.modal({
    title:'My modal',
    closable: true,
    content:`
    <h4>Modal is working</h4> 
    <p>Lorem ipsum dolor sit amet, consectetur.</p>`,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
                console.log('Primary btn clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler(){
                console.log('Danger btn clicked')
                modal.close()
            }}
    ]
})
