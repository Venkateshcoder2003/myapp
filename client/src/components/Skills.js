import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, ListGroup } from 'react-bootstrap'; // Import Bootstrap components

const skills = {
    Languages: ['C++', 'C', 'JavaScript', 'Basic Python'],
    Tools: ['VS Code', 'GitHub'],
    Databases: ['MongoDB'],
    WebTechnologies: ['Node.js', 'HTML', 'CSS'],
    Frameworks: ['React JS', 'Express JS'],
    CourseWork: ['Data Structures and Algorithms', 'OOPS in C++']
};

const Skills = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Skills</h2>
            <Row>
                {Object.keys(skills).map((category, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                        <h4>{category}</h4>
                        <ListGroup>
                            {skills[category].map((item, idx) => (
                                <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Skills;
