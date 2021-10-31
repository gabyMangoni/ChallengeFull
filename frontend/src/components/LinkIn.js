import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import TableOperationListIn from './TableOperationListIn'


function LinkIn(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <TableOperationListIn />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkIn;
