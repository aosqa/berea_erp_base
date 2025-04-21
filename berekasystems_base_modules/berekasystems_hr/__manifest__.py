{
    "name":"Bereka Base Hr",
    "depends":['hr'],
    "sequence": 1,
    "summary": "Bereka Systems Base",
    "category": "Bereka Systems/Base",
    "author": "Addis Systems/Abduselam M.",
    "website": "https://www.berekasystems.et/",
    "license": "LGPL-3",

    "data":[
        "views/hr_action.xml",
     
    ],
    "demo":[
        "data/hr_demo.xml",
      
    ],
    "assets": {
        "web.assets_backend": [
            "berekasystems_hr/static/src/dashboard/dashboard.js",
            "berekasystems_hr/static/src/dashboard/dashboard.xml",
            "berekasystems_hr/static/src/dashboard/card.js",
            "berekasystems_hr/static/src/dashboard/card.xml",


        ]
    },
        "installable": True,
        "currency": "ETB",
        "application": False,
        "auto_install": True,
}