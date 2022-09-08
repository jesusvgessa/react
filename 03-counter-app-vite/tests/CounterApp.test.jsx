import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
   
    test('debe de hacer match con el snapshot', ()=>{

        const initialValue = 10;

        const { container } = render(<CounterApp value={ initialValue }/>)
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100', ()=>{

        render( <CounterApp value={100}/>)
        expect( screen.getByText(100) ).toBeTruthy();

    });

});