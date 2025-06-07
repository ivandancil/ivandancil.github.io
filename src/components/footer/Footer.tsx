import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ivan</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">
                        About
                    </a>
                </li>
                
                 <li>
                    <a href="#skills" className="footer_link">
                        Skills
                    </a>
                </li>
                
                 <li>
                    <a href="#portfolio" className="footer_link">
                        Projects
                    </a>
                </li>
            </ul>

            <div className="footer_social">
                 <a href="" className="footer_social-link" target='_blank'>
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/ivandancil-tech/" className="footer_social-link" target='_blank'>
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/ivandancil" className="footer_social-link" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer