function Contact() {

    return (
        <div className="p-3 flex-col">
            <h1 className="font-bold text-2xl p-1">Contact</h1>
            <p>Name:</p>
            <input className="border-2" type="text" />
            <p>ID:</p>
            <input className="border-2" type="number" />
            <p>Number:</p>
            <input  className="border-2" type="number" />
            <p>Email:</p>
            <input className="border-2" type="email" />
            <button className="bg-orange-500 p-2 rounded-2xl border-4 hover:bg-amber-50 hover:text-black">Buy the car</button>
        </div>
    );
}

export default Contact;

{/* <input type="text" /> */ }