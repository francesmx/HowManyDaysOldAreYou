import datetime

print
print("***************************************************************")
print("HELLO! I'm going to tell you how old you are in days!")
print
name = raw_input('First - please tell me your first name: ')
print
a = int(input('Now tell me - what year were you born?: '))
print
b = int(input('What month were you born? In numbers please, e.g. for May it would be 5: '))
print
c = int(input('And what day of the month? Again in numbers, e.g. for 6th, type 6: '))

today = datetime.date.today()
birthday = datetime.date(a, b, c)
diff = birthday - today
a = diff.days
b = -a

print
print("Congratulations " + name + "! You've been alive for " + str(b) + " days!")
print("***************************************************************")
print
