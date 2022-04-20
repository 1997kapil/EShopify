using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Sess2.Controllers;
using Microsoft.Extensions.Logging;

namespace Sess2.Tests
{
    [TestClass]
    public class HomeControllerTests
    {
        [TestMethod]
        public void IndexTest()
        {
            //Arrange           
            HomeController controller = new HomeController(new HomeControllerLogger());

            //Act
            var result = controller.Index();
            
            //Assert
            Assert.IsTrue(result is ViewResult,"Index Action does not return a View");
            
        }
    }
}
