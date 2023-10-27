import axios from 'axios';


const searchImages = async(event, page) => {
        
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}`, {
            headers: {
                Authorization: 'Client-ID SvHl0MFp5Fd_bhB343FhkifkuZgRowljF2FQG7x8fcs'
            },
            params:{
                query: event
                },
        });
        page++;
        // console.log(response.data.results[0].urls);
        const b = response.data.results;
        console.log(response.data);
        return b;

        // try {
        //     const response = await axios.get('https://api.unsplash.com/search/photos', {
        //         headers: {
        //             Authorization: 'Client-ID SvHl0MFp5Fd_bhB343FhkifkuZgRowljF2FQG7x8fcs'
        //         },
        //         params: {
        //             query: event
        //         },
        //     });
    
        //     if (response.data.results && response.data.results.length > 0) {
        //         // Data received successfully
        //         const images = response.data.results;
        //         return images;
        //     } else {
        //         // No data received from the server
        //         throw new Error('No data received from the server');
        //     }
        // } catch (error) {
        //     // Handle Axios or other errors
        //     console.error('Error:', error.message);
        //     alert(error.message); // Rethrow the error to handle it at the higher level, if needed.
        // }

};

export default searchImages;