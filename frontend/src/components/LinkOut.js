import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import TableOperationListOut from './TableOperationListOut'


function LinkOut(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <TableOperationListOut />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkOut;