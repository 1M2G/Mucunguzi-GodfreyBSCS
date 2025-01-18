#import the calender module
import calendar
import datetime
#selecting the current year
year = datetime.datetime.now().year
#display the calender
print(calendar.calendar(year))