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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBillingId([FromRoute] Guid id)
        {
            var billingId =await _dataContext.Billing.FirstOrDefaultAsync(x => x.Id == id);
            if(billingId == null)
            {
                return NotFound();
            }
            return Ok(billingId);
        }

        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateBilling([FromRoute] Guid id, Billing updateBillingRequest)
        {
            var billing = await _dataContext.Billing.FindAsync(id);

            if (billing == null)
            {
                return NotFound();
            }
            billing.Mileage = updateBillingRequest.Mileage;
            billing.Fuel = updateBillingRequest.Fuel;
            billing.Date = updateBillingRequest.Date;

            await _dataContext.SaveChangesAsync();

            return Ok(billing);

        }


        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteBilling([FromRoute] Guid id)
        {
            var billing = await _dataContext.Billing.FindAsync(id);

            if (billing == null)
            {
                return NotFound();
            }

            _dataContext.Billing.Remove(billing);
            await _dataContext.SaveChangesAsync();

            return Ok();

        }

    }


}
