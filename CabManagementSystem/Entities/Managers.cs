using Microsoft.VisualBasic;
using System;

namespace CabManagementSystem.Entities
{
    public class Managers
    {
        public Guid Id { get; set; }
        public string FullName { get;set;}
        public DateTime Date { get; set; }
        public int Age { get;set;}
        public string Gender { get; set; }

    }
}
