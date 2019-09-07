import React, { useContext } from 'react';
import { I18nContext } from './I18nProvider';
import styled, { withTheme } from 'styled-components';
import Page from './common/Page';


function MemberPage (props) {

  // get translation context
  const { translate } = useContext(I18nContext);

  const StyledDiv = styled.div`
    font-size: 5rem;
    text-align: center;
    padding: 10% 0;
  `;
  
  return (
    <Page>
      <StyledDiv>{translate("member_page_soon")}</StyledDiv>
    </Page>  
  );

}

export default MemberPage;
