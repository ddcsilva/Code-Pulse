namespace CodePulse.API.Models.DTO;

public class CriarCategoriaResponseDTO
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
}
