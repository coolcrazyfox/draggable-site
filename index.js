const testImage= [
    {id:1, title: '1', message:'text1', img: 'img/1.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/2.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/3.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/4.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/5.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/6.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/7.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/8.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/9.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/10.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/11.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/12.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/13.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/14.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/15.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/16.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/17.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/18.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/19.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/20.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/21.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/22.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/23.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/24.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/25.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/26.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/27.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/28.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/29.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/30.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/31.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/32.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/33.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/34.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/35.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/36.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/37.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/38.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/39.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/40.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/41.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/42.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/43.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/44.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/45.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/46.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/47.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/48.jpg'},
    {id:1, title: '1', message:'text1', img: 'img/49.jpg'},
    {id:2, title: '2', message:'text2', img: 'img/50.jpg'},
    {id:3, title: '3', message:'text3', img: 'img/51.jpg'},
]
const toHTML=(testImage)=>`
    <div class="gallery__item"><img src="${testImage.img}" alt="${testImage.title}" data-btn="message"></div>`


function render(){
    const html = testImage.map(toHTML).join('')//.map(im=>toHTML(im))
    document.querySelector('#testImage').innerHTML= html
}
render()
const modal = $.modal({
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
document.addEventListener('click', event=>{
    event.preventDefault()
    const btnType=event.target.dataset.btn
    if (btnType==='message'){
        modal.open()
    }
})