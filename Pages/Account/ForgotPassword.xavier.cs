using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Encodings.Web;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Xavier;
using Microsoft.AspNetCore.Identity.UI.Services;
using ShopContext;

namespace Xavier.PureClient
{
    public partial class ForgotPassword : XavierNode
    {
        public UserManager<User> usermanager;
        public IEmailSender emailsender;

        public ForgotPassword(XavierNode xavierNode) : base(xavierNode)
        {
        }
        public ForgotPassword() { }
        public InputModel Input { get; set; }
        public class InputModel
        {
            public string Email { get; set; }
        }
     }
}
