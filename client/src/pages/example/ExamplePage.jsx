import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './examplePage.css';

function ExamplePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState({});

  useEffect(() => {
    if (location.state) {
      setPortfolioItem(location.state);
    } else {
      navigate('/error', {
        replace: true,
      });
    }
  }, []);

  return <div>Profolio Item ${portfolioItem.id}</div>;
}

export default ExamplePage;
