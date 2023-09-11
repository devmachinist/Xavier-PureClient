using Xavier;
using System.Text.Json;
using System.Security.Claims;

namespace Xavier.PureClient
{
    public partial class Anonymous : Xavier.XavierNode
    {
        public ClaimsPrincipal authenticationstate {get;set;} = new ClaimsPrincipal();

        new public bool ShouldRender { get; set; } = true;
        new public string? Route { get; set; } = null;


        public Anonymous(XavierNode xavierNode) :base(xavierNode){
        
        }
        public Anonymous() { }


    }
}