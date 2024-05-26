namespace CodePulse.API.Models.Domain;

public class Post
{
    public Guid Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string DescricaoCurta { get; set; } = string.Empty;
    public string Conteudo { get; set; } = string.Empty;
    public string UrlImagemDestaque { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public DateTime DataPublicacao { get; set; }
    public string Autor { get; set; } = string.Empty;
    public bool EhVisivel { get; set; }
}
