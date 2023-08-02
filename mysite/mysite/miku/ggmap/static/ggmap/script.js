var firebaseConfig = {
  	apiKey: "AIzaSyDnyzhNNeEORTPNdmc8sfFxl13hZx_t73k",
  	authDomain: "lidar-ea564.firebaseapp.com",
  	databaseURL: "https://lidar-ea564-default-rtdb.firebaseio.com",
  	projectId: "lidar-ea564",
  	storageBucket: "lidar-ea564.appspot.com",
  	messagingSenderId: "692475158447",
  	appId: "1:692475158447:web:d0a3fdf6f785447b50995a",
  	measurementId: "G-35VBR13BXS"
 };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var Command = firebase.database().ref('Command');
  var ForwardTime = firebase.database().ref('ForwardTime')

function setData(Cmd){
    var Command = firebase.database().ref('Command');
	Command.set(Cmd)
	.then(function () {
        console.log("Dữ liệu đã được gửi thành công lên Firebase!");
      })
      .catch(function (error) {
        console.error("Lỗi khi gửi dữ liệu lên Firebase: ", error);
      });

}
function defaut(){
		var cmd = "STOP"
		setData(cmd);
}
defaut();