export default {
    "type": "document",
    "name": "elements",
    "title": "Elements",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "description": "The bold first line of text displayed in the page banner",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Page Subtitle",
            "description": "The text displayed below the page title",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Elements Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "elements"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Elements URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
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
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}