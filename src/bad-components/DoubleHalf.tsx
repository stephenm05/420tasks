import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler( { val, valSetter }: { val: number, valSetter: (num: number) => void }): React.JSX.Element {
    return (
        <Button onClick={() => {valSetter(val*2)}}>
            Double
        </Button>
    );
}

function Halver( { val, valSetter }: { val: number, valSetter: (num: number) => void }): React.JSX.Element {
    return (
        <Button onClick={() => {valSetter(val/2)}}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler val={dhValue} valSetter={setDhValue}></Doubler>
            <Halver val={dhValue} valSetter={setDhValue}></Halver>
        </div>
    );
}
