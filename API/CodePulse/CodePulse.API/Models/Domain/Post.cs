namespace CodePulse.API.Models.Domain;

public class Post
{
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public string DescricaoCurta { get; set; }
    public string Conteudo { get; set; }
    public string UrlImagemDestaque { get; set; }
    public string Slug { get; set; }
    public DateTime DataPublicacao { get; set; }
    public string Autor { get; set; }
    public bool EhVisivel { get; set; }
}
