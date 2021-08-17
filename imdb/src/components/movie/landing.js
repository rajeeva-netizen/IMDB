import Movies from './movieComp'
import {connect} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Search from './searchComp'


function Landing({loading}){
    return(
        <>
        {/* search component is rendered */}
            <Search/>
            {/* movies and spinner is rendered based on the loading */}
            {
                loading?<Spinner/>:<Movies/>
            }
        </>
    )
}
//mapStateToProps is used for loading
const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing)