import React from 'react';
import  { render } from '@testing-library/react'
import Main from '../pages/main';


describe('<Main /> landing page' , () => {
    const {getByText} = render(<Main />)
    test('Should render \'Login\' pattern in content on main.js', () => {
        expect(getByText('Login')).toBeInTheDocument()
    })

})

describe('<Main /> landing page', () => {
    test('Should display Issue Tracker API text on main.js', () => {
        expect('Issue Tracker API').toMatch(/Issue Tracker API/)
    })
})

