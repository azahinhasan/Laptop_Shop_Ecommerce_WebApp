using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Serialization;

namespace PCHardwareShop
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            /*config.Formatters.Remove(config.Formatters.XmlFormatter);*/

            //it will disable xml request 
            //by this we can disable any kind for request


            // config.Formatters.JsonFormatter.SerializerSettings = new CamelCasePropertyNamesContractResolver();
            // it will convart api output to pascale notation



            //EnableCorsAttribute cors = new EnableCorsAttribute("www.fb.com,www.aiub", "Authorization,Accept", "GET,Post...");
            //config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*"); //(domain,header,methord)
            config.EnableCors(cors);
        }
    }
}
