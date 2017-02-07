angular.module('whooStreams')
.factory('guideboxFactory', function($http){
    return{
        loadinMovie : ()=>{
            return $http
            .get('http://api-public.guidebox.com/v2/movies?api_key=801414ed2250b78cfd77530a81236699a890f6ec ')
            .then((res)=>{
                return res.data.results;
            })
        },
        findMovie : (title)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/search?api_key=801414ed2250b78cfd77530a81236699a890f6ec&type=movie&field=title&query=${title}`)
            .then((res)=>{
                return res.data.results;
            })
        }
    }
})
