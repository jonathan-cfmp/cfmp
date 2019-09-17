export default {
    "type": "object",
    "name": "icons",
    "title": "Icons Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title displayed at the top of the section (If the section does not have a title, it is used by the CMS)",
            "initialValue": "Icons Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Section Subtitle",
            "description": "The text displayed below the section title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "one",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The style used for the section background",
            "initialValue": "style1",
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
            "name": "feature_icons",
            "title": "Section Icons",
            "description": "A list of icons displayed along the bottom of the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Icon Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome icon",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "style",
                            "title": "Icon Style",
                            "description": "Controls the icon color",
                            "validation": null,
                            "options": {
                                "list": [
                                    "style1",
                                    "style2",
                                    "style3"
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
                    "Icons"
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
                    "icons"
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