using CabManagementSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace CabManagementSystem.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<AppUser> Users{get;set;}
        public DbSet<Managers> Managers { get; set; }
        public DbSet<Billing> Billing { get; set; }

    }
}
