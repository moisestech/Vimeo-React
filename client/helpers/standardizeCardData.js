function cleanVideoCards(content) {
	console.log('~~~standardizing videos~~~')
	const contentMap = content.map((item) => {
		const newItem = {
			link: item.uri,
			image: item.pictures.sizes[2].link,
			title: item.name,
			subtitle: item.user.name
		}
		return newItem
	})
	return contentMap		
}

function cleanGroupCards(content) {
	console.log('~~~standardizing groups~~~')
	const contentMap = content.map((item) => {
		const newItem = {
			link: item.uri,
			image: item.pictures.sizes[3].link,
			title: item.name,
			subtitle: (item.description ? item.description : '')
		}
		return newItem
	})
	return contentMap	
}

function cleanChannelCards(content) {
	console.log('~~~standardizing channels~~~')
	const contentMap = content.map((item) => {
		const newItem = {
			link: item.uri,
			image: (item.pictures.sizes[2].link ? 'https://i.ytimg.com/vi/DqS48q6mQSs/maxresdefault.jpg' : item.pictures.sizes[2].link),
			title: item.name,
			subtitle: item.user.name
		}
		return newItem
	})
	return contentMap	
}

function cleanCategoryCards(content) {
	console.log('~~~standardizing categories~~~')
	const contentMap = content.map((item) => {
		const newItem = {
			link: item.uri,
			image: (item.pictures.sizes[2].link ? 'https://i.ytimg.com/vi/DqS48q6mQSs/maxresdefault.jpg' : item.pictures.sizes[2].link),
			title: item.name,
			subtitle: item.subcategories[0].name
		}
		return newItem
	})
	return contentMap	
}

export function standardizeCards(context, content) {
	let newContent

	switch (context) {
		case 'videos':
			newContent = cleanVideoCards(content)
			break
		case 'groups':
			newContent = cleanGroupCards(content)
			break
		case 'channels':
			newContent = cleanChannelCards(content)
			break
		case 'categories':
			newContent = cleanCategoryCards(content)
			break
		default:
			console.log('Standardize Cards Defaulted')
			break
	}

	return newContent
}
