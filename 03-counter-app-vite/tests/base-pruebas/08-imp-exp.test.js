import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp', () =>{

    test('getHeroeById debe retornar un heroe', ()=>{

        const id=1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id:1, name:'Batman', owner:'DC'})

    });

    test('getHeroeById debe retornar un heroe', ()=>{

        const id=100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();

    });

    test('getHeroeByOwner debe retornar una lista de heroes', ()=>{

        const owner= 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

});