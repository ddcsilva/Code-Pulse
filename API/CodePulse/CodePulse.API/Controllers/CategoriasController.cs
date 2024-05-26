using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriasController : Controller
{
    private readonly ApplicationDbContext _context;

    public CategoriasController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CriarCategoria(CriarCategoriaRequestDTO request)
    {
        var categoria = new Categoria
        {
            Nome = request.Nome,
            Slug = request.Slug
        };

        await _context.Categorias.AddAsync(categoria);
        await _context.SaveChangesAsync();

        var response = new CriarCategoriaResponseDTO
        {
            Id = categoria.Id,
            Nome = categoria.Nome,
            Slug = categoria.Slug
        };

        return Ok(response);
    }
}
