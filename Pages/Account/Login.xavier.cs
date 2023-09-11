using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Xavier;
using ShopContext;

namespace Xavier.PureClient
{
    public partial class Login : XavierNode
    {
        new public bool ShouldRender {get;set;} = true;
        public UserManager<User> _userManager ;
        public SignInManager<User> _signInManager;
        public ILogger<Login> _logger;
        new public string? Route {get;set;} = "'/login'";


        public Login(XavierNode xavierNode) : base(xavierNode)
        {
            
        }
        public Login() { }
        public InputModel Input { get; set; }
        public List<AuthenticationScheme> ExternalLogins { get; set; }
        public string? ReturnUrl { get; set; }
        public string ErrorMessage { get; set; }
        public class InputModel
        {
            public string Email { get; set; }

            public string Password { get; set; }

            public bool RememberMe { get; set; }
        }
    }
}
