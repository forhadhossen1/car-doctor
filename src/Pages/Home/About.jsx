import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className='bg-slate-200'>
            <h2 className='text-5xl font-bold text-center pt-10 text-orange-700'>About Us</h2>
            <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 md:mt-20'>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default About;