using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Home_Loan.Home_LoanModel;
using System.IO;
using System.Net.Http.Headers;

namespace Home_Loan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly Home_LoanContext _context;

        public DocumentsController(Home_LoanContext context)
        {
            _context = context;
        }

        // GET: api/Documents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Document>>> GetDocuments()
        {
            return await _context.Documents.ToListAsync();
        }

        // GET: api/Documents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Document>> GetDocument(int id)
        {
            var document = await _context.Documents.FindAsync(id);

            if (document == null)
            {
                return NotFound();
            }

            return document;
        }

        // PUT: api/Documents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocument(int id, Document document)
        {
            if (id != document.DId)
            {
                return BadRequest();
            }

            _context.Entry(document).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentExists(id))
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



        // // POST: api/Documents (Dynamic Side)
        /*
        public IActionResult Upload()
        {
            try
            {
                //Console.WriteLine(document);
                //var formCollection = await Request.ReadFormAsync();
                var files = Request.Form.Files;
                var folderName = Path.Combine("Resources", "UDocuments");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (files.Any(f => f.Length == 0))
                {
                    return BadRequest();
                }
                foreach (var file in files)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName); //you can add this path to a list and then return all dbPaths to the client if require
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return Ok("All the files are successfully uploaded.");
            }
            catch (Exception e)
            {
                return StatusCode(500, "Internal server error"+e);
            }
        }
        */

        [HttpPost, DisableRequestSizeLimit]
        [Route("PostDoc")]
        public async Task<IActionResult> PostDocument()
        {
            try
            {  
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                Console.WriteLine(file);
                var foldername = Path.Combine("Resources", "UDocuments");
                var pathtosave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

                if(file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathtosave, fileName);
                    var dbPath = Path.Combine(foldername, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    //_context.Documents.Add(document);
                    //await _context.SaveChangesAsync();

                    //return (IActionResult<Document>)CreatedAtAction("GetDocument", new { id = document.DId }, document);
                    return Ok(new { dbPath });
                }
                
                else
                {
                    return BadRequest();
                }
            }
            catch(Exception e)
            {

                return StatusCode(500, $"Internal Server Error : {e}");
            }

        }

        /* Default Function
        // POST: api/Documents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        */
        [HttpPost]
        [Route("Upload")]
        public async Task<ActionResult<Document>> Upload(Document document)
        {
            _context.Documents.Add(document);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocument", new { id = document.DId }, document);
        }

        // DELETE: api/Documents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocument(int id)
        {
            var document = await _context.Documents.FindAsync(id);
            if (document == null)
            {
                return NotFound();
            }

            _context.Documents.Remove(document);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DocumentExists(int id)
        {
            return _context.Documents.Any(e => e.DId == id);
        }
    }
}
