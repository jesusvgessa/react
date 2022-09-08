import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {

    return (
      <>
        <div data-testid="test-title"> { title } </div>
        {/*<code>{ JSON.stringify(newMessage) }</code>*/}
        <p>{ subtitle }</p>
        <p>{ name }</p>
      </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 0
}