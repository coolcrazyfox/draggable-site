let testImage = [
    {id: 1, title: 'Four Seasons Hotel Lion Palace', message: '5 stars', img: 'img/1.jpg'},
    {id: 2, title: 'The Atlantis', message: '5 stars', img: 'img/2.jpg'},
    {id: 3, title: 'The Oberoi Amarvilas', message: '5 stars', img: 'img/3.jpg'},
    {id: 4, title: 'Monastero Santa Rosa', message: '5 stars', img: 'img/4.jpg'},
    {id: 5, title: 'Atlantis The Palm', message: '5 stars', img: 'img/5.jpg'},
    {id: 6, title: 'Burj Al Arab', message: '5 stars', img: 'img/6.jpg'},
    {id: 7, title: 'Château Frontenac', message: '5 stars', img: 'img/7.jpg'},
    {id: 8, title: 'Mardan Palace', message: '5 stars', img: 'img/8.jpg'},
    {id: 9, title: 'Marina Bay Sands', message: '5 stars', img: 'img/9.jpg'},
    {id: 10, title: 'Burj Al Arab', message: '5 stars', img: 'img/10.jpg'},
    {id: 11, title: 'Mardan Palace', message: '5 stars', img: 'img/11.jpg'},
    {id: 12, title: 'Mardan Palace', message: '5 stars', img: 'img/12.jpg'},
    {id: 13, title: 'Monastero Santa Rosa', message: '5 stars', img: 'img/13.jpg'},
    {id: 14, title: 'Burj Al Arab', message: '5 stars', img: 'img/14.jpg'},
    {id: 15, title: 'Marina Bay Sands', message: '5 stars', img: 'img/15.jpg'},
    {id: 16, title: 'Shangri-La Hotel', message: '5 stars', img: 'img/16.jpg'},
    {id: 17, title: 'Château Frontenac', message: '5 stars', img: 'img/17.jpg'},
    {id: 18, title: 'Atlantis The Palm', message: '5 stars', img: 'img/18.jpg'},
    {id: 19, title: 'Château Frontenac', message: '5 stars', img: 'img/19.jpg'},
    {id: 20, title: 'Burj Al Arab', message: '5 stars', img: 'img/20.jpg'},
    {id: 21, title: 'Oberoi Amarvilas', message: '4 stars', img: 'img/21.jpg'},
    {id: 22, title: 'Caruso Ravello', message: '4 stars', img: 'img/22.jpg'},
    {id: 23, title: 'Sheraton Huzhou Hot Spring Resort', message: '5 stars', img: 'img/23.jpg'},
    {id: 24, title: 'Palazzo Resort Hotel & Casino', message: '5 stars', img: 'img/24.jpg'},
    {id: 25, title: 'Monastero Santa Rosa', message: '4 stars', img: 'img/25.jpg'},
    {id: 26, title: 'The Omnia', message: '5 stars', img: 'img/26.jpg'},
    {id: 27, title: 'Mandapa, a Ritz-Carlton Reserve', message: '5 stars', img: 'img/27.jpg'},
    {id: 28, title: 'The Ritz-Carlton', message: '5 stars', img: 'img/28.jpg'},
    {id: 29, title: 'Radisson Blu', message: '5 stars', img: 'img/29.jpg'},
    {id: 30, title: 'Grand Lisboa Macao Hotel', message: '4 stars', img: 'img/30.jpg'},
    {id: 31, title: 'Grand Lisboa Macao Hotel', message: '4 stars', img: 'img/31.jpg'},
    {id: 32, title: 'Jumeirah Emirates Towers Hotel', message: '5 stars', img: 'img/32.jpg'},
    {id: 33, title: 'Swissotel The Stamford', message: '5 stars', img: 'img/33.jpg'},
    {id: 34, title: 'Hotel Carlton on the Grand Canal', message: '4 stars', img: 'img/34.jpg'},
    {id: 35, title: 'The Hotel Katikies', message: '4 stars', img: 'img/35.jpg'},
    {id: 36, title: 'Magic Mountains Lodge', message: '3 stars', img: 'img/36.jpg'},
    {id: 37, title: 'Park Hyatt', message: '5 stars', img: 'img/37.jpg'},
    {id: 38, title: 'Daintree Eco Lodge & Spa', message: '4 stars', img: 'img/38.jpg'},
    {id: 39, title: 'Riu Palace Las Americas', message: '5 stars', img: 'img/39.jpg'},
    {id: 40, title: 'CRYSTAL FAMILY RESORT & SPA', message: '5 stars', img: 'img/40.jpg'},
    {id: 41, title: 'Emirates Palace', message: '5 stars', img: 'img/41.jpg'},
    {id: 42, title: 'Emirates Palace', message: '5 stars', img: 'img/42.jpg'},
    {id: 43, title: 'Titanic Beach Lara', message: '5 stars', img: 'img/43.jpg'},
    {id: 44, title: 'Concorde De Luxe Resort', message: '5 stars', img: 'img/44.jpg'},
    {id: 45, title: 'Adam & Eve Hotel', message: '4 stars', img: 'img/45.jpg'},
    {id: 46, title: 'JUMEIRAH BEACH HOTEL', message: '5 stars', img: 'img/46.jpg'},
    {id: 47, title: 'Inntel Amsterdam Zaandamn', message: '5 stars', img: 'img/47.jpg'},
    {id: 48, title: 'GOLD ISLAND ', message: '5 stars', img: 'img/48.jpg'},
    {id: 49, title: 'Ritz-Carlton', message: '5 stars', img: 'img/49.jpg'},
    {id: 50, title: 'Hyatt Capital Gate', message: '5 stars', img: 'img/50.jpg'},
    {id: 51, title: 'Al Bahar', message: '5 stars', img: 'img/51.jpg'}
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
    width: '400px',
    footerButtons: [
        {
            text: 'Order room', type: 'primary', handler() {
                nameHotelModal.close()
            }
        },
        {text: 'Cancel', type: 'danger', handler(){
                nameHotelModal.close()
            }}
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
        <strong>Hotel ${image.title}: <strong>${image.message}</strong></strong> `)
        nameHotelModal.open()
    }
    else if (btnType === 'remove'){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>The hotel: <strong>${image.title}</strong> will be delete</p>`
        }).then(()=>{
            testImage =testImage.filter(f=>f.id !==id)
            render()
        }).catch(()=>{
            // alert('Click cancel')
            console.log('Click cancel')
        })
    }
})