import requests
import json

url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india"

headers = {
    'x-rapidapi-key': "a2c8b2c3b2msh902c040b7877cc3p147d29jsn502e8e0c69c8",
    'x-rapidapi-host': "corona-virus-world-and-india-data.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers).json()
def notifyMe(title, message):
    notification.notify(
        title = title,
        message = message,
        app_icon = "coivd icon.ico",
        timeout = 6
    )
#print(response.text)
def covid_tracker(city_name):

    for each in response['state_wise']:
        if int(response['state_wise'][each]['active']) !=0:
            for city in response['state_wise'][each][['district']]:
                if city.lower() == city_name.lower():
                    return (city,response['state_wise'][each]['district'][city]['active']            
if __name__ == '__main__':
    
    
    entry=1
    exit=0
    while entry!=0:
        city_name=input("Enter you city to know about active case:")
        if city_name == "exit"
            break
        cases = covid_tracker(city_name) 
        print(cases)
        notifyme(f"{")

