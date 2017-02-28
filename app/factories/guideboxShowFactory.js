angular.module('whooStreams')
.factory('guideboxShowFactory', function($http){
    return{
        loadinShows : ()=>{
            return $http
            .get('http://api-public.guidebox.com/v2/shows?api_key=801414ed2250b78cfd77530a81236699a890f6ec&limit=24')
            .then((res)=>{
                return res.data.results;
            })
        },
        findShow : (title)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/search?api_key=801414ed2250b78cfd77530a81236699a890f6ec&type=show&field=title&query=${title}`)
            .then((res)=>{
                return res.data.results.slice(0,12);
            })
        },
        findShowByID : (id)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/shows/${id}/available_content?api_key=801414ed2250b78cfd77530a81236699a890f6ec&sources=free,amazon_prime,netflix,hulu,hbo,showtime,stars,i_tune,google_play,cinemax,vudu`)
            .then((res)=>{
                return res.data.results.web.episodes.all_sources;
            })
        },
        findShowEpisode : (id)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/shows/${id}/episodes?api_key=801414ed2250b78cfd77530a81236699a890f6ec&platform=web&sources=subscription&include_links=true `)
            .then((res)=>{
                return res.data.results;
            })
        },
    }
})
