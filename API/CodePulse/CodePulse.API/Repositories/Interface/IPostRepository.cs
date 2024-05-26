using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface;

public interface IPostRepository
{
    Task<Post> CriarAsync(Post post);
}
