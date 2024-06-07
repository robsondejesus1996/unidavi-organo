
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="https://www.unidavi.edu.br/images/logo-unidavi.png" alt="" />
        </section>
        <section>
            <p>
             © Direitos de Cópia 1999 - 2024. UNIDAVI
            </p>
        </section>
    </footer>)
}

export default Rodape
