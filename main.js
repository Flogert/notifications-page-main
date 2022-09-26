const markRead = document.querySelector('.read');
const unread = document.querySelector('.unread');
const dots = [...document.querySelectorAll('.dot')];

markRead.addEventListener('click', (e) => {
    e.preventDefault();
    dots.forEach(x => {
       x.style.visibility = 'hidden';
    })
    unread.innerHTML = '0';
});