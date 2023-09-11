using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Text.Json;
using System.Text.Json.Nodes;
using Xavier.Constellations;

namespace Xavier.PureClient.Controllers
{
    public class SsrController : EngineController<Ssr>
    {
        public SsrController() 
        {

        }
    }
    public class ConstellationController : EngineController<Constellation>
    {
        public ConstellationController() 
        {

        }
    }


    public class EngineController<T> : ControllerBase where T : class, new()
    {
        private T Node { get; set; }

        public EngineController() 
        {
        }
        // Get /[methodname]
        [HttpPost("api/[controller]/{methodName}")]
        public virtual async Task<IActionResult> Post([FromRoute] string methodName, [FromBody] object[] parameters)
        {
            Node = new T();

            var method = Node.GetType().GetMethod(methodName);

            if (method == null)
                return NotFound();

            var result = method.Invoke(Node, parameters);
            return Ok(result);
        }
    }
}
