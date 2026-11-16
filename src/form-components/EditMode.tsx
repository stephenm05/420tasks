import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    
    function updateEditMode() {
        setEditMode(!editMode);
    }
    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }
    function updateIsStudent() {
        setIsStudent(!isStudent);
    }
    
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode-switch" 
                label="Edit Mode" 
                checked={editMode}
                onChange={updateEditMode}
            />

            { !editMode ? <div>
                <p>{studentName} is {isStudent ? "" : "not "}a student</p>
            </div> 
              :
            <div>
                <Form.Group controlId="formStudentName" as={Row}>
                    <Form.Label column sm={2}>Student Name:</Form.Label>
                    <Col>
                    <Form.Control value={studentName} onChange={updateStudentName} />
                    </Col>
                </Form.Group>
                <Form.Check 
                    type="checkbox"
                    id="isStudent-switch"
                    label="Is a student:"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            </div> }
        </div>
    );
}
