angular.module('whooStreams')
.factory('firebaseFactory', function($http){
    return{
        saveToMyMedia : (user, content)=>{
            return $http
            .post(`https://whoostreams.firebaseio.com/user.json`, content)
            .then((res)=>{
                console.log("firebaseFactory res", res);
                return res;
            })
            .catch((res)=>{
                console.error(res);
            })
        },
        loadinMyMedia : (user)=>{
            return $http
            .get(`https://whoostreams.firebaseio.com/user.json`)
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
