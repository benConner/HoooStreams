angular.module('whooStreams')
.factory('firebaseFactory', function($http){
    return{
        saveToMyMedia : (user, content)=>{
            //
            return $http
            .post(`https://whoostreams.firebaseio.com/${user}.json`, content)
            .then((res)=>{
                console.log("firebaseFactory res", res);
                return res;
            })
            .catch((res)=>{
                console.error(res);
            })
        },
        deleteMyMedia : (user, content)=>{
            //
            return $http
            .delete(`https://whoostreams.firebaseio.com/${user}/${content}.json`)
            .catch((res)=>{
                console.error(res);
            })
        },
        //loads all users media they saved
        loadinMyMedia : (user)=>{
            return $http
            .get(`https://whoostreams.firebaseio.com/${user}.json`)
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
