import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


// card component is used from ant design as the third party component
// movie props is revcieved from the movieComp

export default function movieCard({movie}){
    return(
        <>
        <Card style={{ width: '18rem', margin:'0px 0px 0px 50px'  }}>
        {/* card.img is used for poster  */}
        <Card.Img style={{ width: '290px', height:'300px' }}variant="top" src={movie.Poster} />
        <Card.Body>
        {/* title is used here */}
             <Card.Title>{movie.Title}</Card.Title>
             {/* year of the movie */}
             <Card.Text>
                  {movie.Year}
             </Card.Text>
             {/* link to the particular movie is rendered using imdbID */}
             <Link to={'/movies/'+ movie.imdbID}>
                <Button variant="primary">Click here</Button>
            </Link>
        </Card.Body>
        </Card>
        </>
    )
}
