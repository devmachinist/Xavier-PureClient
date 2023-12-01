using Xavier;
namespace Xavier.PureClient
{
    public partial class AuthCallback : Xavier.XavierNode
    {
        public string error { get; set; } = "{}";
        new public string Route { get; set; } = "''";
        new public bool ShouldRender { get; set; } = true;
        public AuthCallback(XavierNode xavierNode) : base(xavierNode) {
            
        }
        public AuthCallback() { }
    }
}