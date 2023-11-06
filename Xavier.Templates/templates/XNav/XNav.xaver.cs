namespace Xavier.PureClient
{
    public partial class XNav : Xavier.XavierNode
    {
        new public string? Route { get; set; } = null;
        public string? JSON { get; set; } = "This is a description";
        public string[] Menu = new[]{"Components","Ssr","Documentation"};

        public XNav(XavierNode xavierNode):base(xavierNode)  {
        }
        public XNav() { }
    }
}