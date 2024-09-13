using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Xavier;
using Xavier.AspNetCore;
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
            //Name your spa - it should match your constellation endpoint target
            string appDataPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            var memory = new Memory();
            var builder = WebApplication.CreateBuilder();
            await memory.Init(
                    builder.Environment.ContentRootPath,
                    builder.Environment.WebRootPath +"/Xavier",
                    typeof(Program).Assembly,
                    true
                    );
            builder.Host.UseDefaultServiceProvider(options => options.ValidateScopes = false);
            builder.Services.AddControllers();
            builder.Services.AddRazorPages();
            memory.StaticFallback = builder.Environment.WebRootPath+"/index.html";
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<Ssr>();
            var app = builder.Build();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            //This targets your SSR components by searching for @page in the first line of the files and treating them
            // as complete pages... Attempting to call a page component from the Xavier.js file will cause a failure.
            app.MapXavierNodes("{controller=Home}/{action=Index}/{id?}", builder.Environment.ContentRootPath+"/Pages", memory);
            app.UseHttpsRedirection();
            app.MapFallbackToFile(builder.Environment.WebRootPath);
            app.MapRazorPages();
            app.MapControllers();
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseRouting();
            app.Run();
        }
    }
}

