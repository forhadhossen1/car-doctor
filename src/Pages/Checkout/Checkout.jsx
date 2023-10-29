import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service || {};
    const { user } = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const booking = {
            customerName: name,
            date,
            email,
            img,
            service: title,
            service_id: _id,
            price: price
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                alert('Service book successfully')
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold py-8 text-center">Booking Service : <span className="text-orange-700"> {title}</span> </h2>
            <div className="hero min-h-[70vh] bg-base-300">
                <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                    <form onSubmit={handleBookService} className="card-body">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={'$' + price} placeholder="price" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Info</span>
                            </label>
                            <textarea placeholder="Your Message" className="input input-bordered" required />
                        </div> */}


                        <div className="form-control mt-6">

                            <input className="btn btn-secondary btn-block" type="submit" value="Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;