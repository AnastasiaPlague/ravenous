const apiKey = '4tO6W9NZHNAVI6gipGlDbiPcE3R3tRe9sY0H77CZRDT7VRJuNqMlviyZnVyQDAkk2BMcbIfuTcb9h5XIVAgpLNOcUbxwS0Jk6XajapEvthlO5mmcI_vrFzrnghZhXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                };
            });
    }
}

export default Yelp