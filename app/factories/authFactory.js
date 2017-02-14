angular.module('whooStreams')
.factory('authFactory', function ($location, $q) {
    return {
        //login user
        login: (email, password) => {
            return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
        },
        //register new user
        register : (email, password, username) => {
            return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, password))
            .then((user)=>{
                user.updateProfile({
                    displayName: username
                })
            })
        },
        // logout user
        logOut : () =>{
            console.log("logout");
            firebase.auth().signOut()
        },
        // config resolve
        showHideLogout : ()=> {
            return $q((resolve, reject)=>{
                const authReady = firebase.auth().onAuthStateChanged(user => {
                    authReady()
                    if (!user) {
                        $location.url('/')
                        resolve(null)
                    } else if (user) {
                        resolve(user)
                    }
                  })
            })
        }
    }

})
