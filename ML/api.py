from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model and scaler
model_data = joblib.load('linear_regression_model.pkl')
theta_optimal = model_data['theta_optimal']
scaler = model_data['scaler']

@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.json

    # Convert to DataFrame
    new_data = pd.DataFrame(data)

    # Preprocess the new data
    new_data['Assignment'] = new_data['Assignment'].apply(lambda x: 1 if x == 'Yes' else 0)
    new_data_scaled = scaler.transform(new_data)

    # Add intercept term
    new_data_scaled = np.hstack((np.ones((new_data_scaled.shape[0], 1)), new_data_scaled))

    # Make predictions using the loaded model parameters
    predictions = new_data_scaled.dot(theta_optimal)

    # Return predictions as JSON
    return jsonify({'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
