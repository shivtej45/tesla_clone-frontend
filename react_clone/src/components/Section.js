import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal"

const Wrap=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

width:100vw;
height: 100vh;
font-size:1rem;
/* background: orange; */
background-size: cover;
background-position: center; 
background-image: ${props=>`url("/images/${props.bgImg}")`};
background-repeat: no-repeat;



`

const Itemtext=styled.div`

padding-top: 15vh;
text-align: center;
`
const Buttongroup=styled.div`
 display:flex;
 margin-bottom:20px; 
 align-items: center;
 justify-content: center;
 @media (max-width:768px){
     flex-direction:column;
}`


const Leftbutton=styled.div`
background-color:rgba(23,26,32,0.8 );
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size: 20px;
text-transform:uppercase;
margin:10px;
cursor: pointer;

 ` 
const Rightbutton=styled(Leftbutton)`
background: white;
color: black;
opacity:0.85;
`
const Downarrow=styled.img`
margin-top:20px;
 height:40px;
 animation:animateDown infinite 1.5s ;
 overflow-x:hidden; `

const Button=styled.div`

display:flex;
flex-direction: column;
justify-content:center;


`

const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg}) => {
  return (
  
 <Wrap bgImg={backgroundImg}>
<Fade bottom>


<Itemtext>
<h2>{title}</h2>
<p>{description}</p>
</Itemtext>
</Fade>
<Button>
<Fade bottom>
<Buttongroup>
  <Leftbutton>
{leftBtnText}
  </Leftbutton>
{rightBtnText && 
<Rightbutton>
{rightBtnText}
  </Rightbutton>
  }
</Buttongroup>
</Fade>
<Downarrow src="/images/down-arrow.svg"/>
</Button>

 </Wrap>

  )
}

export default Section