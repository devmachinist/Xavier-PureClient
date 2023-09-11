using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using ShopContext;
using System;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Xavier;
using Xavier.AOT;
using Xavier.PureClient.Controllers;
using Xavier.Constellations;
using Microsoft.Graph.Education.Classes.Item.Assignments.Item.Submissions.Item.Return;
using static System.Net.WebRequestMethods;
using System.Security.Policy;
using System.Net.Http.Headers;
using NuGet.Protocol;
using Microsoft.Extensions.FileProviders;
using System;
using System.Text.Json;
using System.Drawing;

namespace Xavier.PureClient
{
    public static class Constants
    {
        public static string? MSALClientId { get; set; }
        public static string? MSALKey { get; set; }
        public static string? openAIKey { get; set; }
    }

    public class Program
    {
        static async Task Main(string[] args)
        {
            var memory = new Memory();

            //Name your spa - it should match your constellation endpoint target
            var spa = "XavierReact";
            string appDataPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            Directory.SetCurrentDirectory("C:/users/x/source/repos/Xavier.Singularity/Xavier.PureClient");
            var XavierOne = Constellation.Parser.Parse("Constellation.yml");
            await XavierOne.Init();
            XavierOne.Start();
            var SpaClient = new HttpClient()
            {
                BaseAddress = new Uri("https://localhost:" + XavierOne
                            .GetEndpoints()
                                .Where(p => p.Key == spa)
                                    .First().Value.Port),
            };

            var context = new ShopLiteFactory().CreateDbContext(new[] { "cool" });
            var contexts = new List<DbContext>();
            contexts.Add(context);
            var aot = new XAOT();
            Parallel.Invoke(async () =>
            {
                await aot.Init(
                    memory, Environment.CurrentDirectory,
                     Environment.CurrentDirectory + "/Live/Xavier",
                      contexts,
                       typeof(Program).Assembly
                       );
            });
            var builder = WebApplication.CreateBuilder(new WebApplicationOptions
            {
                Args = args,
                WebRootPath = Environment.CurrentDirectory + "/Live" // Change web root to myroot folder
            });
            builder.Host.UseDefaultServiceProvider(options => options.ValidateScopes = false);
            builder.Services.AddControllers();
            builder.Services.AddRazorPages();
            memory.StaticFallback = Environment.CurrentDirectory + "/Live/index.html";
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<Ssr>();
            var app = builder.Build();
            app.UseDefaultFiles();
            // Map the React App to the React endpoint
            app.MapGet("/React/{controller=Home}/{action=Index}/{id?}",
                async context =>
                {
                    // Get the port from the endpoint
                    // This assumes it's running on the same machine and uses localhost
                    using HttpRequestMessage request = new(
                        HttpMethod.Get, "/");
                    using HttpResponseMessage response = await SpaClient
                            .SendAsync(request);
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
                    await context.Response.WriteAsync(await response.Content.ReadAsStringAsync());
                }
            );
            app.UseStaticFiles();
            // Set your static libraries like so... They can target anywhere on your machine
            // in order to give you direct access to the react app

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider("C:/Users/x/source/repos/Xavier.React/ClientApp/public"),
                RequestPath = new PathString("/StaticReact")
            });
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider("C:/Users/x/source/repos/Xavier.Singularity/Xavier.PureClient/node_modules"),
                RequestPath = new PathString("/node_modules")
            });
            //This targets your SSR components by searching for @page in the first line of the files and treating them
            // as complete pages... Attempting to call a page component from the Xavier.js file will cause a failure.
            app.MapXavierNodes("{controller=Home}/{action=Index}/{id?}", Environment.CurrentDirectory + "/Pages", memory);
            app.UseHttpsRedirection();
            app.MapFallbackToFile(Environment.CurrentDirectory + "/Live");
            app.MapRazorPages();
            app.MapControllers();
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseRouting();
            //Constellation.ControlConstellation(XavierOne);
            app.Run();

        }
    }
}

