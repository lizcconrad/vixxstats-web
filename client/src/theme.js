import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#454545',
    scentist: '#fafafa'
});
export const textColor = theme('mode', {
    light: '#002147',
    dark: '#fff',
    scentist: '#CD3E80'
});
export const primaryColor = theme('mode', {
    light: '#002147',
    dark: '#222',
    scentist: '#CD3E80'
});
export const primaryColorFaded = theme('mode', {
    light: 'rgba(0, 33, 71, 0.5)',
    dark: 'rgba(34, 34, 34, 0.5)',
    scentist: 'rgba(205, 62, 128, 0.5)'
});
export const accentColor = theme('mode', {
    light: '#D6AD69',
    dark: '#fff',
    scentist: '#fff'
});
export const dataAccentColor = theme('mode', {
    light: '#D6AD69',
    dark: '#fff',
    scentist: '#D16257'
});


// export const buttonBackgroundColor = theme('mode', {
//     light: '#222',
//     dark: '#eee',
//     scentist: '#eee'

// });

// export const buttonTextColor = theme('mode', {
//     light: 'white',
//     dark: 'black',
//     scentist: '#CD3E80'
// });