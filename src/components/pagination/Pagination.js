import React from 'react'
import './bootstrap.css'
import './pag.css'

export default function Pagination({paginate}) {
	const pageNos = [];

	for (let i=1; i<= 10; i++){
		pageNos.push(i)
	}

	return(
		<nav >
			<div className='list-container'>
				<ul className='pagination' >
					{pageNos.map(number => (
						<li key={number} className='page-item'>
							<a onClick={() => paginate(number)} className='page-link'>
								{number}
							</a>
						</li>		
					))}	
				</ul>
			</div>
		</nav>
		)

}

