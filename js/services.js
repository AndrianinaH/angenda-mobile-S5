angular.module('starter.services', [])

.factory('Agenda', function($http,$state) { 
    
    return{
        //------------- affichage image de profil -----------//
        getInitial: function(email){
            return email.charAt(0).toUpperCase();
        },
        getColor: function(){
            var num=Math.floor((Math.random() * 5) + 1);
            switch(num) {
              case 1:
                return "positive";
              case 2:
                return "calm";
              case 3:
                return "assertive";
              case 4:
                return "royal";
              case 5:
                return "energized";  
            }
        },
        //------------- test de login -----------//
        testUser: function(email,mdp)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/login.jsp",
            data: 'mail='+email+'&mdp='+mdp,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- test de login -----------//
        createUser: function(nom,datenaissance,email,mdp)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/inscription.jsp",
            data: 'nom='+nom+'&dateNaiss='+datenaissance+'&mail='+email+'&pass='+mdp,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
//----------------------------- gestion des taches des utilisateurs --------------------------------//
    //------------------------ affichage des taches des utilisateurs ----------------------//
        //------------- get taskbox by idUser -----------//
        getTaskBox: function(idUser)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/taskBoxByUser.jsp",
            data: 'idUser='+idUser,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- get archive by idUser -----------//
        getArchive: function(idUser)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/archiveTache.jsp",
            data: 'idUser='+idUser,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- get Task By idTaskBox -----------//
        getTaskNonFait: function(idTaskBox)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/tacheNonFaitUser.jsp",
            data: 'idTaskBox='+idTaskBox,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- get Task aujourdhui -----------//
        getTaskAujourdhui: function(idUser)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/tacheAujourdhui.jsp",
            data: 'idUser='+idUser,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- get Task semaine -----------//
        getTaskSemaine: function(idUser)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/tacheSemaine.jsp",
            data: 'idUser='+idUser,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
    //------------------------ creation et update des taches des utilisateurs ----------------------//
        //------------- terminer tache -----------//
        terminerTache: function(idTask)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/terminerTache.jsp",
            data: 'idTask='+idTask,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
        //------------- restaurer tache -----------//
        restaurerTache: function(idTask)
        {
            return $http({
            method: "post",
            url: "http://localhost:8080/listeo/webservice/restaurerTache.jsp",
            data: 'idTask='+idTask,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        },
    } 
});



