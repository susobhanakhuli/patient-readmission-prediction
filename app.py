import os
from flask import Flask,redirect,url_for,render_template,request
import pickle
import numpy as np
import warnings

# Suppress all warnings
warnings.filterwarnings("ignore")

# to load pickle files
model=pickle.load(open('pickle/model.pkl','rb'))
diag_1_encoder=pickle.load(open('pickle/diag_1_encoder.pkl','rb'))
diag_2_encoder=pickle.load(open('pickle/diag_2_encoder.pkl','rb'))
diag_3_encoder=pickle.load(open('pickle/diag_3_encoder.pkl','rb'))
medical_specialty_encoder=pickle.load(open('pickle/medical_specialty_encoder.pkl','rb'))
payer_code_encoder=pickle.load(open('pickle/payer_code_encoder.pkl','rb'))

# For image path
img = os.path.join('static', 'Images')

# WSGI Application
app=Flask(__name__)

# Decorator
@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/pred')
def predict():
    return render_template('pred.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# Result HTML page
@app.route('/submit',methods=['POST','GET'])
def submit():
    if request.method=='POST':
        int_features=[float(x) for x in request.form.values()]
        # int_features[14] = diag_1_encoder.transform([int_features[14]])[0]
        # int_features[15] = diag_2_encoder.transform([int_features[15]])[0]
        # int_features[16] = diag_3_encoder.transform([int_features[16]])[0]
        # int_features[8] = medical_specialty_encoder.transform([int_features[8]])[0]
        # int_features[7] = payer_code_encoder.transform([int_features[7]])[0]
        print(int_features)
        final=[np.array(int_features)]
        prediction = model.predict_proba(final)
        print(prediction)
        readmission = {
            0: 'Less-than-30-days',
            1: 'Greater-than-30-days',
            2: 'No-readmission',
        }

        # print(crop_dict[prediction])
        count = 0
        mx_pred = 0
        mx_pred_count = 0
        
        for i in prediction[0]:
            if i == 1:
                break
            else:
                if i>mx_pred:
                    mx_pred = i
                    mx_pred_count = count
            count += 1
        if count>2:
            count = mx_pred_count

        print(count)

        output = readmission[count]
        img_name = output+".png"
        file = os.path.join(img, img_name)
        return render_template('result.html', pred = [file, output])

# if __name__=='__main__':
#     app.run(debug=True)
