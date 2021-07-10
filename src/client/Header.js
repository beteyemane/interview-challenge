import React from 'react'

const Header = ({selectedItemsTotal, groupedDietaries}) => {
    return (
        <div className="menu-summary">
            <div className="container">
                <div className="row">
                    <div className="col-6 menu-summary-left">
                        <span>{selectedItemsTotal}</span>
                    </div>
                    <div className="col-6 menu-summary-right">
                        {Object.entries(groupedDietaries).map(([key, value]) => 
                        <span key={key}>
                            {value}x <span className="dietary">{key}</span>
                        </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header