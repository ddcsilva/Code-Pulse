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

    [HttpGet]
    [Route("{id:Guid}")]
    public async Task<IActionResult> ObterCategoriaPorId([FromRoute] Guid id)
    {
        var categoria = await _categoriaRepository.ObterPorIdAsync(id);

        if (categoria is null)
        {
            return NotFound();
        }

        var response = new CriarCategoriaResponseDTO
        {
            Id = categoria.Id,
            Nome = categoria.Nome,
            Slug = categoria.Slug
        };

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CriarCategoria([FromBody] CriarCategoriaRequestDTO request)
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

    [HttpPut]
    [Route("{id:Guid}")]
    public async Task<IActionResult> AtualizarCategoria([FromRoute] Guid id, [FromBody] AtualizarCategoriaRequestDTO request)
    {
        var categoria = new Categoria
        {
            Id = id,
            Nome = request.Nome,
            Slug = request.Slug
        };

        categoria = await _categoriaRepository.AtualizarAsync(categoria);

        if (categoria is null)
        {
            return NotFound();
        }

        var response = new AtualizarCategoriaResponseDTO
        {
            Id = categoria.Id,
            Nome = categoria.Nome,
            Slug = categoria.Slug
        };

        return Ok(response);
    }

    [HttpDelete]
    [Route("{id:Guid}")]
    public async Task<IActionResult> RemoverCategoria([FromRoute] Guid id)
    {
        var categoria = await _categoriaRepository.RemoverAsync(id);

        if (categoria is null)
        {
            return NotFound();
        }

        var response = new CriarCategoriaResponseDTO
        {
            Id = categoria.Id,
            Nome = categoria.Nome,
            Slug = categoria.Slug
        };

        return Ok(response);
    }
}
