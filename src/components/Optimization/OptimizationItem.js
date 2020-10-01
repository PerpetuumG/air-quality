import React, {useState} from 'react';

const OptimizationItem = ({optimization, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false);
    const toggleToolTip = (newValue) => {
            setDirectionSwitched( number % 3 === 0)

        setToolTipShowing(newValue);
    }
    // const toggleToolTip = () => {
    //     setToolTipShowing(
    //         !isToolTipShowing
    //     )
    // }

    return (
        <div className="optimization-list-item"
             onMouseEnter={() => toggleToolTip(true)}
             onMouseLeave={() => toggleToolTip(false)}
             style={{
                background: `url(${optimization.imgUrl}) center no-repeat`,
                backgroundSize: 'cover'
             }}>
                <p className="optimization-list-item-name">
                    {optimization.name}
                </p>
            {
                    isToolTipShowing && <p className={`optimization-list-item-tooltip ${
                        isDirectionSwitched
                            ? "optimization-list-item-tooltip-switched"
                            : ""
                    }`}>
                        {optimization.description}
                    </p>
                }
            </div>
    );
};

export default OptimizationItem;