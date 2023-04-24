import "./Inicio.css"
import Flor from "./Assets/flor.svg"
import { useEffect } from "react"

const Inicio = () => {

    useEffect(() => {
        document.title = "Pampa Macramé"
    })

    return (
        <section className="inicio">
            <div className="inicio_carousell">
                

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100 carousel_img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100 carousel_img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100 carousel_img" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                
            </div>
            <div className="inicio_historia">
                <div className="inicio_historia-img">
                    <img className="inicio_historia-img--img" src={Flor} alt="Flor" />
                </div>
                <div className="inicio_historia-content">
                    <h2 className="inicio_historia-content--title">Mi historia</h2>
                    <p className="inicio_historia-content--description">Hola amigos! Voy a contarles un poco quién es la persona que está detrás de todos estos nudos. Mi nombre es Flor 🌺 tengo 26 años. Mi tía fue la que me acercó al arte de hacer nudos decorativos. En principio, comenzó como un hobbie, hasta que en poco tiempo se convirtió en mi pasión. El macramé para mí es mucho más que un arte, es una nudoterapia, es sanación, es amor. En él encontré un gran acompañamiento y distracción dentro de esos largos meses de aislamiento. Yo siempre digo que el macramé me salvó. De aquí viene mi gran aprecio y respeto por esta técnica tan antigua de hacer nudos con las manos. Espero que disfruten de mis trabajos tanto como yo lo hago. Los productos artesanales son únicos, hechos con cariño, dedicación y mucho trabajo.
Gracias por confiar ✨</p>
                </div>
            </div>
        </section>
    )

}
export default Inicio


