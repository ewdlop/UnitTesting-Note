using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace SeleniumWebDriverTests
{
    [TestClass]
    public class SeleniumWebDriverTests
    {
        private IWebDriver driver;

        [TestInitialize]
        public void SetUp()
        {
            driver = new ChromeDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            driver.Quit();
        }

        [TestMethod]
        public void TestGoogleSearch()
        {
            driver.Navigate().GoToUrl("https://www.google.com");
            var searchBox = driver.FindElement(By.Name("q"));
            searchBox.SendKeys("OpenAI");
            searchBox.SendKeys(Keys.Enter);
            Assert.IsTrue(driver.Title.Contains("OpenAI"));
        }

        [TestMethod]
        public void TestPageTitle()
        {
            driver.Navigate().GoToUrl("https://www.example.com");
            Assert.AreEqual("Example Domain", driver.Title);
        }
    }
}
