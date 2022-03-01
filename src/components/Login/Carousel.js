import { Carousel } from "react-bootstrap";

export default function LoginCarousel() {
    return(
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="text-light mb-4">Faciliter votre réussite</h2>
            <p>
                Notre outil référence pour toi les offres de stage, 
                d'alternance ou encore de professionnalisation selon votre ville et votre parcours.
                Pour cela, il te suffit de commencer à chercher !
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}