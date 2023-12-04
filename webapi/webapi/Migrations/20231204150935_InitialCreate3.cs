using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HospitalId",
                table: "Visits",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Visits_HospitalId",
                table: "Visits",
                column: "HospitalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Hospitals_HospitalId",
                table: "Visits",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "HospitalId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Hospitals_HospitalId",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_HospitalId",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "HospitalId",
                table: "Visits");
        }
    }
}
