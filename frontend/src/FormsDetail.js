import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import API from "./API";
import { useParams } from 'react-router';

const FormsDetail = () => {
  const { formID } = useParams();
  const [forms, setForms] = useState([]);

  useEffect(() => {
    refreshForms(formID);
  }, [formID]);

  const refreshForms = (formID) => {
    API.get(`/${formID}/`)
      .then((res) => {
        setForms(res.data);
      })
      .catch(console.error);
  };

  const Print = () =>{ 
    let printContents = document.getElementById('print').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  //  Redirect to forms after printing
    window.location.href = "/"
  }

  return (
    <div className="container mt-5 " >
    <div id='print'>
      <div className="row px-2">
      <h1 className="float-left text-primary text-center" style={{fontWeight: 'bold'}}>Trainees Satistifaction Evaluation Form</h1>
          <p id="p1" className="text-center p-3 px-5 " style={{fontFamily: 'Arial'}}>Your feedback is very critical for Ida Technology to ensure we are meeting your needs, 
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

        <div className="row px-5 mt-5"  style={{textAlign:"justify"}}>
        <div className="row">
        <div className="col-md-6 ">
          <p>Names : <span style={{fontWeight: 'bold'}}>{forms.Names}</span></p>
        </div>
        <div className="col-md-2">
        <p>Age : <span style={{fontWeight: 'bold'}}>{forms.Age}</span></p>
        </div>
        <div className="col-md-2">
        <p>Sex : <span style={{fontWeight: 'bold'}}>{forms.Sex}</span></p>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 ">
          <p>School : <span style={{fontWeight: 'bold'}}>{forms.School}</span></p>
        </div>
        <div className="col-md-4">
        <p>Level : <span style={{fontWeight: 'bold'}}>{forms.Level}</span></p>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 ">
          <p>Contact : <span style={{fontWeight: 'bold'}}>{forms.Contact}</span></p>
        </div>
        <div className="col-md-6">
        <p>Email : <span style={{fontWeight: 'bold'}}>{forms.Email}</span></p>
        </div>
        </div>
        </div>
        <br></br>
        <div className="row px-5" style={{}}>
        <div className="row">
        <div className="col-md-6 " style={{textAlign:"justify"}}>
          <p style={{fontWeight: 'bold'}}>Strongly Agree:<span style={{fontWeight: 'bold'}}>1</span> | Agree:<span style={{fontWeight: 'bold'}}>2</span> | Disagree:<span style={{fontWeight: 'bold'}}>3</span> | Strongly Disagree:<span style={{fontWeight: 'bold'}}>4</span></p>
        </div>
        <div className="col-md-6" style={{textAlign:"center"}}>
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>1. The content was as described in shared materials : <span style={{fontWeight: 'bold'}}>{forms.The_content_was_as_described_in_shared_materials}</span> </p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>2. The training was applicable to my field of Education : <span style={{fontWeight: 'bold'}}>{forms.The_training_was_applicable_to_my_field_of_Education}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>3. I will recommend this learning method to other students : <span style={{fontWeight: 'bold'}}>{forms.I_will_recommend_this_learning_method_to_other_students}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>4. The program was well paced within the allotted time : <span style={{fontWeight: 'bold'}}>{forms.The_program_was_well_paced_within_the_allotted_time}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>5. The instructor was a good communicator : <span style={{fontWeight: 'bold'}}>{forms.The_instructor_was_a_good_communicator}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>6. The material was presented in an organized manner : <span style={{fontWeight: 'bold'}}>{forms.The_material_was_presented_in_an_organized_manner}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>7. The instructor was knowledgeable on the topic : <span style={{fontWeight: 'bold'}}>{forms.The_instructor_was_knowledgeable_on_the_topic}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <div className="row">
        <div className="col-md-9 " style={{textAlign:"justify"}}>
          <p>8. I would be interested in attending a follow-up, more Advanced programs on this same subject : <span style={{fontWeight: 'bold',textAlign:"center"}}>{forms.I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
        <div className="col-md-6 " style={{textAlign:"justify"}}>
          <p style={{fontWeight: 'bold'}}>Too Short:<span style={{fontWeight: 'bold'}}>A</span> | Right Length:<span style={{fontWeight: 'bold'}}>B</span> | Too Long:<span style={{fontWeight: 'bold'}}>C</span></p>
        </div>
        <div className="col-md-6" style={{textAlign:"center"}}>
        </div>
        </div>
        <div className="row">
        <div className="col-md-8 " style={{textAlign:"justify"}}>
          <p>9. Given the topic, was this program : <span style={{fontWeight: 'bold'}}>{forms.Given_the_topic_was_this_program}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
        <div className="col-md-6 " style={{textAlign:"justify"}}>
          <p style={{fontWeight: 'bold'}}>Introductory:<span style={{fontWeight: 'bold'}}>A</span> | Intermediate:<span style={{fontWeight: 'bold'}}>B</span> | Advanced:<span style={{fontWeight: 'bold'}}>C</span></p>
        </div>
        <div className="col-md-6" style={{textAlign:"center"}}>
        </div>
        </div>
        <div className="row">
        <div className="col-md-8 " style={{textAlign:"justify"}}>
          <p>10. In your opinion, was this program : <span style={{fontWeight: 'bold'}}>{forms.In_your_opinion_was_this_program}</span></p>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        <br></br>

        </div>
        </div>
        <Button variant="warning" type="submit" onClick={Print} className="px-5  mb-5" style={{fontWeight: 'bold',fontFamily: 'Arial'}}>
              Print This Out
              </Button>
      </div>
  );
};

export default FormsDetail;
