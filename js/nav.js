const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/logo.png" class="brand-logo" alt="An image of the logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search">
            <button class="search-btn">search</button>
        </div>
        <a>
        <a href="login.html" title="Go to your profile"><img src="img/user.png" alt="An image of the profile icon"></a>
        </a>
        <a href="#"title="Go to card"><img src="img/cart.png" alt="An image of the card icon"></a>
    </div>
    </div>
    <ul class="links-container">
    <li class="link-item"><a href="index.html" title="Head back to the homepage" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">coming soon</a></li>
        <li class="link-item"><a href="#" class="link">books</a></li>
    </ul>
    `;
}

createNav();
