using CabManagementSystem.Data;
using CabManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CabManagementSystem.Controllers
{
    
    public class UsersController : BaseApiController //A base class for an MVC controller without view support.
                                                  //For view support we will use Angular
    {
        //to get a data from database we use dependency injection
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        //Endpoints
        [HttpGet]
        //Actionresult a controller action returns in response to a browser request.
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUser()
        {
            return await _context.Users.ToListAsync(); //converts collections (IEnumerables) to List instances
          
        } //IEnumerable interface is used to iterate a given object


        // e.g api/users/3(id)
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id); 

        }
    }
}
