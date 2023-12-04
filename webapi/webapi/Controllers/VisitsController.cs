using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using webapi.Attributes;
using webapi.Data;

namespace webapi.Controllers
{
    
    [Route("api/[controller]")]
    public class VisitsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VisitsController(AppDbContext context)
        {
            _context = context;
        }

        [ApiAuthAttribute]
        [HttpGet("search")]
        public IActionResult GetVisits(string patientName)
        {
            var visits = _context.Visits
                .Where(v => v.Patient.Name.Contains(patientName))
                .Include(v => v.Hospital)
                .ToList();

            if (!visits.Any())
            {
                return NotFound("No visits found for this patient");
            }

            return Ok(visits);
        }
    }
}
