import React, { useEffect } from "react";
import * as Tone from "tone";
import Envelope from "./Envelope";

export default function Oscillator({ getOscillator, tweek }) {
    let oscillator = new Tone.FMOscillator({
        modulationIndex: 0,
        frequency: 60,
        volume: -100,
    }).start();

    getOscillator(oscillator);

    return (
        <div>
            <h3>Oscillator</h3>
            <p>Frequency</p>
            <input
                type="range"
                min={4}
                max={3000}
                defaultValue={100}
                onChange={(e) =>
                    tweek({ param: "detune", value: e.target.value })
                }
            ></input>

            <p>Modulation Frequency</p>
            <input
                type="range"
                min={0}
                max={10}
                step={0.1}
                onChange={(e) => {
                    tweek({
                        param: "harmonicity",
                        value: e.target.value,
                    });
                }}
            ></input>

            <p>Modulation Amount</p>
            <input
                type="range"
                min={0}
                max={10}
                step={0.1}
                onChange={(e) => {
                    tweek({
                        param: "modulationIndex",
                        value: e.target.value,
                    });
                }}
            ></input>
        </div>
    );
}
