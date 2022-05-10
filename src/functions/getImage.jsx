function sortList(list){

	return list.sort((a,b) => {
        return parseFloat(a.width) - parseFloat(b.width);
    });
 
}

export default function getImage(array){

	let item
	if (typeof window !== "undefined" && array) {

		const width = window.innerWidth
		
		const sortedArray = sortList(array)
		const thumbnail = sortedArray.filter(array => array.name ==='thumbnail')
		const medium = sortedArray.filter(array => array.name ==='medium')
		const medium_large = sortedArray.filter(array => array.name ==='medium_large')
		const large = sortedArray.filter(array => array.name ==='large')
		
		switch(true){

			case width < 600:
				
				if(medium_large[0]){

					item = medium_large[0]
				}
				else{

					item = large[0]

				}

			break;
			case width >= 600:
				
				if(large[0]){

					item = large[0]
				}
				else{

					item = medium_large[0]

				}

			break;
			default:
			
			break;

		}

		
		if(item && item.sourceUrl){

			return item.sourceUrl

		}
		else{

			return null
		}

	}else{

		return null
	}
	
}