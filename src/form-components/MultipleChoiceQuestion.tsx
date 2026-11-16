import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [selected, setSelected] = useState<string>(options.length > 0 ? options[0] : "");

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultipleCChoiceDropdown">
                <Form.Label>Select your answer</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    { options.map((option: string) => 
                        <option key={option} value={option}>{option}</option>
                    )}
                </Form.Select>
            </Form.Group>
            <p>{selected === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
