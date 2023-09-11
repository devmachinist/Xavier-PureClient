namespace Xavier.PureClient
{
    public partial class Homepage : Xavier.XavierNode
    {
        new public string Route {get;set;} = "''";
        new public bool ShouldRender { get; set; } = true;
        public Homepage(XavierNode xavierNode) :base(xavierNode) {
        }
        public Homepage() { }
    }
}