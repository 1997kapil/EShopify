using Microsoft.VisualStudio.TestTools.UnitTesting;
using Sess2.Controllers;
using Sess2.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System.IO;

namespace Sess2.Tests
{
    [TestClass]
    public class CustomerControllerTests
    {
        [TestMethod]
        public void TestGetCustomers()
        {
            //var streamWriter = new StreamWriter("log.txt");

            //Arrange
            var context = new CompanyDbContext();
            var customerAbc = context.Customers.Where(cust => cust.Name == "abc").FirstOrDefault();

            //streamWriter.WriteLine(customerAbc.Name);            
            var controller = new CustomersController(context);

            //Act
            var customers = controller.GetCustomers().Result.Value;
            var result = customers.FirstOrDefault();
            //Console.WriteLine(result.Name + " taken from the Customer table");

            //Assert
            Assert.IsNotNull(result, "No Customer data returned");

            //streamWriter.Close();
        }

        [TestMethod]
        public void TestPostCustomer()
        {
            //Arrange
            var context = new CompanyDbContext();
            var controller = new CustomersController(context);
            var customer = new Customer
            {
                Name = "demox",
                Address = "Calcutta"
            };

            //Act
            var result = controller.PostCustomer(customer).Result.Value;
            var customerRecord = context.Customers.Where(cust => cust.Name == "demox").FirstOrDefault();

            //Assert          
            Assert.AreEqual(customer.Name, customerRecord.Name, 
                "The entry saved is not as per what was returned");
        }
    }
}
