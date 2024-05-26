using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface;

public interface ICategoriaRepository
{
    Task<Categoria> CriarAsync(Categoria categoria);
    
    Task<IEnumerable<Categoria>> ObterTodasAsync();

    Task<Categoria?> ObterPorIdAsync(Guid id);
}
