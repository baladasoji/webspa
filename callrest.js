var jwtb = false;
var bkgXMLReq;
var bolXMLReq;
var finXMLReq;
var admXMLReq;
var api_url = "http://api.ccp.apmoller.net:8888";


function callRest()
{

//checkHash();

if (sessionStorage.usi_id_token == null || sessionStorage.usi_id_token.length == 0) {

  window.location.href = "index.html";
}

else{

    jwtb="Bearer "+ sessionStorage.usi_id_token;

    bkgXMLReq = new XMLHttpRequest();
    bkgXMLReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("booking").innerHTML = this.responseText;
          document.getElementById("booking").className='authrest'  
        }
        else if (this.readyState == 4 && this.status == 403) {
          document.getElementById("booking").innerHTML = this.responseText;
          document.getElementById("booking").className='noauthrest'  
        }
      };
    bkgXMLReq.open("GET", api_url + "/booking", true );
    bkgXMLReq.setRequestHeader("Authorization", jwtb);
    bkgXMLReq.send(null);

    bolXMLReq = new XMLHttpRequest();
    bolXMLReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("bol").innerHTML = this.responseText;
          document.getElementById("bol").className='authrest'  
        }
        else if (this.readyState == 4 && this.status == 403) {
          document.getElementById("bol").innerHTML = this.responseText;
          document.getElementById("bol").className='noauthrest'  
        }
      };
    bolXMLReq.open("GET", api_url+ "/bol", true );
    bolXMLReq.setRequestHeader("Authorization", jwtb);
    bolXMLReq.send(null);

    finXMLReq = new XMLHttpRequest();
    finXMLReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("finance").innerHTML = this.responseText;
          document.getElementById("finance").className='authrest'  
        }
        else if (this.readyState == 4 && this.status == 403) {
          document.getElementById("finance").innerHTML = this.responseText;
          document.getElementById("finance").className='noauthrest'  
        }
      };
    finXMLReq.open("GET", api_url + "/finance", true );
    finXMLReq.setRequestHeader("Authorization", jwtb);
    finXMLReq.send(null);

    admXMLReq = new XMLHttpRequest();
    admXMLReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("admin").innerHTML = this.responseText;
          document.getElementById("admin").className='authrest'  
        }
        else if (this.readyState == 4 && this.status == 403) {
          document.getElementById("admin").innerHTML = this.responseText;
          document.getElementById("admin").className='noauthrest'  
        }
      };
    admXMLReq.open("GET", api_url+ "/admin", true );
    admXMLReq.setRequestHeader("Authorization", jwtb);
    admXMLReq.send(null);


    usrXMLReq = new XMLHttpRequest();
    usrXMLReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("userdetails").innerHTML = this.responseText;
          document.getElementById("userdetails").className='authrest'  
        }
        else if (this.readyState == 4 && this.status == 403) {
          document.getElementById("userdetails").innerHTML = this.responseText;
          document.getElementById("userdetails").className='noauthrest'  
        }
      };
    usrXMLReq.open("GET", api_url+ "/userdetails", true );
    usrXMLReq.setRequestHeader("Authorization", jwtb);
    usrXMLReq.send(null);

  }
}
