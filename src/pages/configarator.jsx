import { useSnapshot } from 'valtio';
import { state } from './color';
import { useState } from 'react';

function Configurator({ seatcolor, rimcolorokay }) {
    const snap = useSnapshot(state);
    useState(
        console.log("rimcolorokay:", seatcolor)

    );


    return (
        <div className="text-amber-50 text-2xl p-2">
            <h1 className="font-bold text-2xl p-1">Configurator</h1>

            <h2 className="font-bold text-[15px] p-1">Metal Color</h2>
            <div className="color-options">
                {snap.colors.map((color) => (
                    <div
                        key={color}
                        className="circle"
                        style={{ background: color }}
                        onClick={() => (state.color = color)}
                    />
                ))}
            </div>

            {seatcolor && (
                <>
                    <h2 className="font-bold text-[15px] p-1">Seat Color</h2>
                    <div className="color-options">
                        {snap.seatcolors.map((color) => (
                            <div
                                key={color}
                                className="circle"
                                style={{ background: color }}
                                onClick={() => (state.seatcolor = color)}
                            />
                        ))}
                    </div>
                </>
            )}

            {rimcolorokay && (
                <>
                    <h2 className="font-bold text-[15px] p-1">Brake Color</h2>
                    <div className="color-options">
                        {snap.rimcolors.map((rimcolor) => (
                            <div
                                key={rimcolor}
                                className="circle"
                                style={{ background: rimcolor }}
                                onClick={() => (state.rimcolor = rimcolor)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Configurator;
