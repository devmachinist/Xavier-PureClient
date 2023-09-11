
using Microsoft.Build.Logging;
using System.Security.Cryptography.X509Certificates;

namespace Xavier.PureClient
{
    public partial class Components : Xavier.XavierNode
    {
        public string Title { get; set; } = "Xavier | A new frame";

        new public string Route {get;set;} = "'/'";
        new public bool ShouldRender { get; set; } = true;

        public Components(XavierNode xavierNode) :base(xavierNode){
        }
        public Components(){
        }
    }
}