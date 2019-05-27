module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue component"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "type": {
      "type": "list",
      "message": "Choose a template type?",
      "choices": ["base", "lego"],
      "default": "base"
    },
    "thumb": {
      "when": "type === 'lego'",
      "type": "string",
      "message": "提供组件缩略图展示，图片大小限制🚫在140*140",
    },
    "alias": {
      "when": "type === 'lego'",
      "type": "string",
      "message": "提供组件描述展示给运营（建议使用中文）",
      "default": "PC端搭建组件"
    },
    "category":{
      "when": "type === 'lego'",
      "type": "list",
      "message": "装修修组件类型?",
      "choices": ["component", "layout"],
      "default": "component"
    }
  },
  "filters": {
    "src/schema.json": "type === 'lego'"
  },
  "helpers": {
    "if_equal": function(v1, v2, options) {
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    }
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}"
}
