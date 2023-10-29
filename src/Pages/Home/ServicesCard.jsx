import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const {_id, title, img, price } = service || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="img" className="h-[300px] w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-red-600 font-bold">Price : {price} $</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Get Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;