import Axios from 'axios'

export function getBackground() {
    const baseUrl = 'https://www.bing.com';
    Axios.get(`${baseUrl}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
        .then((response) => {
            var teste ='';
            for(const resp of response.images){
                teste.concat(resp.url);
            }
            console.log(teste);
        })
}