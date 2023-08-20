function Footer() {
    return(
        <div className="containerFooter">
            <div className="footerSocialMedia">
                <div className="footerLogo">
                    <img src="#" alt="Logo Wallet Coin" />
                </div>
                <div className="footerSocialIcons">
                     <span>Social media</span>
                     <div className="socialIcons">
                        <img src="#" alt="Logo Instagram" />
                        <img src="#" alt="Logo Facebook" />
                        <img src="#" alt="Logo Linkedin" />
                        <img src="#" alt="Logo Behance" />
                        <img src="#" alt="Logo Twitter" />
                        <img src="#" alt="Logo Pinterest" />
                        <img src="#" alt="Logo Telegram" />
                        <img src="#" alt="Logo WhatsApp" />
                     </div>
                </div>
            </div>
            <div className="DividerFooter"></div>
            <div className="containerInformationFooter">
                <p>Se inscreva para receber atualizações todos os meses sobre as criptomoedas</p>
                <div>
                    <input type="text" placeholder="Coloque seu email aqui..."/>
                    <button>Subscrib</button>
                </div>
            </div>
            <div className="containerAssingCreator">
                <span>@Desenvolvido por DevTrudes</span>
            </div>
        </div>
    )
}

export default Footer;