import React from 'react';
import ReactDOM from 'react-dom';
import Liste from './Liste';
import reportWebVitals from './reportWebVitals';
import Ordinateurs from './Ordinateurs';

ReactDOM.render(<Liste
                        Ordinateurs={Ordinateurs}
                />,
                document.getElementById('root'
                )
);


reportWebVitals();
