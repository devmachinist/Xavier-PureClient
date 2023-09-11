using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using Microsoft.Graph;
using ShopContext;
using Xavier.PureClient;
using Xavier;
using System.Reflection;
using Microsoft.Extensions.Logging;

namespace Xavier.PureClient.Controllers;

[Authorize]
[ApiController]
[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
public class UsersController : EFController<ShopContext.User, ShopLite>
{
    private readonly GraphServiceClient _graphServiceClient;

    private readonly ILogger<UsersController> _logger;

    public UsersController(ILogger<UsersController> logger, GraphServiceClient graphServiceClient,ShopLite context) : base(context)
    {
        _logger = logger;
        _graphServiceClient = graphServiceClient;
     }
}
[Authorize]
[ApiController]
[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
public class ProductsController : EFController<ShopContext.Product, ShopLite>
{
    private readonly GraphServiceClient _graphServiceClient;

    private readonly ILogger<ProductsController> _logger;

    public ProductsController(ILogger<ProductsController> logger, GraphServiceClient graphServiceClient,ShopLite context) : base(context)
    {
        _logger = logger;
        _graphServiceClient = graphServiceClient;
     }
}

[Authorize]
[ApiController]
[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
public class ShopsController : EFController<ShopContext.Shop, ShopLite>
{
    private readonly GraphServiceClient _graphServiceClient;

    private readonly ILogger<ShopsController> _logger;

    public ShopsController(ILogger<ShopsController> logger, GraphServiceClient graphServiceClient,ShopLite context) : base(context)
    {
        _logger = logger;
        _graphServiceClient = graphServiceClient;
     }
}

[Authorize]
[ApiController]
[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
public class GamesController : EFController<ShopContext.Game, ShopLite>
{
    private readonly GraphServiceClient _graphServiceClient;

    private readonly ILogger<GamesController> _logger;

    public GamesController(ILogger<GamesController> logger, GraphServiceClient graphServiceClient,ShopLite context) : base(context)
    {
        _logger = logger;
        _graphServiceClient = graphServiceClient;
     }
}

