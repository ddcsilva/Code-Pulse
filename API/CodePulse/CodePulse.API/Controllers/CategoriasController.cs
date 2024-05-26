using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriasController : Controller
{
    private readonly ICategoriaRepository _categoriaRepository;

    public CategoriasController(ICategoriaRepository categoriaRepository)
    {
        _categoriaRepository = categoriaRepository;
    }

    [HttpGet]
    public async Task<IActionResult> ObterTodasCategorias()
    {
        var categorias = await _categoriaRepository.ObterTodasAsync();

        var response = new List<CriarCategoriaResponseDTO>();
        foreach (var categoria in categorias)
        {
            response.Add(new CriarCategoriaResponseDTO
            {
                Id = categoria.Id,
                Nome = categoria.Nome,
                Slug = categoria.Slug
            });
        }

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CriarCategoria(CriarCategoriaRequestDTO request)
    {
        var categoria = new Categoria
        {
            Nome = request.Nome,
            Slug = request.Slug
        };

        await _categoriaRepository.CriarAsync(categoria);

        var response = new CriarCategoriaResponseDTO
        {
            Id = categoria.Id,
            Nome = categoria.Nome,
            Slug = categoria.Slug
        };

        return Ok(response);
    }
}
