from flask import Flask, Response, request
app = Flask(__name__)
@app.route('/helloworld/<int:number>')
def print_helloworld(number):
   try: 
       response = {
           "viesti": "Hello World" * number,
            
        }
       return response
       

   except ValueError:
        response = {
            "message": "Invalid number as addend",
            "status": 400
        }
        return response, 400
   

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)