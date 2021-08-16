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
    public class PersonalDetailsController : ControllerBase
    {
        private readonly Home_LoanContext _context;

        public PersonalDetailsController(Home_LoanContext context)
        {
            _context = context;
        }

        // GET: api/PersonalDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonalDetail>>> GetPersonalDetails()
        {
            return await _context.PersonalDetails.ToListAsync();
        }

        // GET: api/PersonalDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalDetail>> GetPersonalDetail(long id)
        {
            var personalDetail = await _context.PersonalDetails.FindAsync(id);

            if (personalDetail == null)
            {
                return NotFound();
            }

            return personalDetail;
        }

        // PUT: api/PersonalDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonalDetail(long id, PersonalDetail personalDetail)
        {
            if (id != personalDetail.Cid)
            {
                return BadRequest();
            }

            _context.Entry(personalDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonalDetailExists(id))
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

        // POST: api/PersonalDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonalDetail>> PostPersonalDetail(PersonalDetail personalDetail)
        {
            _context.PersonalDetails.Add(personalDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonalDetail", new { id = personalDetail.Cid }, personalDetail);
        }

        // DELETE: api/PersonalDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonalDetail(long id)
        {
            var personalDetail = await _context.PersonalDetails.FindAsync(id);
            if (personalDetail == null)
            {
                return NotFound();
            }

            _context.PersonalDetails.Remove(personalDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonalDetailExists(long id)
        {
            return _context.PersonalDetails.Any(e => e.Cid == id);
        }
    }
}
