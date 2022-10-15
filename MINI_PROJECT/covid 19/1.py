import requests
import json
from plyer import notification
import pyttsx3
import datetime



url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india"

headers = {
    'x-rapidapi-host': "corona-virus-world-and-india-data.p.rapidapi.com",
    'x-rapidapi-key': "a2c8b2c3b2msh902c040b7877cc3p147d29jsn502e8e0c69c8"
    }

response = requests.request("GET", url, headers=headers).json()



# import speech_recognition as sr
engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice',voices[1].id)

def speak(audio):















    
    engine.say(audio)
    engine.runAndWait()
#print(response.text)k
def covid_tracker(city_name):













    for each in response['state_wise']:
        if int(response['state_wise'][each]['active']) !=0:
            for city in response['state_wise'][each]['district']:
                if city.lower() == city_name.lower():
                    return (city,response['state_wise'][each]['district'][city]['active'])  
def notifyMe(title, message):
    notification.notify(
        title = title,
        message = message,
        app_icon = "coivd icon.ico ",
        timeout = 6
    )
def gettime():
    return datetime.datetime.now()

Entry=1
exit=0
while (Entry!=0):
    city_name=input("Enter you city to know about active case:")

    # if city_name =="0":
    #     break
    cases = covid_tracker(city_name)
    ntitle= " Ayush's Covid Tracker"
    speak("welcome to ayush covid Tracker ")
    

    nmessage=f"Total number of active cases in {city_name} is {cases}"
    print("Total number of active cases in "+city_name+" is :",cases)  
    speak(nmessage)
    notifyMe(ntitle,nmessage)
    value= nmessage
    with open ("Ayush covid tracker report.txt","a") as f:
        f.write(str([str(gettime())]) + ":" + value + "\n")
        print(" data is successfully updated")
        speak(" data is sucessfully  save in your covid file")
        
        
  

    if city_name =="exit":
        speak("thanks you for using ayush's covid tracker" )
        break


