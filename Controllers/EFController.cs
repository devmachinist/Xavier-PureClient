
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public abstract class EFController<TEntity, TContext> : Controller where TEntity : class, new() where TContext : DbContext
{
    protected readonly TContext _context;

    public EFController(TContext context)
    {
        _context = context;
    }

    //GET /api/[controller]/
    [Route("api/[controller]")]
    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
        return Ok(await _context.Set<TEntity>().ToListAsync());
    }

    //GET /api/[controller]/[id]
    [Route("api/[controller]/{id}")]
    [HttpGet]
    public virtual async Task<IActionResult> Get(string id)
    {
        var entity = await _context.Set<TEntity>().FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }
        return Ok(entity);
    }

    // POST /api/[controller]
    [Route("api/[controller]")]
    [HttpPost]
    public virtual async Task<IActionResult> Post([FromBody] TEntity entity)
    {
        _context.Set<TEntity>().Add(entity);
        await _context.SaveChangesAsync();

        return Created($"api/[controller]/{entity.GetType().GetProperty("Id").GetValue(entity)}", entity);
    }

    // PUT /api/[controller]/[id]
    [Route("api/[controller]/{id}")]
    [HttpPut]
    public virtual async Task<IActionResult> Put(string id, [FromBody] TEntity entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return Ok(entity);
    }

    // DELETE /api/[controller]/[id]
    [Route("api/[controller]/{id}")]
    [HttpDelete]
    public virtual async Task<IActionResult> Delete(string id)
    {
        var entity = await _context.Set<TEntity>().FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }
        _context.Set<TEntity>().Remove(entity);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}