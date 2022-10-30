import React, { useState } from "react";
import { Button, Form,InputGroup } from "react-bootstrap";
import API from "./API";
import {useNavigate } from 'react-router-dom';



const Forms = ({ onAdd }) => {
  const [Names, setNames] = useState("");
  const [School, setSchool] = useState("");
  const [ Age, setAge] = useState(null);
  const [ Contact, setContact] = useState(null);
  const [ Email, setEmail] = useState("");
  const [ Sex, setSex] = useState("");
  const [ Level, setLevel] = useState("");
  const [ The_content_was_as_described_in_shared_materials, setThe_content_was_as_described_in_shared_materials] = useState(null);
  const [ The_training_was_applicable_to_my_field_of_Education, setThe_training_was_applicable_to_my_field_of_Education] = useState(null);
  const [ I_will_recommend_this_learning_method_to_other_students, setI_will_recommend_this_learning_method_to_other_students] = useState(null);
  const [ The_program_was_well_paced_within_the_allotted_time, setThe_program_was_well_paced_within_the_allotted_time] = useState(null);
  const [ The_instructor_was_a_good_communicator, setThe_instructor_was_a_good_communicator] = useState(null);
  const [ The_material_was_presented_in_an_organized_manner, setThe_material_was_presented_in_an_organized_manner] = useState(null);
  const [The_instructor_was_knowledgeable_on_the_topic, setThe_instructor_was_knowledgeable_on_the_topic] = useState(null);
  const [ I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject, setI_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject] = useState(null);
  const [ Given_the_topic_was_this_program, setGiven_the_topic_was_this_program] = useState(null);
  const [ In_your_opinion_was_this_program, setIn_your_opinion_was_this_program] = useState(null);
//   const [formId, setFormId] = useState(null);
// const [forms, setForms] = useState([]);

const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { Names, Sex,Age,Contact,Email,School,Level,
        The_content_was_as_described_in_shared_materials,The_training_was_applicable_to_my_field_of_Education,
        I_will_recommend_this_learning_method_to_other_students,The_program_was_well_paced_within_the_allotted_time,
        The_instructor_was_a_good_communicator,The_material_was_presented_in_an_organized_manner,
        The_instructor_was_knowledgeable_on_the_topic,
        I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject,
        Given_the_topic_was_this_program,In_your_opinion_was_this_program };
    API.post("/", item).then((res) => {
        console.log("success");
        
        console.log(res.data.id);
        navigate("/"+res.data.id);
    });
    
        
};

  return (
    <div className="container mt-5 ">
      <div className="row px-2">
          <h1 className="float-left text-primary" style={{fontWeight: 'bold'}}>Trainees Satistifaction Evaluation Form</h1>
          <p id="p1" className="text-justify p-3 px-5 " style={{fontFamily: 'Arial'}}>Your feedback is very critical for Ida Technology to ensure we are meeting your needs, 
            and our informal education programs' purpose. This Satisfaction Survey is designed to gather 
            feedback on a period and content you earned at iDA. It does not predict your behavior in every instance, 
            but it is a clear indication of your overall satisfaction towards your better preferences. For each item, 
            circle the response that represents your right answer. Complete all items of this survey. 
            When you read the statements, try to think about what was your intention before you join this program and 
            reflect on packedge you have for now. It generally takes about 20 minutes to complete the survey. 
            Do not spend too much time on any item – indicate your immediate feeling and move on to the next item.</p>
        </div>
        <div>
          <h6 className='text-center text-primary mb-3' style={{fontWeight: 'bold'}}>Please return this form to the iDA TECH Informal Education Department program.</h6>
        </div>
        {/* <div>
          <p className='text-md '>Program title: Junior Programmers _October 1st, 2021.</p>
        </div> */}
        <div className="row px-5">
            
          <Form onSubmit={onSubmit} className="mt-4 ">

          <div className="row">
          <div className="col-md-8 ">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="" >Names</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="text"
                placeholder="Enter Names"
                value={Names}
                onChange={(e) => setNames(e.target.value)}
              />
            </Form.Group>
            </div>
            <div className="col-md-2">
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="number"
                placeholder="Enter Age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            </div>
            <div className="col-md-2">
            <Form.Group  className="mb-3" controlId="formSex">
              <Form.Label>Sexe</Form.Label>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={Sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option>Choose</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
            </Form.Group>
            </div>
            </div>

            <div className="row">

            <div className="col-md-8 m">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="text"
                placeholder="Enter Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            </div>

            <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="number"
                placeholder="Enter Contact"
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            </div>
            </div>

            <div className="row">
            <div className="col-md-8 ">
            <Form.Group className="mb-3" controlId="formSchool">
              <Form.Label>School</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="text"
                placeholder="Enter School"
                value={School}
                onChange={(e) => setSchool(e.target.value)}
              />
            </Form.Group>
            </div>
            <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formLevel">
              <Form.Label>Level</Form.Label>
              <Form.Control
              style={{fontFamily: 'Arial'}}
                type="text"
                placeholder="Enter Level"
                value={Level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </Form.Group>
            </div>
            </div>
            <Form.Group className="mb-3 mt-3" controlId="formFirst">
            <InputGroup className="mb-3">
              <InputGroup.Text>1. The content was as described in shared materials</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_content_was_as_described_in_shared_materials}
                onChange={(e) => setThe_content_was_as_described_in_shared_materials(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTwo">
            <InputGroup className="mb-3">
              <InputGroup.Text>2. The training was applicable to my field of Education</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_training_was_applicable_to_my_field_of_Education}
                onChange={(e) => setThe_training_was_applicable_to_my_field_of_Education(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formThree">
            <InputGroup className="mb-3">
              <InputGroup.Text>3. I will recommend this learning method to other students</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={I_will_recommend_this_learning_method_to_other_students}
                onChange={(e) => setI_will_recommend_this_learning_method_to_other_students(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
            </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFour">
            <InputGroup className="mb-3">
              <InputGroup.Text>4. The program was well paced within the allotted time</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_program_was_well_paced_within_the_allotted_time}
                onChange={(e) => setThe_program_was_well_paced_within_the_allotted_time(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFive">
            <InputGroup className="mb-3">
              <InputGroup.Text >5. The instructor was a good communicator</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_instructor_was_a_good_communicator}
                onChange={(e) => setThe_instructor_was_a_good_communicator(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSix">
            <InputGroup className="mb-3">
              <InputGroup.Text>6. The material was presented in an organized manner</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_material_was_presented_in_an_organized_manner}
                onChange={(e) => setThe_material_was_presented_in_an_organized_manner(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSeven">
            <InputGroup className="mb-3">
              <InputGroup.Text>7. The instructor was knowledgeable on the topic</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={The_instructor_was_knowledgeable_on_the_topic}
                onChange={(e) => setThe_instructor_was_knowledgeable_on_the_topic(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEight">
            <InputGroup className="mb-3">
              <InputGroup.Text>8. I would be interested in attending a follow-up, more Advanced programs on this same subject</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject}
                onChange={(e) => setI_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject(e.target.value)}>
                <option>Choose</option>
                <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Disagree</option>
                 <option value="4">Strongly Disagree</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNine">
            <InputGroup className="mb-3">
              <InputGroup.Text>9. Given the topic, was this program</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={Given_the_topic_was_this_program}
                onChange={(e) => setGiven_the_topic_was_this_program(e.target.value)}>
                <option>Choose</option>
                <option value="A">Too Short</option>
                 <option value="B">Right Length</option>
                 <option value="C">Too Long</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTen">
            <InputGroup className="mb-3">
              <InputGroup.Text >10. In your opinion, was this program</InputGroup.Text>
              <Form.Select
              style={{fontFamily: 'Arial'}}
                as="select"
                value={In_your_opinion_was_this_program}
                onChange={(e) => setIn_your_opinion_was_this_program(e.target.value)}>
                <option>Choose</option>
                <option value="A">Introductory</option>
                 <option value="B">Intermediate</option>
                 <option value="C">Advanced</option>
              </Form.Select>
              </InputGroup>
            </Form.Group>
            
            <div className="float-right p-3">
            
              <Button variant="primary" type="submit" onClick={onSubmit} className="px-5 w-100 mb-5" style={{fontWeight: 'bold',fontFamily: 'Arial'}}>
              Submit
              </Button>
              
            </div>
          </Form>
        </div>
      </div>
  );
};

export default Forms;
