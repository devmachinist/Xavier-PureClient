using Xavier;
using Microsoft.Build.Logging;
using System.Security.Cryptography.X509Certificates;

namespace Xavier.PureClient
{
    public partial class Documentation : Xavier.XavierNode
    {
        public string Title { get; set; } = "Xavier | Documentation";

        new public string Route {get;set;} = "'/'";
        new public bool ShouldRender { get; set; } = true;
        public string[] Items = new[]{"item1","item2","item3"};

        public Documentation(XavierNode xavierNode) :base(xavierNode){
        }
        public Documentation(){
        }

    }
}