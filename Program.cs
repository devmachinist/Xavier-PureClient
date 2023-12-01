using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Xavier;
using Xavier.AOT;
using Xavier.Constellations;
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
            string appDataPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            Directory.SetCurrentDirectory("C:/users/x/source/repos/Xavier.Singularity/Xavier.PureClient");
            var XavierOne = Constellation.Parser.Parse("Constellation.yml");
            await XavierOne.Init();
            XavierOne.Start();
            var aot = new XAOT();
            Parallel.Invoke(async () =>
            {
                await aot.Init(
                    memory,
                    Environment.CurrentDirectory,
                    Environment.CurrentDirectory + "/Live/Xavier",
                    null,
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
            app.UseStaticFiles();
            // Set your static libraries like so... They can target anywhere on your machine
            // in order to give you direct access to the react app
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Environment.CurrentDirectory + "/node_modules"),
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
            app.Run();

        }
    }
}

