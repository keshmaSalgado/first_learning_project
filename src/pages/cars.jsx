import { Link, useNavigate } from "react-router-dom";

function Cars() {
    const navigate = useNavigate();

    const cars = [
        {
            carmodel: "huracan",
            name: "Lamborghini Huracán Evo RWD",
            image: "./assets/lamborginiharucan.png",
            position: -2.5,
            about: 'The Lamborghini Huracán (Spanish for "hurricane"; [uɾaˈkan]) is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo.[5] The Huracán was revealed online in December 2013,[6] making its worldwide debut at the 2014 Geneva Auto Show[7] and was released in the market in the second quarter of 2014.',
            seatcolor: true,
            rimcolorokay: true
        },
        {
            carmodel: "sian",
            name: "Lamborghini Sian",
            image: "./assets/lamborghinisian.png",
            position: -0.72,
            about: 'Powered by an electrically assisted 6.5-liter V-12 mounted in the middle of the car, the all-wheel-drive 2021 Sián produces a combined 808 horsepower',
            seatcolor: true,
            rimcolorokay: false
        },
        {
            carmodel: "huarya",
            name: "Pegani Huarya",
            image: "./assets/peganihuarya.png",
            position: 2,
            about: 'Powered by an electrically assisted 6.5-liter V-12 mounted in the middle of the car, the all-wheel-drive 2021 Sián produces a combined 808 horsepower',
            seatcolor: false,
            rimcolorokay: false
        },
    ];

    return (
        <div className="min-h-screen bg-black text-amber-50 p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 border-2 border-double rounded-md px-6 py-2 text-lg sm:text-2xl font-bold italic hover:bg-amber-50 hover:text-black transition"
            >
                👈 Back
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cars.map((car, index) => (
                    <Link
                        key={index}
                        to="/carpage"
                        state={{
                            carmodel: car.carmodel,
                            name: car.name,
                            position: car.position,
                            about: car.about,
                            seatcolor: car.seatcolor,
                            rimcolorokay: car.rimcolorokay

                        }}
                        className="block bg-black border-2 rounded-3xl p-4 hover:bg-amber-50 hover:text-black transition"
                    >
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-60 object-cover rounded-2xl mb-4"
                        />
                        <p className="text-xl text-center font-semibold">{car.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cars;