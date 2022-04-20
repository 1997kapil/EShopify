using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HelpCenterController : ControllerBase
  {
    private Contact_Us_FormContext _context;

    public HelpCenterController( Contact_Us_FormContext context){
      
      _context = context;
    }

    [HttpGet("get-all-problem-details")]

    public async Task<ActionResult<List<HelpCenter>>> GetAllProblemDetails()
    {
      return await GetAllProblems();
    }

    [HttpPost("add-problem-details")]

    public async Task<ActionResult<UpdateResponseModel>> PostProblemDetails([FromBody] HelpCenter helpCenterBody)
    {
      if (ModelState.IsValid) {

        if (helpCenterBody.Id == 0)
        {
          _context.HelpCenters.Add(helpCenterBody);
        }
        else
        {
          _context.HelpCenters.Update(helpCenterBody);
        }
        _context.SaveChanges();
        return Ok(new UpdateResponseModel() { message = "Added Successfully" });
      }
      return BadRequest();
    }

    [HttpDelete("delete-problem-details/{id}")]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
      var problemRecord = await _context.HelpCenters.FindAsync(id);
      _context.HelpCenters.Remove(problemRecord);
      await _context.SaveChangesAsync();
      return Ok(new UpdateResponseModel() { message = "deleted problemdetails sucessfully" }); 
    }
    private Task<List<HelpCenter>> GetAllProblems()
    {
      List<HelpCenter> problemDetails = new List<HelpCenter>();
      var newModel = _context.HelpCenters;
      problemDetails = newModel.ToList();
      return Task.FromResult(problemDetails);
    }

  }
}
