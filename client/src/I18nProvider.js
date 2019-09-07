import React, { useReducer } from "react";

import EN from "./i18n/en.json";
import ES from "./i18n/es.json";
import KR from "./i18n/kr.json";

// To make it easier to read from JSON files
const translations = {
  en: EN,
  es: ES,
  kr: KR,
};

// This function will be used to create `translate` function for the context
// the langCode gets the appropriate lang JSON and the key specifies which translatoin to return form that JSON

// expanded syntax:
// const getTranslate = function(langCode) {
//   return function(key) {
//     return translations[langCode][key] || key
//   }.bind(this)
// }.bind(this)
const getTranslate = langCode => key => translations[langCode][key] || key;



/* We will have two things in our context state, 
langCode will be the current language of the page
and translate will be the method to translate keys
into meaningful texts. Default language will be English */

let langCode;
// if no code is stored in the user's localStorage, default to English
// otherwise use their last used code
if(localStorage.getItem('langCode') == null) {
    langCode = "en";
} else {
    langCode = localStorage.getItem('langCode').toLowerCase();
}

// the initialState object which has
// the langCode
// the return  function of getTranslate(langCode) which is a function that expects a "key" for grabbing from the JSON
const initialState = {
  langCode: langCode,
  translate: getTranslate(langCode),
};

// create the locale context with the default as the initialState set above
export const I18nContext = React.createContext(initialState);


// Use a Provider to pass the context to the tree below
// Any component can read it, no matter how deep it is
export const I18nContextProvider = ({ children }) => {
  
  /* This is where magic starts to happen. We're creating
  a reducer to manage the global state which will sit in
  I18nContext. For now, the only action we will have
  is setting language */

  // The action of the reducer has a type, and a payload
  // if the type is "setLanguage", the langCode gets set to what's in the payload
  // and the translate portion of the state is set to the return function of getTranslate given the langCode in the payload
  // so "translate" now is a function waiting for the key of a translation (e.g. "home_link" or "members_dropdown")
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload.toLowerCase()),
        };
      default:
        return { ...state };
    }
  };

  /* useReducer hook receives a reducer and an initialState to
  return the current state object with a dispatch method to
  dispatch actions. */ 
  const [state, dispatch] = useReducer(reducer, initialState);

  /* We're Providing state object (langCode and translate method
  in this case) and also the dispatch for the children components */
  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};