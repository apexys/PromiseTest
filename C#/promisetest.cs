using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CSEXP
{
    public class Csexp{
        public static void Main(){
	    string rooturl = "http://localhost:8000/files/";
            string[] urls = new string[500];
	    for(int i = 0; i < 500; i++){
		urls[i] = rooturl + i.ToString();
	    }
            Console.WriteLine("Creating Requests!");
            Parallel.ForEach(urls, (url)=>{
                WebRequest request = WebRequest.Create(url);
                WebResponse response = request.GetResponse();
                Console.WriteLine(url.ToString() + ": " + ((HttpWebResponse)response).StatusDescription);
                response.Close();
            });
        }
    }
}
