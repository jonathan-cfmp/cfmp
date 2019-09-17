export default {
    "type": "object",
    "name": "spotlights",
    "title": "Spotlights Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title displayed at the top of the section (If the section does not have a title, it is used by the CMS)",
            "initialValue": "Spotlights Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "two",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The style used for the section background",
            "initialValue": "style2",
            "validation": null,
            "options": {
                "list": [
                    "style1",
                    "style2",
                    "style3",
                    "style4"
                ]
            }
        },
        {
            "type": "array",
            "name": "spotlights",
            "title": "Spotlights",
            "description": "A list of spotlights to be displayed in the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Spotlight title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "markdown",
                            "name": "text",
                            "title": "Spotlight text",
                            "description": "The text displayed below the spotlight title",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "home_img_path",
                            "title": "Spotlight Image",
                            "description": "The image displayed next to the spotlight content",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Spotlights"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlights"
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}