import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);
    return <div>
        <span>
            <Button onClick={() => {setIsRevealed(!isRevealed)} }>Reveal Answer</Button>
        </span>
        <span>
            {isRevealed && <p>42</p>}
        </span>
    </div>;
}
