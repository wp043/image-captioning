from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import VisionEncoderDecoderModel, ViTImageProcessor, AutoTokenizer
import torch
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)

# load pretrained model
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
processor = ViTImageProcessor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
tokenizer = AutoTokenizer.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

def generate_caption(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    pixel_values = processor(images=image, return_tensors="pt").pixel_values
    pixel_values = pixel_values.to(device)

    output_ids = model.generate(pixel_values, max_length=16, num_beams=4)
    preds = tokenizer.decode(output_ids[0], skip_special_tokens=True)
    return preds

@app.route('/caption', methods=['POST'])
def caption():
    data = request.get_json()
    image_data = data['image']
    image_bytes = base64.b64decode(image_data.split(',')[1])
    caption = generate_caption(image_bytes)
    return jsonify({'caption': caption})

if __name__ == '__main__':
    app.run(debug=True)