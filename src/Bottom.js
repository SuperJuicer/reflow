import './Bottom.css';

/**
 * Presentational component, responsible for rendering the Bottom of the app,
 * which includes the fixed position grid.
 *
 * @param props
 */
const Bottom = (props) => {

    return (
        <div className='bottom'>
            <div className='grid' style={props.style}>
                <h2>Fixed pos grid</h2>
            </div>
        </div>
    );
};

export default Bottom;