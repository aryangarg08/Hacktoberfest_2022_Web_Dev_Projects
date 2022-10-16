from flask import Flask, render_template,request

import pickle

app = Flask(__name__,template_folder='template')
with open('model.pkl','rb') as f:
    model=pickle.load(f)
@app.route("/",methods=["GET","POST"])
def hello_world():
    if request.method=="POST":
        myDict=request.form
        fever= int(myDict['fever'])
        bodypain=int(myDict['bodypain'])
        age=int(myDict['age'])
        runnynose=int(myDict['runnynose'])
        diffBreath=int(myDict['diffBreath'])
        oxygen_level=int(myDict['oxygen_level'])



    #code for interference
        input_features=[ fever, bodypain,age,runnynose,diffBreath,oxygen_level]
        infoprob= model.predict_proba([input_features])[0][1]
        print(infoprob)
        return render_template('show.html',inf=round(infoprob*100))
    #return "<p>Hello World!!</p> " + str(infoprob)
    return render_template('index.html')



if __name__ == "__main__":
    app.run(debug=True)