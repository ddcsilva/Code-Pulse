namespace CodePulse.API.Models.DTO;

public class AtualizarCategoriaResponseDTO
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
}
