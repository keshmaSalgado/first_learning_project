function About({about}) {

    return (
        <div className="text-amber-50 text-2xl p-5 bg-blue-800 rounded-2xl m-3">
            <h1 className="font-bold text-2xl p-1">About</h1>
            <p className="text-[12px] text-center font-bold">
                {about}
            </p>
        </div>
    );
}

export default About;