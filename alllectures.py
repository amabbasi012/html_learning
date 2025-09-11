# =================================
# Lecture 1: Basics of Python
# =================================

# Variables and Data Types
student_name = "Ali"        # string
student_age = 16            # integer
is_enrolled = True          # boolean
print(student_name, student_age, is_enrolled)

# Arithmetic Operators
number1 = 10
number2 = 3
print("Addition:", number1 + number2)
print("Division:", number1 / number2)
print("Power:", number1 ** number2)

# String Operations
greeting = "Hello"
subject = "Python"
print(greeting + " " + subject)  # concatenation
print(subject.upper())           # uppercase
print(subject[0:3])              # slicing

# Logical Operators
is_adult = student_age >= 18
has_id_card = True
print("Can enter:", is_adult and has_id_card)

# Input Example
# user_city = input("Enter your city: ")
# print("You live in", user_city)


# =================================
# Lecture 2: Control Structures
# =================================

# If-Else Statement
temperature = 35
if temperature > 30:
    print("It's a hot day")
else:
    print("It's not too hot")

# Nested If Example
marks = 85
if marks >= 80:
    print("Grade: A")
    if marks > 90:
        print("Excellent performance!")

# For Loop Example
for day in range(1, 6):
    print("Day", day)

# While Loop Example
counter = 1
while counter <= 3:
    print("Counter:", counter)
    counter += 1


# =================================
# Lecture 3: Functions
# =================================

# Simple Function
def greet_user(name):
    print("Hello,", name)

greet_user("Sara")

# Function with Return Value
def square(number):
    return number * number

print("Square of 5:", square(5))

# Function with Default Argument
def introduce(person_name, country="Pakistan"):
    print(person_name, "is from", country)

introduce("Ali")
introduce("John", "USA")


# =================================
# Lecture 4: Data Structures
# =================================

# List Example
fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print("Fruits:", fruits)

# Tuple Example
coordinates = (10, 20)
print("X:", coordinates[0], "Y:", coordinates[1])

# Dictionary Example
student = {"name": "Ayesha", "age": 20, "grade": "A"}
print(student["name"], "scored grade", student["grade"])

# Set Example
unique_numbers = {1, 2, 3, 3, 2}
print("Unique numbers:", unique_numbers)


# =================================
# Lecture 5: Advanced Strings and Loops
# =================================

# String Formatting
language = "Python"
version = 3
print(f"{language} version {version}")

# Looping through List
animals = ["cat", "dog", "rabbit"]
for animal in animals:
    print(animal)

# Loop with Index
for index, fruit in enumerate(fruits):
    print("Fruit", index, "is", fruit)


# =================================
# Lecture 6: File Handling
# =================================

# Writing to a File
with open("example.txt", "w") as file:
    file.write("Hello, this is a test file.")

# Reading from a File
with open("example.txt", "r") as file:
    content = file.read()
    print("File Content:", content)


# =================================
# Lecture 7: Error Handling
# =================================

# Try-Except Example
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero.")

# Multiple Exceptions
try:
    number = int("abc")
except ValueError:
    print("Invalid number format.")
except Exception as e:
    print("Error:", e)


# =================================
# Lecture 8: Object-Oriented Programming
# =================================

# Class and Object
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        print(self.brand, self.model, "is driving")

car1 = Car("Toyota", "Corolla")
car1.drive()

# Inheritance Example
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def charge(self):
        print(self.brand, self.model, "is charging with", self.battery_size, "kWh battery")

tesla = ElectricCar("Tesla", "Model S", 100)
tesla.drive()
tesla.charge()


# =================================
# Lecture 9: Modules and Libraries
# =================================

# Using Built-in Module
import math
print("Square root of 16:", math.sqrt(16))

# Using Random Module
import random
print("Random number between 1 and 10:", random.randint(1, 10))

# Custom Module Example
# (Create another Python file with a function and import here)
# from my_module import my_function
# my_function()
