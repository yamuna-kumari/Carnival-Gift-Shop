from hstest import StageTest, CheckResult, dynamic_test, TestedProgram


class Feedback:
    test1 = "Your output should be like in the example!"


class CarnivalGiftShopTest(StageTest):
    welcome_msg = "WELCOME TO THE CARNIVAL GIFT SHOP!"
    greet_msg = "Hello friend! Thank you for visiting the carnival!"
    gift_list = """Here's the list of gifts:\n
1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets"""

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
