import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Translate } from '@mui/icons-material';

const Container=styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0px 20px;
top: 0;
right: 0;
left: 0;
z-index: 1;
`
const Menu=styled.div`
@media(max-width:768px){
  display: none;
}
display: flex;
flex:1;
justify-content: center;
align-items: center;

a{

font-weight: 600;
text-transform: uppercase;
padding: 0 20px;


 flex-wrap: nowrap;
}


`
const Rightmenu=styled.div`
display: flex;
align-items: center;
font-weight: 600;
padding: 0 10px;
a{
  padding: 0 10px;
  margin-right: 10px;
  text-transform: uppercase;
}

`
const Custommenu=styled(DehazeIcon)`
cursor: pointer;

`
const BurgerNav=styled.div`
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in ;
position:fixed;
top: 0px;
right:0px;
bottom: 0px;
background:white;
width: 300px;
z-index:16;
list-style: none;
padding: 20px;
li{
  padding: 15px 0px;
  border-bottom: 1px solid black;
  a{
  font-weight: 1000;
}
}




`
const Closebutton=styled(CloseIcon)`
cursor:pointer;`
const ButtonTag=styled.div`
display:flex;
justify-content:flex-end;`

const Header = () => {
  const [BurgerStatus,setBurgerStatus]=useState(false);
  return (
<Container>
   <a> <img src="/images/logo.svg" alt="error" /></a>
   <Menu>
    
    <a  href="#">Model-S</a>
    <a  href="#">Model-3</a>
  <a  href="#">Model-X</a>
  <a  href="#">Model-Y</a>
   
    

   </Menu>
   <Rightmenu>
 <a href='#'>Shop</a>
 <a href='#'>Tesla Account</a>
   </Rightmenu>
   <Custommenu onClick={()=>setBurgerStatus(true)}/>



 
 <BurgerNav show={BurgerStatus}>
  <ButtonTag>
 <Closebutton onClick={()=>setBurgerStatus(false)}/>
 </ButtonTag>
<li> <a href="#"> Existing Inventory</a></li>
<li> <a href="#">Used Inventory</a></li>
<li> <a href="#">Insuarance</a></li>
<li> <a href="#">Semi</a></li>
<li> <a href="#">Charging</a></li>
<li> <a href="#"> Cybertruck</a></li>
{/* <li> <a href="#">Roadster</a></li>
<li> <a href="#">Trade in</a></li>
<li> <a href="#">Test Drive</a></li>
<li> <a href="#">Powerwall</a></li> */}
{/* <li> <a href="#">Commercial Energy</a></li>
<li> <a href="#">Utilities</a></li> */}
<li> <a href="#">Find Us</a></li>
<li> <a href="#">Support</a></li>


</BurgerNav>
   </Container>
  )
}

export default Header