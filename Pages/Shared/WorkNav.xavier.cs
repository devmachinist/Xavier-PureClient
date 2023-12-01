using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop;

namespace Xavier.PureClient
{
    public partial class WorkNav : XavierNode
    {
        public string SearchText { get; set; } = "";
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
