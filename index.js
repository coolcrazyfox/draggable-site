const testImage = [
    {id: 1, title: '1', message: 'text1333333', img: 'img/1.jpg'},
    {id: 2, title: '2', message: 'text22222', img: 'img/2.jpg'},
    {id: 3, title: '3', message: 'text32222', img: 'img/3.jpg'},
    {id: 4, title: '11', message: 'text11111', img: 'img/4.jpg'},
    {id: 5, title: '21', message: 'text21111', img: 'img/5.jpg'},
    {id: 6, title: '31', message: 'text31111', img: 'img/6.jpg'},
    {id: 7, title: '12', message: 'text999991', img: 'img/7.jpg'},
    // {id: 8, title: '22', message: 'text2999', img: 'img/8.jpg'},
    // {id: 9, title: '32', message: 'text39999', img: 'img/9.jpg'},
    // {id: 10, title: '13', message: 'text1888', img: 'img/10.jpg'},
    // {id: 11, title: '23', message: 'text2888', img: 'img/11.jpg'},
    // {id: 12, title: '33', message: 'text3777', img: 'img/12.jpg'},
    // {id: 13, title: '14', message: 'text1777', img: 'img/13.jpg'},
    // {id: 14, title: '24', message: 'text2777', img: 'img/14.jpg'},
    // {id: 15, title: '34', message: 'text6666', img: 'img/15.jpg'},
    // {id: 16, title: '15', message: 'text1666', img: 'img/16.jpg'},
    // {id: 17, title: '25', message: 'text255', img: 'img/17.jpg'},
    // {id: 18, title: '35', message: 'text355', img: 'img/18.jpg'},
    // {id: 19, title: '16', message: 'text155', img: 'img/19.jpg'},
    // {id: 20, title: '26', message: 'text244', img: 'img/20.jpg'},
    // {id: 21, title: '36', message: 'text344', img: 'img/21.jpg'},
    // {id: 22, title: '17', message: 'text144', img: 'img/22.jpg'},
    // {id: 23, title: '27', message: 'text244', img: 'img/23.jpg'},
    // {id: 24, title: '37', message: 'text333', img: 'img/24.jpg'},
    // {id: 25, title: '18', message: 'text133', img: 'img/25.jpg'},
    // {id: 26, title: '28', message: 'text222', img: 'img/26.jpg'},
    // {id: 27, title: '38', message: 'text322', img: 'img/27.jpg'},
    // {id: 28, title: '19', message: 'text111', img: 'img/28.jpg'},
    // {id: 29, title: '29', message: 'text211', img: 'img/29.jpg'},
    // {id: 30, title: '39', message: 'text311', img: 'img/30.jpg'},
    // {id: 31, title: '10', message: 'text991', img: 'img/31.jpg'},
    // {id: 32, title: '20', message: 'text299', img: 'img/32.jpg'},
    // {id: 33, title: '30', message: 'text388', img: 'img/33.jpg'},
    // {id: 34, title: '111', message: 'text188', img: 'img/34.jpg'},
    // {id: 35, title: '211', message: 'text288', img: 'img/35.jpg'},
    // {id: 36, title: '311', message: 'text377', img: 'img/36.jpg'},
    // {id: 37, title: '122', message: 'text177', img: 'img/37.jpg'},
    // {id: 38, title: '222', message: 'text277', img: 'img/38.jpg'},
    // {id: 39, title: '322', message: 'text344', img: 'img/39.jpg'},
    // {id: 40, title: '133', message: 'text144', img: 'img/40.jpg'},
    // {id: 41, title: '233', message: 'text244', img: 'img/41.jpg'},
    // {id: 42, title: '333', message: 'text39', img: 'img/42.jpg'},
    // {id: 43, title: '144', message: 'text18', img: 'img/43.jpg'},
    // {id: 44, title: '244', message: 'text27', img: 'img/44.jpg'},
    // {id: 45, title: '344', message: 'text36', img: 'img/45.jpg'},
    // {id: 46, title: '155', message: 'text51', img: 'img/46.jpg'},
    // {id: 47, title: '255', message: 'text24', img: 'img/47.jpg'},
    // {id: 48, title: '355', message: 'text33', img: 'img/48.jpg'},
    // {id: 49, title: '156', message: 'text12', img: 'img/49.jpg'},
    // {id: 50, title: '256', message: 'text21', img: 'img/50.jpg'},
    // {id: 51, title: '356', message: 'text30', img: 'img/51.jpg'},
]
const toHTML = image => `
    <div class="gallery__item">
        <span data-btn="remove" data-id="${image.id}">x<img src="${image.img}" 
        alt="${image.title}"
         data-btn="message" 
         data-id="${image.id}"></span>        
               
    </div>`

function render() {
    const html = testImage.map(toHTML).join('')//.map(image=>toHTML(image))
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
const confirmModal = $.modal({
    title: 'Are you sure ?',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Close', type: 'secondary', handler() {
                confirmModal.close()
            }
        },
        {
            text: 'Delete', type: 'danger', handler() {
                confirmModal.close()
            }
        }
    ]
})
document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const image = testImage.find(i => i.id === id)

    if (btnType === 'message') {
        nameHotelModal.setContent(`
        <p>Hotel ${image.title}: <strong>${image.message}</strong></p>`)
        nameHotelModal.open()
    }
    else if (btnType === 'remove'){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>The hotel: <strong>${image.title}</strong> will be delete</p>`
        }).then(()=>{
            alert(`${image.title}`)
        }).catch(()=>{
            alert('error')
        })
    }
})