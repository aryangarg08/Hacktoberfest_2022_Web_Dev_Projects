import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split 
from sklearn.linear_model import LogisticRegression
import pickle
if __name__=="__main__":
    #REading of data 
    df=pd.read_csv('record.csv')
    X=df.drop(['infectionProp'],axis='columns')
    Y=df['infectionProp']
    X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.3)
    X_train=X_train.to_numpy()
    X_test=X_test.to_numpy()
    Y_train=Y_train.to_numpy()
    Y_test=Y_test.to_numpy()
    model=LogisticRegression()
    model.fit(X_train,Y_train)

    
    # open a file, where you ant to store the data
    file = open('model.pkl', 'wb')

    # dump information to that file
    pickle.dump(model, file)
    file.close()
    


