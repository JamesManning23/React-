import image from "./Assets/image.jpg"
import InformationCSS from './information.module.css' 
export default function Information() {
    return (
        <header className={InformationCSS.header}>
        <img src={image} alt="james manning image." />
        <h1>James Manning</h1>
        <h2>Frontend Developer</h2>
        <button type="button" class="btn btn-light btn-lg" className={InformationCSS.btn1}>Large button</button>
        <button type="button" class="btn btn-primary btn-lg" className={InformationCSS.btn2}>Large button</button>
        </header>
    )
}