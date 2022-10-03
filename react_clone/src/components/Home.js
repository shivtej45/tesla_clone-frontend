import React from 'react'
import Section from './Section'
import styled from "styled-components"

const Container=styled.div`
`
const Home = () => {
  return (
   <Container>
    <Section title="Model-S"
    description="Order Online For Touchless Delivery"
    backgroundImg="model-s.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventory"/>
    <Section title="Model-Y"
    description="Order Online For Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventory"/>


    <Section title="Model-X"
    description="Order Online For Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventory"/>
 
    <Section title="Model-3"
    description="Order Online For Touchless Delivery"
    backgroundImg="model-3.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventory"/>

    <Section title="Lowest Cost Solar Panel in America"
    description="Money Back Guarantee"
    backgroundImg="solar-panel.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn More"/>

    <Section title="Solar roof costs less than a new roof plus solar panel"
    description="Money Back Guarantee"
    backgroundImg="solar-roof.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn More"/>

    <Section title="Accesories"
    description=""
    backgroundImg="accessories.jpg"
    leftBtnText="Order Now"
  
    />
 
   
   </Container>
  )
}

export default Home