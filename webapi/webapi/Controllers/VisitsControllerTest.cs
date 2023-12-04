using Xunit;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers;
using webapi.Data;
using System.Linq;

public class VisitsControllerTests
{
    private readonly AppDbContext _context;

    public VisitsControllerTests()
    { 
        _context = new AppDbContext(/* Your DbContext options here */);
    }

    [Fact]
    public void GetVisits_ReturnsOkResultWithVisits()
    {
        var controller = new VisitsController(_context);
        var patientName = "John Doe"; // Make sure this patient exists in your test database

        var result = controller.GetVisits(patientName);

        Assert.IsType<OkObjectResult>(result);
        var okResult = result as OkObjectResult;
        Assert.NotNull(okResult);
        Assert.NotNull(okResult.Value);
    }
}
