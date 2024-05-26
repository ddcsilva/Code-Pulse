using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers;

public class CategoriasController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
