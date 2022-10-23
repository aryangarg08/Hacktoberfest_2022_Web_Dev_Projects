from plyer import notification
import requests
from bs4 import BeautifulSoup
def notifyme(title,message):
    notification.notify(
        title=title,
        message=message,
        app_icon="C:\covid 19\coivd icon.ico",
        timeout=10
    )
def datainfo(url):
    r=requests.get(url)
    return r.text

if __name__ == '__main__':
    try:

        #notifyme("Ayush","let's fight together to win covid19 battle")
        myhtmldata=datainfo('https://www.mohfw.gov.in/')
        soup = BeautifulSoup(myhtmldata, 'html.parser')
        #print(soup.prettify())
        for row in table.find_all('div')[1:]:
            cols = row.find_all('div')

    except Exception as e:
        print(e)
        