using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop;
using ShopContext;

namespace Xavier.PureClient
{
    public partial class WorkNav : XavierNode
    {
        public string SearchText { get; set; } = "";
        public List<User> UserSearchResults { get; set; } = new List<User>();
        public List<Product> ComponentSearchResults { get; set; } = new List<Product>();
        public List<Game> EntitySearchResults { get; set; } = new List<Game>();
        new public bool ShouldRender { get; set; } = true;
        public WorkNav(XavierNode xavierNode) : base(xavierNode) { }
        public WorkNav() { }
    

    //private async Task DeleteContactAsync()
    //{
    //    using var context = LxNewsxlSqlContextFactory.CreateDbContext();

    //    Filters.Loading = true;

    //    var deletingEntity= await context.Entities.FirstAsync(
    //        c => c.Id == Wrapper.DeleteRequestId);

    //    if (contact != null)
    //    {
    //        context.Contacts.Remove(contact);
    //        await context.SaveChangesAsync();
    //    }

    //    Filters.Loading = false;

    //    await ReloadAsync();
    //}

}
}
