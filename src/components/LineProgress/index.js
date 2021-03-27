import React from 'react'

const LineProgress = ({titles, value}) => {
	return(
		<div>
            <div className="d-flex">
                {titles.map((title, key) => 
                    <label key={key} className="text-black" style={{width: Math.floor(100/titles.length) + '%'}}><i>{title}</i></label>
                )}
            </div>
			<div className="progress w-100">
				<div className="progress-bar bg-success" 
					role="progressbar" 
					style={{"width": `${value}%`}} 
					aria-valuenow="25" 
					aria-valuemin="0" 
					aria-valuemax="100"></div>
			</div>
		</div>
	)
}

export default LineProgress