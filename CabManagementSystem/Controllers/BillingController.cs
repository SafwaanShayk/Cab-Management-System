using CabManagementSystem.Data;
using CabManagementSystem.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CabManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillingController : Controller
    {
        private readonly DataContext _dataContext;

        public BillingController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBilling()
        {
            var billings = await _dataContext.Billing.ToListAsync();

            return Ok(billings);
        }



        [HttpPost]
        public async Task<IActionResult> AddBilling([FromBody] Billing billingRequest)
        {
            billingRequest.Id = Guid.NewGuid();

            await _dataContext.Billing.AddAsync(billingRequest);
            await _dataContext.SaveChangesAsync();

            return Ok(billingRequest);

        }
    }


}
