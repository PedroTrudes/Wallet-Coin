import InstagramIcon from '../../assets/icons/social/instagramicon.png';
import FacebookIcon from '../../assets/icons/social/facebook.png';
import LinkedinIcon from '../../assets/icons/social/linkedin.png';
import DribbbleIcon from '../../assets/icons/social/dribbble.png';
import TwitterIcon from '../../assets/icons/social/twitter.png';
import PinterestIcon from '../../assets/icons/social/pinterest.png';
import TelegramIcon from '../../assets/icons/social/telegram.png';
import WhatsappIcon from '../../assets/icons/social/whatsapp.png';
import LogoFooterIcon from '../../assets/icons/LogoFooter.png';
import './style.css'

function Footer() {
    return(
        <div className="containerFooter">
            <div className="footerSocialMedia">
                <div className="footerLogo">
                    <img src={LogoFooterIcon} alt="Logo Wallet Coin" />
                </div>
                <div className="footerSocialIcons">
                     <span className="socialText">Social media</span>
                     <div className="socialIcons">
                        <img src={InstagramIcon} alt="Logo Instagram" />
                        <img src={FacebookIcon} alt="Logo Facebook" />
                        <img src={LinkedinIcon} alt="Logo Linkedin" />
                        <img src={DribbbleIcon} alt="Logo Behance" />
                        <img src={TwitterIcon} alt="Logo Twitter" />
                        <img src={PinterestIcon} alt="Logo Pinterest" />
                        <img src={TelegramIcon} alt="Logo Telegram" />
                        <img src={WhatsappIcon} alt="Logo WhatsApp" />
                     </div>
                </div>
            </div>
            <div className="DividerFooter"></div>
            <div className="containerInformationFooter">
                <p >Se inscreva para receber atualizações todos os meses sobre as criptomoedas</p>
                <div className="inputFooter">
                    <input type="text" placeholder="Coloque seu email aqui..."/>
                    <button>SUBSCRIB</button>
                </div>
            </div>
            <div className="containerAssingCreator">
                <span>@Desenvolvido por DevTrudes</span>
            </div>
        </div>
    )
}

export default Footer;