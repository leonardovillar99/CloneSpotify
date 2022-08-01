let navList = document.getElementById('navbar')

function openBtn(){
    navList.style.right = '0'
}

function closeBtn(){
    navList.style.left = '-290px'
}

const el = document.getElementById('dropdownspan')

const cardBox = document.getElementById('card_box')

el.addEventListener('mouseover', function handleMouseOver(){
    cardBox.style.display = 'block';
    cardBox.style.transition = 'all .2s'
})

el.addEventListener('mouseout', function handleMouseOut() {
    cardBox.style.display = 'none';
})
