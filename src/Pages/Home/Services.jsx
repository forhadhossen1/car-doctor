
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div>
                <h3 className="text-5xl text-center font-bold text-orange-700 py-12">Our Service Area</h3>
                <p className="text-center">the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid gap-6 py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServicesCard key={service._id}
                    service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;