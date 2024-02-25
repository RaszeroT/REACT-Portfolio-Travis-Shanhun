import "../style/footer.css"

const Footer = () => {

    return ( 
        <footer>
            <nav className="nav footer-nav">
                <a href="https://github.com/RaszeroT">GitHub</a>
                <a href="https://www.linkedin.com/in/travis-shanhun-4340b62a1/">LinkedIn</a>
                <a href="https://www.instagram.com/shanhun.codes/">Instagram</a>
                <div className="designs">
                    <p>Designed by Travis Shanhun</p>
                    <p><span className="copy">&copy;</span>2024</p>
                </div>
            </nav>
        </footer>
     );
}
 
export default Footer;