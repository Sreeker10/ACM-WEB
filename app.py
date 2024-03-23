from flask import Flask, request
from flask_cors import CORS
import PyPDF2

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/convert', methods=['POST'])
def convert_pdf_to_text():
    pdf_file = request.files['pdf_file']
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    text = ''
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()
    return text

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)