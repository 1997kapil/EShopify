using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HelpCenterController : ControllerBase
  {
    private readonly IConfiguration _configuration;

    public HelpCenterController(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    [HttpGet]

    public JsonResult Get()
    {
      String query = @"
             select 


      ";
    }

  }
}
