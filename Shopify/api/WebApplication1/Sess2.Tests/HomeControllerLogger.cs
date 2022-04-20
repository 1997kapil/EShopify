using Microsoft.Extensions.Logging;
using Sess2.Controllers;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sess2.Tests
{
    class HomeControllerLogger : ILogger<HomeController>
    { //This is a dummy logger class
        public IDisposable BeginScope<TState>(TState state)
        {
            throw new NotImplementedException();
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            throw new NotImplementedException();
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            throw new NotImplementedException();
        }
    }
}
