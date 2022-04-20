using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication1
{
    public partial class Productpage
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public string ProductName { get; set; }
        public int? ProductPrice { get; set; }
        public string ProductImage { get; set; }
        public string ProductDescription { get; set; }
    }
}
