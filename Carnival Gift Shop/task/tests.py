from hstest import StageTest, CheckResult, dynamic_test, TestedProgram


class Feedback:
    test1 = "Your output should be like in the example!"


class CarnivalGiftShopTest(StageTest):
    welcome_msg = "WELCOME TO THE CARNIVAL GIFT SHOP!"
    greet_msg = "Hello friend! Thank you for visiting the carnival!"
    gift_list = """Here's the list of gifts:\n
Teddy Bear
Big Red Ball
Huge Bear
Candy
Stuffed Tiger
Stuffed Dragon
Skateboard
Toy Car
Basketball
Scary Mask"""

    # test if the output is correct
    @dynamic_test
    def test1(self):
        main = TestedProgram(self.source_name)
        output = main.start()
        message = f"{self.welcome_msg}\n{self.greet_msg}\n{self.gift_list}"
        if message.strip() not in output.strip():
            return CheckResult.wrong(Feedback.test1)
        return CheckResult.correct()


if __name__ == '__main__':
    CarnivalGiftShopTest('main').run_tests()
