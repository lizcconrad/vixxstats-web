import React, { useContext } from "react";
import { I18nContext } from "../I18nProvider";
import styled from 'styled-components';
import { backgroundColor, textColor, primaryColor, accentColor } from '../theme';
import en_icon from '../icons/en_icon.png'
import es_icon from '../icons/es_icon.png'
import kr_icon from '../icons/kr_icon.png'

function LanguageSelect () {

    // StyledDropdown: changes the color and hover behavior of dropdowns in the navbar
    // #region
    const StyledDropdown = styled.div`

        button {
            border: none;
            background: none;
            height: 2.5rem;
            width: 4rem;
            margin-right: 0.25rem;

            &:focus {
                outline: none;
            }            
            
        }

        .dropdown-menu {
            background-color: ${backgroundColor};
        }

        .dropdown-item {
            color: ${textColor};
            cursor: pointer;

            &:hover {
            color: ${accentColor};
            background-color: ${primaryColor}
            }

        }
    `;
    // #endregion

    // the div that displays the flag icon on the dropdown opener button
    // #region
    const StyledDiv = styled.div`
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 0.5rem;
        background-size: cover;
    `;
    // #endregion

    // the div that displays the flag icon on each element of the dropdown list
    // #region
    const StyledMenuDiv = styled.div`
        display: inline-block;
        width: 1.4rem;
        height: 1.1rem;
        margin: 0 0.5rem;
        background-size: cover;

    `;
    // #endregion
  
    /* Another hook here: useContext will receive a Context
    and return anything provided in the Provider */
    /* because the Provider's "value" prop is given the state (langCode and translate) 
    and a dispatch function that's what useContext returns */
    const { langCode, translate, dispatch } = useContext(I18nContext);

    /* We will dispatch an action to set the language with the
    value of the dropdown selection. This will also change the 
    translate method in the context to translate keys into 
    the language we select */
    const onLanguageSelect = (e) => {
        if (e.target.id.includes('es')) {
            localStorage.setItem('langCode', 'es');
            dispatch({ type: "setLanguage", payload: 'es' });
        } else if (e.target.id.includes('kr')) {
            localStorage.setItem('langCode', 'kr');
            dispatch({ type: "setLanguage", payload: 'kr' });
        } else {
            localStorage.setItem('langCode', 'en');
            dispatch({ type: "setLanguage", payload: 'en' });
        }
    }
    

    // the backgroundImage (i.e. the flag icon) to display on the button, based on the current selected language
    let langButtonStyle;
    if (langCode.toLowerCase() === 'es') {
        langButtonStyle = {'backgroundImage': `url(${es_icon})`};
    } else if (langCode.toLowerCase() === 'kr') {
        langButtonStyle = langButtonStyle = {'backgroundImage': `url(${kr_icon})`};
    } else {
        langButtonStyle = langButtonStyle = {'backgroundImage': `url(${en_icon})`};
    }
  
    return (
        <StyledDropdown className="dropdown">
            <button aria-haspopup="true" aria-expanded="false" id="dropdown-language" data-toggle="dropdown">
                <StyledDiv style={langButtonStyle} />
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-language">
                <div id="en_wrapper" className="dropdown-item" onClick={onLanguageSelect}>
                    {translate('i18n_dropdown_en')} <StyledMenuDiv id="en_flag_icon" style={{'backgroundImage': `url(${en_icon})`}}></StyledMenuDiv>  
                </div>
                <div id="es_wrapper" className="dropdown-item" onClick={onLanguageSelect}>
                    {translate('i18n_dropdown_es')} <StyledMenuDiv id="es_flag_icon" style={{'backgroundImage': `url(${es_icon})`}}></StyledMenuDiv>  
                </div>
                <div id="kr_wrapper" className="dropdown-item" onClick={onLanguageSelect}>
                    {translate('i18n_dropdown_kr')} <StyledMenuDiv id="kr_flag_icon" style={{'backgroundImage': `url(${kr_icon})`}}></StyledMenuDiv>  
                </div>
            </div>
        </StyledDropdown>
    );
};

export default LanguageSelect;