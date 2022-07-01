import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
   
    test('Debe de hacer match con el snapshot', () => {

        const title = "hola soy jesus";
        const { container } = render( <FirstApp title={ title }/> );

        expect( container ).toMatchSnapshot();

    });

    test('Debe demostrar el titulo en un h1', () => {
    
        const title = 'Hola soy goku';
        const { container, getByText } = render( <FirstApp title={title}/>);
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe( title );

    })

});