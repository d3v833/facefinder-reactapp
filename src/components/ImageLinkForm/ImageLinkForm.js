import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
	return (
			<div>
				<p className='f3'>
					{'The Third Floor Syndicate will detect faces in your pictures. Give it a try.'}
				</p>
				<div className='center'>
					<div className='form center pa4 br3 shadow-5'>
						<input className='f4 pa2 w-60 center' type='text' onChange={onInputChange} />
						<button className='w-40 grow f4 link ph3 pv2 dib black bg-grey'
						onClick={onBtnSubmit}>Detect</button>			
					</div>
				</div>
			</div>	
	);
}

export default ImageLinkForm;