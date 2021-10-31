import React from 'react';
import Balance from './Balance';


function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Presupuesto Disponible</h1>
					</div>
					<Balance />
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;