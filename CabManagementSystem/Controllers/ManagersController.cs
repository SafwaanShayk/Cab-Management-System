using CabManagementSystem.Data;
using CabManagementSystem.DTOs;
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
        private readonly DataContext _dataContext;
        public ManagersController(DataContext dataContext)
        {
            _dataContext = dataContext;

        }

        [HttpGet]
        public async Task<IActionResult> GetAllManagers()
        {
            var managers = await _dataContext.Managers.ToListAsync();
            return Ok(managers);
        }

        [HttpPost]
        public async Task<IActionResult> AddManagers([FromBody] Managers managersRequest)
        {
            managersRequest.Id = Guid.NewGuid();

            await _dataContext.Managers.AddAsync(managersRequest);
            await _dataContext.SaveChangesAsync();

            return Ok(managersRequest);

        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetManager([FromRoute] Guid id)

        {
            var manager = await _dataContext.Managers.FirstOrDefaultAsync(x => x.Id == id);

            if (manager == null)
            {
                return NotFound();
            }
            return Ok(manager);


        }


        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateManager([FromRoute] Guid id, Managers updateManagerRequest)
        {
            var manager = await _dataContext.Managers.FindAsync(id);

            if (manager == null)
            {
                return NotFound();
            }
            manager.FullName = updateManagerRequest.FullName;
            manager.Age = updateManagerRequest.Age;
            manager.Date = updateManagerRequest.Date;
            manager.Gender = updateManagerRequest.Gender;

            await _dataContext.SaveChangesAsync();

            return Ok(manager);

        }


        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteManager([FromRoute] Guid id)
        {
            var manager = await _dataContext.Managers.FindAsync(id);

            if (manager == null)
            {
                return NotFound();
            }

            _dataContext.Managers.Remove(manager);
            await _dataContext.SaveChangesAsync();

            return Ok(); 

        }



    }
}
