from flask import Flask, render_template, url_for, request, session, redirect
from viSpace import app

import json


def converter(file, myjson):
    data = []
    with open("data/" + file, "r") as f:

        json_tab = []
        for i in range(3):  # On saute les premieres colonnes
            next(f)
        for i, line in enumerate(f):
            if i == 0:
                words = line.split()
                for j in words:
                    data.append(j)
            elif i >= 3:
                firsty = line.split()
                json_tab.append(dict(zip(data, firsty)))

    jsonfile = open(myjson, "w")

    jsonfile.write(json.dumps(json_tab))
    jsonfile.close()


@app.route('/convertFile', methods=['POST'])
def convertFile():
    converter(request.form['filename'],'data.json')
    return render_template('index.html',converted = True, filename = request.form['filename'])
