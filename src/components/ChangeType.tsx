import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");
    const typeTransitions: Record<QuestionType, QuestionType> = {
        "multiple_choice_question": "short_answer_question",
        "short_answer_question": "multiple_choice_question"
    }
    return <div>
        <span>
            <Button onClick={() => {setQuestionType(typeTransitions[questionType])} }>Change Type</Button>
        </span>
        <span>
            <p>{questionType === "short_answer_question" ? "Short Answer" : "Multiple Choice"}</p>
        </span>
    </div>;
}
