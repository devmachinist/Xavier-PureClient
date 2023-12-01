using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using Xavier;

namespace Xavier.PureClient
{
    public partial class Register : XavierNode
    {
        new public string Route {get;set;} = "'/register'";
        new public bool ShouldRender {get;set;} = true;

        private readonly ILogger<Register> _logger;
        private readonly IEmailSender _emailSender;

        public Register(XavierNode xavierNode) : base(xavierNode)
        {
        
        }
        public Register() { }

        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public IList<AuthenticationScheme> ExternalLogins { get; set; }

        public class InputModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
            public string Firstname { get; set; }
            public string Lastname { get; set; }
            public string Phone { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string Zip { get; set; }
            public string Organization { get; set; }
        }
    }
}
