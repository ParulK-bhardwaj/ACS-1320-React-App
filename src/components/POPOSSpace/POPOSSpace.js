// import logo from './logo.svg'
import './POPOSSpace.css';

// Link on the other hand is for general navigation that might appear anywhere else. The big difference is NavLink offers the extra feature of activeClassName and Link doesn't have this.
import { Link } from 'react-router-dom';

//className for the top level element in the component  should match it's name. 
// This will help us remember what styles apply to what, 
// and keep us from using the same names in different files.

function POPOSSpace(props) {
    // The attributes above set the values of the properties name, image and address props
    const { name, image, address, hours, id } = props
    return (
        <section className='POPOSSpace'>
            <Link className='POPOSSpace-title' to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`}
                    width="300"
                    height="300"
                    alt="Spaces"
                />
            </Link> 
            <h1>
                <Link to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <section className='POPOSSpace-info'>
                <address>{address}</address>
                <time className='hours'>{hours}</time>
            </section>
        </section>
    )
};

export default POPOSSpace;