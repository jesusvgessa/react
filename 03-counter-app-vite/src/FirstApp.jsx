// const newMessage={
//     nombre: 'Jesus',
//     edad: 25
// };

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {

    // if ( !title ){
    //     throw new Error('El title no existe');
    // }

    return (
      <>
        <h1>{ title }</h1>
        {/*<code>{ JSON.stringify(newMessage) }</code>*/}
        <p>{ subtitle + 1 }</p>
      </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}