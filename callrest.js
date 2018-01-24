var jwtb = false;
var bkgXMLReq;
var bolXMLReq;
var finXMLReq;
var admXMLReq;
var api_url = "http://api.ccp.dasoji.net";



function responseHandler(res) {
    var data = [];
    for (var key in res) {
        data.push({
            key: key,
            value: res[key]
        });
    }
    return data;
}

function callApi(element, url)
{
    var apiXMLReq = new XMLHttpRequest();
    apiXMLReq.onreadystatechange = function() {
        if (this.readyState == 4)
        {
            $(function () {
                $(element).bootstrapTable({
                    data: responseHandler(JSON.parse(apiXMLReq.responseText))
                });
            });
            if (this.status == 200)
            {
                $(element).removeClass("noauthrest");
                $(element).addClass("authrest");
            }
            else if (this.status == 403)
            {
                $(element).removeClass("authrest");
                $(element).addClass("noauthrest");
            }

        }
      };
    apiXMLReq.open("GET", api_url + url , true );
    apiXMLReq.setRequestHeader("Authorization", jwtb);
    apiXMLReq.send(null);

}

function callRest()
{

    if (sessionStorage.id_token == null || sessionStorage.id_token.length == 0) {

      window.location.href = "index.html";
    }

    else{

        jwtb="Bearer "+ sessionStorage.id_token;
        callApi('#booking','/booking');
        callApi('#bol','/bol');
        callApi('#finance','/finance');
        callApi('#admin','/admin');

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
