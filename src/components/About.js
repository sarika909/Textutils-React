import React , {useState} from 'react'

export default function About() {

    const[myStyle, setMyStyle]= useState({
        color: 'white',
        backgroundColor:'black'
    })

    const[btnText,setBtnText] = useState("Enable Light Mode")

    const toggleStyle=()=>{
        if(myStyle.color === "white"){
            setMyStyle({
                 color: '#3636e4',
        backgroundColor:'black'
            })
            setBtnText("Enable Dark Mode");

        }
        else{
            setMyStyle({
                 color: 'white',
        backgroundColor:'black'
                
            })
            setBtnText("Enable Light Mode");

        }
    }

  return (
    <>
    <div className="container my-3 " style={myStyle}>
        <h1>About Us </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils offers a comprehensive range of tools designed to help you analyze and improve your text, providing you with valuable insights that can elevate your writing. Our application allows you to effortlessly count the number of words and characters in your text, giving you a clear understanding of its length and structure. Additionally, you can assess the readability of your text, ensuring it is suitable and easily understood by your intended audience. TextUtils also helps you identify keyword density, pinpointing the most frequently used words and allowing you to refine your content for better clarity and impact. Moreover, our text transformation tools enable you to seamlessly convert your text to uppercase, lowercase, or capitalize each word, catering to various stylistic needs. These features collectively provide a robust platform for text analysis, making it easier for you to produce high-quality writing.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={myStyle}>
      Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is a completely free-to-use application, designed to offer you an extensive suite of text analysis tools without any financial burden. You won't need to worry about hidden charges, subscription fees, or premium features. Our mission is to provide accessible and powerful text utilities to everyone, regardless of their financial situation. Whether you're a student working on an assignment, a professional drafting important documents, or simply a text enthusiast who enjoys playing with words, TextUtils ensures that all its features are available to you at no cost. This commitment to being free and accessible underscores our dedication to empowering users to enhance their text without financial constraints.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      User Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is designed with user compatibility as a top priority, ensuring that our app is accessible and easy to use for everyone, regardless of their technical skills. Our intuitive interface is user-friendly, allowing you to navigate through the various features with ease. The app's responsive design ensures it works seamlessly across all devices, including desktops, tablets, and smartphones, so you can use TextUtils anytime, anywhere. We have made sure that our navigation is clean and straightforward, making it simple for you to find and use all the features without any hassle. You will receive instant results as you type or paste your text into the app, providing you with real-time feedback to help you improve your writing on the go. Best of all, TextUtils does not require any sign-up or account creation, allowing you to start using our app immediately without any delays or complications.</strong> 
      </div>
    </div>
  </div>
</div>
</div>
    <div className="container my-3">
        <button onClick={toggleStyle} type='button' className="btn btn-primary">{btnText}</button>
    </div>
    </>
  )
}
