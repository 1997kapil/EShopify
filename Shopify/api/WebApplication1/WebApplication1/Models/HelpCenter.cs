using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace WebApplication1.Models
{
  public class HelpCenter
  {
    public int id { get; set; }
    public string orderno { get; set; }
    public string productdetails { get; set; }
    public string problemtype { get; set; }
    public string descriptions { get; set; }
  }
}
