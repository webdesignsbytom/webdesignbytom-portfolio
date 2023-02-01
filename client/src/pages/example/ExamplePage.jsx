import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './examplePage.css'

function ExamplePage() {
  const location = useLocation();
  console.log('location', location);

  return (
    <div>ExamplePage</div>
  )

}

export default ExamplePage