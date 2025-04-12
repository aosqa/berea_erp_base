{
    "name":"Bereka Base",
    "depends":['base','base_setup','web','mail','mail_bot'],
    "sequence": 1,
    "summary": "Bereka Systems Base",
    "category": "Bereka Systems/Base",
    "author": "Addis Systems/Abduselam M.",
    "website": "https://www.berekasystems.et/",
    "license": "LGPL-3",

    "data":[
        "data/res_user_data.xml",
        "data/res_partner_data.xml",
        "data/mail_template_email_layout.xml",
        "data/ethiopiabank.xml",
        "data/res_company_data.xml"
    ],
    "demo":[
        "demo/res_users_demo.xml",
        "demo/res_partner_image_demo.xml",
        "demo/res_partner_demo.xml"
      
    ],
        "installable": True,
        "currency": "ETB",
        "application": False,
        "auto_install": True,
}