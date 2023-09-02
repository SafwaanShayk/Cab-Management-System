using Microsoft.EntityFrameworkCore.Migrations;

namespace CabManagementSystem.Migrations
{
    public partial class AddBillingEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Milleage",
                table: "Billing",
                newName: "Mileage");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Mileage",
                table: "Billing",
                newName: "Milleage");
        }
    }
}
