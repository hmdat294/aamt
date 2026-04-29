import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="bg-black text-white p-4">

            <div className="container mx-auto flex gap-5">

                <Link to="/">Home</Link>

                <Link to="/products">
                    Products
                </Link>
              
                <Link to="/create-product">
                    Create Product
                </Link>

            </div>

        </header>

    );

}