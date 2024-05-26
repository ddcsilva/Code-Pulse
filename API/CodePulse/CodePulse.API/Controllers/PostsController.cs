using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly IPostRepository _postRepository;

    public PostsController(IPostRepository postRepository)
    {
        _postRepository = postRepository;
    }

    [HttpPost]
    public async Task<IActionResult> CriarPost([FromBody] CriarPostRequestDTO request)
    {
        var post = new Post
        {
            Titulo = request.Titulo,
            DescricaoCurta = request.DescricaoCurta,
            Conteudo = request.Conteudo,
            UrlImagemDestaque = request.UrlImagemDestaque,
            Slug = request.Slug,
            DataPublicacao = request.DataPublicacao,
            Autor = request.Autor,
            EhVisivel = request.EhVisivel
        };

        var postCriado = await _postRepository.CriarAsync(post);

        var response = new CriarPostResponseDTO
        {
            Id = postCriado.Id,
            Titulo = postCriado.Titulo,
            DescricaoCurta = postCriado.DescricaoCurta,
            Conteudo = postCriado.Conteudo,
            UrlImagemDestaque = postCriado.UrlImagemDestaque,
            Slug = postCriado.Slug,
            DataPublicacao = postCriado.DataPublicacao,
            Autor = postCriado.Autor,
            EhVisivel = postCriado.EhVisivel
        };

        return Ok(response);
    }
}
