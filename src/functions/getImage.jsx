export default function getImage(array){

	let item
	if (typeof window !== "undefined") {

		const width = window.innerWidth
		// console.log(width)
		switch(true){

			case width < 600:
				// console.log('1---------')
				// item = array.find(a => a.width == '300')
				// item = array.find(a => a.name === 'medium')
				item = array.find(a => a.name === 'medium_large')
				// item = array.find(a => a.name === 'large')

			break;
			case width > 600 && width < 1200:
				// console.log('2---------')	
				// item = array.find(a => a.width == '768')
				item = array.find(a => a.name === 'medium_large')
				// item = array.find(a => a.name === 'large')

			break;
			case width > 1200:
				// console.log('3---------')	
				// item = array.find(a => a.width == '1024')
				item = array.find(a => a.name === 'large')

			break;
			default:
				// console.log('4------------')
				// item = array.find(a => a.name === 'medium')
				item = array.find(a => a.name === 'large')

			break;

		}
	}
	else{
		// console.log('5----------------')
		// item = array.find(a => a.width = '300')
		// item = array.find(a => a.name === 'medium')
		item = array.find(a => a.name === 'large')

	}
	

	// console.log(array)
	// console.log(item)
	// console.log(item.sourceUrl)

	if(item){

		return item.sourceUrl	
	}
	else{

		return array[0].sourceUrl
	}
	
}