angular.module('whooStreams')
.factory('firebaseFactory', function($http){
    return{
        saveToMyMovies : (content)=>{
            return $http
            .post(`https://whoostreams.firebaseio.com/.json`, content)
            .then((res)=>{
                console.log("firebaseFactory res", res);
                return res;
            })
            .catch((res)=>{
                console.error(res);
            })
        }
        loadinMyMovies : (type)=>{
            return $http
            .get(`https://whoostreams.firebaseio.com/.json`)
            .then((res)=>{
                console.log("firebaseFactory res", res);
                return res;
            })
            .catch((res)=>{
                console.error(res);
            })
        }
    }
})
