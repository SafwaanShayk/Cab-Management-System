using Microsoft.AspNetCore.Mvc;

namespace CabManagementSystem.Controllers
{
    [ApiController] // Indicates that a type and all derived types are used to serve HTTP API responses.
    [Route("api/[controller]")] 
    public class BaseApiController:ControllerBase
    {
    }
}
