import React from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import '../Styles/progressbar.css';

const StackedProgressbar = ({ label, valOne, valTwo, valThree }) => {
    return (
        <div style={{position:'relative'}}>
            <ProgressBar>
                <ProgressBar animated variant="NEMA" now={valOne} key={1} />
                <ProgressBar animated variant="success" now={valTwo} key={2} />
                <ProgressBar animated variant="danger" now={valThree} key={3} />
            </ProgressBar>
            {label}
        </div>
    );
};

export default StackedProgressbar;
