using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Home_Loan.Home_LoanModel;

namespace Home_Loan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomeDetailsController : ControllerBase
    {
        private readonly Home_LoanContext _context;

        public IncomeDetailsController(Home_LoanContext context)
        {
            _context = context;
        }

        // GET: api/IncomeDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IncomeDetail>>> GetIncomeDetails()
        {
            return await _context.IncomeDetails.ToListAsync();
        }

        // GET: api/IncomeDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IncomeDetail>> GetIncomeDetail(int id)
        {
            var incomeDetail = await _context.IncomeDetails.FindAsync(id);

            if (incomeDetail == null)
            {
                return NotFound();
            }

            return incomeDetail;
        }

        // PUT: api/IncomeDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIncomeDetail(int id, IncomeDetail incomeDetail)
        {
            if (id != incomeDetail.InId)
            {
                return BadRequest();
            }

            _context.Entry(incomeDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncomeDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/IncomeDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IncomeDetail>> PostIncomeDetail(IncomeDetail incomeDetail)
        {
            _context.IncomeDetails.Add(incomeDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncomeDetail", new { id = incomeDetail.InId }, incomeDetail);
        }

        // DELETE: api/IncomeDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIncomeDetail(int id)
        {
            var incomeDetail = await _context.IncomeDetails.FindAsync(id);
            if (incomeDetail == null)
            {
                return NotFound();
            }

            _context.IncomeDetails.Remove(incomeDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IncomeDetailExists(int id)
        {
            return _context.IncomeDetails.Any(e => e.InId == id);
        }
    }
}
