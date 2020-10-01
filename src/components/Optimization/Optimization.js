import React from 'react';
import  './OptimizationList.scss';
import OptimizationItem from "./OptimizationItem";

    const Optimization = ({name, subname, optims}) => {
    const optimsList = optims.map((optimization, i) => <OptimizationItem optimization={optimization}
                                                                 number={i+1} key={i} />

    )

    return (
        <section className="optimization container" id="optimization">
            <h2 className="optimization-name">{name}</h2>
            <p className="optimization-subname">{subname}</p>
            <div className="optimization-list">
                    {optimsList}
            </div>
        </section>
    );
};

export default Optimization;