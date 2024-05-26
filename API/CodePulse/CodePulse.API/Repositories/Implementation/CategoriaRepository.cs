using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Repositories.Implementation;

public class CategoriaRepository : ICategoriaRepository
{
    private readonly ApplicationDbContext _context;

    public CategoriaRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Categoria>> ObterTodasAsync()
    {
        return await _context.Categorias.ToListAsync();
    }

    public Task<Categoria?> ObterPorIdAsync(Guid id)
    {
        return _context.Categorias.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<Categoria> CriarAsync(Categoria categoria)
    {
        await _context.Categorias.AddAsync(categoria);
        await _context.SaveChangesAsync();

        return categoria;
    }

    public async Task<Categoria?> AtualizarAsync(Categoria categoria)
    {
        var categoriaExistente = await _context.Categorias.FirstOrDefaultAsync(c => c.Id == categoria.Id);

        if (categoriaExistente is not null)
        {
            _context.Entry(categoriaExistente).CurrentValues.SetValues(categoria);
            await _context.SaveChangesAsync();

            return categoria;
        }

        return null;
    }
}
