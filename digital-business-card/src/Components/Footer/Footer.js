import { SocialIcon } from 'react-social-icons'
import FooterCSS from './footer.module.css'
export default function Footer() {
    return(
        <div className={FooterCSS.div}>
        <SocialIcon url="https://twitter.com/jamesmanning21" />
        <SocialIcon url="https://www.facebook.com/JamesMannning/" />
        <SocialIcon url="https://www.instagram.com/james_manning19/" />
        <SocialIcon url="https://github.com/JamesManning23" />
        </div>
        

    )
}