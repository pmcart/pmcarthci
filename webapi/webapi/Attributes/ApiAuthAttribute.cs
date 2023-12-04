using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Attributes
{
    public class ApiAuthAttribute : Attribute, IAsyncActionFilter
    {
        private const string HEADER_NAME = "Api_key";
        public async Task OnActionExecutionAsync
               (ActionExecutingContext context, ActionExecutionDelegate next)
        {
            
            bool success = context.HttpContext.Request.Headers.TryGetValue
                (HEADER_NAME, out var apiKeyFromHttpHeader);
            if (!success)
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401,
                    Content = "The Api Key for accessing this endpoint is not available"
                };
                return;
            }

            //WOULD NEVER DO THIS IN PRODUCTION
            if (apiKeyFromHttpHeader != "randomtestkey")
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401, // Unauthorized
                    Content = "Invalid API Key"
                };
                return;
            }

            await next();
        }
    }
}

