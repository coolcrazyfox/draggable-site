const testImage = [
    {id: 1, title: '1', message: 'text1', img: 'img/1.jpg'},
    {id: 2, title: '2', message: 'text2', img: 'img/2.jpg'},
    {id: 3, title: '3', message: 'text3', img: 'img/3.jpg'},
    {id: 4, title: '1', message: 'text1', img: 'img/4.jpg'},
    {id: 5, title: '2', message: 'text2', img: 'img/5.jpg'},
    {id: 6, title: '3', message: 'text3', img: 'img/6.jpg'},
    {id: 7, title: '1', message: 'text1', img: 'img/7.jpg'},
    {id: 8, title: '2', message: 'text2', img: 'img/8.jpg'},
    {id: 9, title: '3', message: 'text3', img: 'img/9.jpg'},
    {id: 10, title: '1', message: 'text1', img: 'img/10.jpg'},
    {id: 11, title: '2', message: 'text2', img: 'img/11.jpg'},
    {id: 12, title: '3', message: 'text3', img: 'img/12.jpg'},
    {id: 13, title: '1', message: 'text1', img: 'img/13.jpg'},
    {id: 14, title: '2', message: 'text2', img: 'img/14.jpg'},
    {id: 15, title: '3', message: 'text3', img: 'img/15.jpg'},
    {id: 16, title: '1', message: 'text1', img: 'img/16.jpg'},
    {id: 17, title: '2', message: 'text2', img: 'img/17.jpg'},
    {id: 18, title: '3', message: 'text3', img: 'img/18.jpg'},
    {id: 19, title: '1', message: 'text1', img: 'img/19.jpg'},
    {id: 20, title: '2', message: 'text2', img: 'img/20.jpg'},
    {id: 21, title: '3', message: 'text3', img: 'img/21.jpg'},
    {id: 22, title: '1', message: 'text1', img: 'img/22.jpg'},
    {id: 23, title: '2', message: 'text2', img: 'img/23.jpg'},
    {id: 24, title: '3', message: 'text3', img: 'img/24.jpg'},
    {id: 25, title: '1', message: 'text1', img: 'img/25.jpg'},
    {id: 26, title: '2', message: 'text2', img: 'img/26.jpg'},
    {id: 27, title: '3', message: 'text3', img: 'img/27.jpg'},
    {id: 28, title: '1', message: 'text1', img: 'img/28.jpg'},
    {id: 29, title: '2', message: 'text2', img: 'img/29.jpg'},
    {id: 30, title: '3', message: 'text3', img: 'img/30.jpg'},
    {id: 31, title: '1', message: 'text1', img: 'img/31.jpg'},
    {id: 32, title: '2', message: 'text2', img: 'img/32.jpg'},
    {id: 33, title: '3', message: 'text3', img: 'img/33.jpg'},
    {id: 34, title: '1', message: 'text1', img: 'img/34.jpg'},
    {id: 35, title: '2', message: 'text2', img: 'img/35.jpg'},
    {id: 36, title: '3', message: 'text3', img: 'img/36.jpg'},
    {id: 37, title: '1', message: 'text1', img: 'img/37.jpg'},
    {id: 38, title: '2', message: 'text2', img: 'img/38.jpg'},
    {id: 39, title: '3', message: 'text3', img: 'img/39.jpg'},
    {id: 40, title: '1', message: 'text1', img: 'img/40.jpg'},
    {id: 41, title: '2', message: 'text2', img: 'img/41.jpg'},
    {id: 42, title: '3', message: 'text3', img: 'img/42.jpg'},
    {id: 43, title: '1', message: 'text1', img: 'img/43.jpg'},
    {id: 44, title: '2', message: 'text2', img: 'img/44.jpg'},
    {id: 45, title: '3', message: 'text3', img: 'img/45.jpg'},
    {id: 46, title: '1', message: 'text1', img: 'img/46.jpg'},
    {id: 47, title: '2', message: 'text2', img: 'img/47.jpg'},
    {id: 48, title: '3', message: 'text3', img: 'img/48.jpg'},
    {id: 49, title: '1', message: 'text1', img: 'img/49.jpg'},
    {id: 50, title: '2', message: 'text2', img: 'img/50.jpg'},
    {id: 51, title: '3', message: 'text3', img: 'img/51.jpg'},
]
const toHTML = testImage => `
    <div class="gallery__item">
        <img src="${testImage.img}" 
        alt="${testImage.title}"
         data-btn="message" 
         data-id="${testImage.id}">
    </div>`

function render() {
    const html = testImage.map(toHTML).join('')//.map(im=>toHTML(im))
    document.querySelector('#testImage').innerHTML = html
}

render()
const nameHotelModal = $.modal({
    title: 'Hotels',
    closable: true,
    // content:`
    // <h4>Modal is working</h4>
    // <p>Lorem ipsum dolor sit amet, consectetur.</p>`,
    width: '400px',
    footerButtons: [
        {
            text: 'Ok', type: 'primary', handler() {
                nameHotelModal.close()
            }
        },
        // {text: 'Cancel', type: 'danger', handler(){
        //         console.log('Danger btn clicked')
        //         nameHotelModal.close()
        //     }}
    ]
})
document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = event.target.dataset.id
    if (btnType === 'message') {
        nameHotelModal.open()
    }
})