using Xavier;


namespace Xavier.PureClient
{
    public partial class XTerminal : Xavier.XavierNode
    {
        new public string Route {get;set;} = "''";
        new public bool ShouldRender { get; set; } = true;
        public string TerminalTitle { get; set; } = "";
        public string? OpenAIKey {get;set;} = "";

        public XTerminal(XavierNode xavierNode):base(xavierNode)  {
            OpenAIKey = Constants.openAIKey;
       }
        public XTerminal() {
            OpenAIKey = Constants.openAIKey;
         }
    }
}