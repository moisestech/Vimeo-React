import React, {PropTypes} from 'react'
import CardList from '../CardList/CardList'
// import {find} from 'lodash'

class UserDetail extends React.Component {
	static displayName = 'UserDetail'

	static propTypes = {
		data: PropTypes.array
	}

	// static defaultProps = {
	// 	'user': {}
	// }

	// getUser(db, id) {
	//   return find(db, 'url', id )
	// }

	render() {
		const {data} = this.props

		const cardList1 = {
		  content: data,
		  layout: {noheader: true},
		  childrenlayout: {
		  	full: true,
		  	fullWidth: true
		  }
		}

		// const user = this.getUser(data, data[0].resource_key)
		// if (!data) return
		// console.log('data', data)

		return (
			<div className="UserDetail">
				<div className="UserDetail-wrapper">
					<div className="UserDetail-header">
						<div className="UserDetail-title">{`${data[0].user.name}`}</div>
						<div className="UserDetail-subtitle">{`${data[0].user.location}`}</div>
					</div>
					<div className="UserDetail-profile-content-wrapper">
						<div className="UserDetail-profile">
							<div className="UserDetail-profile-image">
								<img src={`${data[0].user.pictures.sizes[3].link}`}/>
							</div>
							<div className="UserDetail-profile-info">
								{`${data[0].user.bio}`}
							</div>
						</div>
						<div className="UserDetail-info">
							<div className="UserDetail-stats">
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`67`}</span>
									<span className="UserDetail-stat-type">{`Videos`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`409`}</span>
									<span className="UserDetail-stat-type">{`Likes`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`78`}</span>
									<span className="UserDetail-stat-type">{`Following`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`7`}</span>
									<span className="UserDetail-stat-type">{`Groups`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`16`}</span>
									<span className="UserDetail-stat-type">{`Channels`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`6`}</span>
									<span className="UserDetail-stat-type">{`Albums`}</span>
								</span>
							</div>
							<div className="UserDetail-videos">
								<CardList content={cardList1.content} 
								  childrenlayout={cardList1.childrenlayout} 
								  layout={cardList1.layout}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserDetail