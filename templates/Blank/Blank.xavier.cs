using Xavier;
namespace Xavier.PureClient
{
    public partial class XBlank : Xavier.XavierNode
    {
        new public string Route {get;set;} = "''";
        new public bool ShouldRender { get; set; } = true;

        public XBlank(XavierNode xavierNode):base(xavierNode)  {
       }
        public XBlank() { }
    }
}