using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Xavier;
using ShopContext;

namespace Xavier.PureClient
{
    public partial class ResetPassword : XavierNode
        {
        public UserManager<User> usermanager;

        public ResetPassword(XavierNode xavierNode) : base(xavierNode)
        {
        }
        public ResetPassword() { }

        public InputModel Input { get; set; }

        public class InputModel
        {
            public string Email { get; set; }

            public string Password { get; set; }

            public string ConfirmPassword { get; set; }

            public string Code { get; set; }
        }
    }
}
