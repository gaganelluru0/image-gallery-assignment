import axios from 'axios'

export function downloadImage(data){
    return axios(data);
}

export function getImageById(id){
    return axios.get('https://picsum.photos/id/'+id+'/info');
}

export function getImages(url){
    return axios.get(url);
}
