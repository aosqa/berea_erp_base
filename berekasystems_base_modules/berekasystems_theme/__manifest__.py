{
    "name":"Bereka Systems Theme",
    "depends":['base','base_setup','web'],
    "sequence": 1,
    "summary": "Bereka Systems Base Theme",
    "category": "Bereka Systems/Base",
    "author": "Addis Systems/Abduselam M.",
    "website": "https://www.berekasystems.et/",
    "license": "LGPL-3",

    "description": """
        This is a Theme for Bereka Systems Instances.
            ========================================
    """,
    "demo": [],
    "assets": {
        'web._assets_primary_variables': [
            ('prepend', 'berekasystems_theme/static/src/scss/primary_variables.scss'),
        ],
        'web.assets_backend':[
            'berekasystems_theme/static/src/webclient/sidebar/sidebar.xml',
            'berekasystems_theme/static/src/webclient/sidebar/sidebar.js',
            "berekasystems_theme/static/src/webclient/webclient.js" ,
          'berekasystems_theme/static/src/webclient/webclient.xml',
            "berekasystems_theme/static/src/webclient/webclient.scss",
            "berekasystems_theme/static/src/webclient/sidebar/sidebar.scss",


        ]
    },

        "installable": True,
        "currency": "ETB",
        "application": False,
        "auto_install": True,


}