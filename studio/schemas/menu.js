export default {
    "type": "document",
    "name": "menu",
    "title": "Menu Configuration",
    "fields": [
        {
            "type": "array",
            "name": "actions",
            "title": "Menu Action Buttons",
            "description": "The action buttons displayed below the menu entries",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "label",
                            "title": "Button Label",
                            "description": "The text displayed inside the button",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "Button URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "label"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Menu Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/menu.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}