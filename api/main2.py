from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/prediction")
async def prediction(
    file: UploadFile = File(...)
):
    try:
        image = read_file_as_image(await file.read())
        img_batch = np.expand_dims(image, 0)

        # Load the appropriate model and class names based on some condition
        condition = True  # Define your condition here
        if condition:
           
            MODEL = tf.keras.models.load_model("D:\Research\Model\MODELOSHADHA")
            class_names = ["Edible", "Poisonous"]

        predictions = MODEL.predict(img_batch)
        predicted_class_idx = np.argmax(predictions[0])

        if predicted_class_idx < len(class_names):
            predicted_class = class_names[predicted_class_idx]
            confidence = float(np.max(predictions[0]))

            class_messages = {
                
                "Edible": "Custom message for Edible",
                "Poisonous": "Custom message for Poisonous"
            }

            class_message = class_messages.get(predicted_class, "Class not found")

            if confidence >= 0.65 and confidence < 1.0:
                if predicted_class != "":
                    return {
                        'class': predicted_class,
                        'message': class_message,
                        'confidence': confidence
                    }
                else:
                    return {
                        'class': 'Class not found',
                        'message': 'No class prediction available',
                        'confidence': 0.0
                    }
            elif confidence == 1.0:
                return {
                    'class': predicted_class,
                    'message': 'Overconfidence (100% confidence)',
                    'confidence': confidence
                }
            else:
                return {
                    'class': 'Not sure',
                    'message': 'Low confidence level',
                    'confidence': confidence
                }

    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Internal Server Error: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8002)
