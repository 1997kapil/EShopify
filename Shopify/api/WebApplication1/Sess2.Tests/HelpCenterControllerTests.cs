using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApplication1.Controllers;
using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System.IO;
using WebApplication1;
using System.Linq;

namespace Sess2.Tests
{
    [TestClass]
    public class HelpCenterControllerTests
    {
        [TestMethod]
        public void GetAllProblemDetails()
        {
            //var streamWriter = new StreamWriter("log.txt");

            //Arrange
            var context = new Contact_Us_FormContext();
           // var customerAbc = context.Customers.Where(cust => cust.Name == "abc").FirstOrDefault();

            //streamWriter.WriteLine(customerAbc.Name);            
            var controller = new HelpCenterController(context);

            //Act
            var problemdetails = controller.GetAllProblemDetails().Result.Value;
            var result = problemdetails.FirstOrDefault();
            //Console.WriteLine(result.Name + " taken from the Customer table");

            //Assert
            Assert.IsNotNull(result, "No problem details returned");

            //streamWriter.Close();
        }

       // [TestMethod]
        //public void TestPostCustomer()
        //{
            //Arrange
          //  var context = new CompanyDbContext();
            //var controller = new CustomersController(context);
            //var customer = new Customer
            //{
              //  Name = "demox",
               // Address = "Calcutta"
            //};

            //Act
            //var result = controller.PostCustomer(customer).Result.Value;
            //var customerRecord = context.Customers.Where(cust => cust.Name == "demox").FirstOrDefault();

            //Assert          
            //Assert.AreEqual(customer.Name, customerRecord.Name,
               // "The entry saved is not as per what was returned");
        //}
    }
}
