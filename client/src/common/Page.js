import React from 'react';
import CustomNavbar from './CustomNavbar.js';
import styled from 'styled-components';




function Page (props) {
  const ViewportDiv = styled.div`
    height: 100vh;
    padding: 1%;
  `;

  return (
    <div>
      <CustomNavbar />
      <ViewportDiv>
        { props.children }
      </ViewportDiv>
    </div>
    
  );

}

export default Page;
