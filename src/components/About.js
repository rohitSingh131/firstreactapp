import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  // const [myStyle, setMyStyle] = useState({
  // 	color: 'black',
  // 	backgroundColor:'white'
  // })

  // const [btnText, setBtnText] = useState("Dark Mode")
  // const toggleStyle =()=>{
  // 	if(myStyle.color === 'black'){
  // 		setMyStyle({
  // 			color: 'white',
  // 			backgroundColor:'black',
  // 			border: '1px solid white',
  // 		})
  // 		setBtnText("Light Mode")
  // 	}
  // 	else{
  // 		setMyStyle({
  // 			color: 'black',
  // 			backgroundColor:'white'
  // 		})
  // 		setBtnText("Dark Mode")
  // 	}
  // }
  return (
    <div className="container">
      <h1
        className="my-9"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                If your website is focused on a particular topic or area of
                expertise
              </strong>
              , consider sharing your journey or story of how you became
              interested in that topic. This can help visitors understand your
              passion and commitment to your work.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button "
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Highlight any unique skills or qualifications you have that are
                relevant to your website
              </strong>
              . This can help establish your credibility and expertise in your
              field.If you've had any notable successes or accomplishments
              related to your website, consider sharing them in your bio. This
              can help visitors see the value you bring to the table and give
              them confidence in your abilities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Consider sharing a quote or motto that reflects your values or
                philosophy
              </strong>
              . This can help visitors understand your perspective and give them
              a sense of what they can expect from your website.Finally, don't
              be afraid to be personal and share a little bit about yourself.
              This can help visitors feel more connected to you and make your
              website feel more relatable and approachable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
