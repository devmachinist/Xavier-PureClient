using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xavier;
namespace Xavier.PureClient 
    {
    public partial class SimpleNav : Xavier.XavierNode
    {
        new public bool ShouldRender { get; set; } = true;
        new public string Route {get;set;} = "''";
        public SimpleNav(XavierNode xavierNode):base(xavierNode) 
        {
        }
        public SimpleNav() { }
    }
}
