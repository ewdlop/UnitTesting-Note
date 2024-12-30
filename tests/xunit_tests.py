import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class TestSeleniumWebDriver(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def tearDown(self):
        self.driver.quit()

    def test_google_search(self):
        self.driver.get("https://www.google.com")
        search_box = self.driver.find_element_by_name("q")
        search_box.send_keys("OpenAI")
        search_box.send_keys(Keys.RETURN)
        self.assertIn("OpenAI", self.driver.title)

    def test_page_title(self):
        self.driver.get("https://www.example.com")
        self.assertEqual(self.driver.title, "Example Domain")

if __name__ == "__main__":
    unittest.main()
