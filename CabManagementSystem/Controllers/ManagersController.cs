using CabManagementSystem.Data;
using CabManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CabManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ManagersController : Controller
    {
        private readonly DataContext _dataContext1;
        public ManagersController(DataContext dataContext)
        {
            _dataContext1 = dataContext;
            
        }

        [HttpGet]
        public async Task<IActionResult> GetAllManagers()
        {
          var managers =   await _dataContext1.Managers.ToListAsync();
            return Ok(managers);
        }

        [HttpPost]
        public async Task<IActionResult> AddManagers([FromBody] Managers managersRequest)
        {
            managersRequest.Id = Guid.NewGuid();

            await _dataContext1.Managers.AddAsync(managersRequest);
            await _dataContext1.SaveChangesAsync();

            return Ok(managersRequest);

        }
    }
}
