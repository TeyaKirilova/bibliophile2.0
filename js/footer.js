const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo-white.png" class="logo" alt="An image of the logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-tittle">fiction</li>
            <li><a href="#" class="footer-link">Adventure</a></li>
            <li><a href="#" class="footer-link">Fantasy</a></li>
            <li><a href="#" class="footer-link">Historical</a></li>
            <li><a href="#" class="footer-link">Horror</a></li>
            <li><a href="#" class="footer-link">Romance</a></li>
            <li><a href="#" class="footer-link">Science Fiction</a></li>
            <li><a href="#" class="footer-link">Thriller</a></li>
            <li><a href="#" class="footer-link">Young Adult</a></li>
        </ul>

        <ul class="category">
            <li class="category-tittle">nonfiction</li>
            <li><a href="#" class="footer-link">Art</a></li>
            <li><a href="#" class="footer-link">Business and Economics</a></li>
            <li><a href="#" class="footer-link">Essay</a></li>
            <li><a href="#" class="footer-link">History</a></li>
            <li><a href="#" class="footer-link">Humor</a></li>
            <li><a href="#" class="footer-link">Journalism</a></li>
            <li><a href="#" class="footer-link">Philosophy </a></li>
            <li><a href="#" class="footer-link">Science</a></li>
        </ul>
    </div>
</div>
    <p class="footer-tittle">contact information</p>
    <p class="info">support e-mails</p>
    <p class="info">telephone</p>
    <div class="footer-social-container">
        <div>
            <a href="terms&conditions.html" title="View our terms & conditions" class="social-link">terms & conditions</a>
            <a href="privacy-policies.html" title="View our privacy policies" class="social-link">privacy policies</a>
        </div>
        <div>
            <a href="https://www.instagram.com/little.book.space/?hl=en" title="Visit my personal bookstagram" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">©2022</p>
    `;
}

createFooter();