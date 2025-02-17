/**
 * @license MIT
 * Blox Project
 * By Téo JAUFFRET
 * 
 * Built using Google Blocky
 */

import * as Blockly from 'blockly/core';

const print = {
  type: 'print',
  message0: 'print %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 165,
  tooltip: '',
  helpUrl: '',
};

const new_instance = {
    type: "instance_new",
    tooltip: "",
    helpUrl: "",
    message0: "Instance %1 Type %2 %3",
    args0: [
      {
        type: "input_dummy",
        name: "0"
      },
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          [
            "Part",
            "Part"
          ],
          [
            "IntValue",
            "IntValue"
          ],
          [
            "Folder",
            "Folder"
          ]
        ]
      },
      {
        type: "input_dummy",
        name: "1",
        align: "RIGHT"
      },
    ],
    output: null,
    colour: 225           
}

const instance_set_name = {
  type: "instance_set_name",
  tooltip: "",
  helpUrl: "",
  message0: "Set Instance %1 name %2",
  args0: [
    {
      type: "field_variable",
      name: "VARIABLE",
      variable: "instance"
    },
    {
      type: "input_value",
      name: "instance",
      check: "String"
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 225
}
                   
const instance_set_position = {
  "type": "instance_set_position",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Instance %1 position to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "instance"
    },
    {
      "type": "input_value",
      "name": "POSITION"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}
        
const vector3 = {
  "type": "createVector",
  "tooltip": "Make a Vector3",
  "helpUrl": "",
  "message0": "Vector3 %1 x %2 y %3 z %4",
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "X",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Y",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Z",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 300,
  "inputsInline": true
}     

const instance_set_parent_to_script = {
  "type": "SetParentToScript",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Instance %1  parent to script %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}

const instance_set_parent_to_workspace = {
  "type": "SetParentToWorkspace",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Instance %1  parent to workspace %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}
                    
const instance_set_color = {
  "type": "SetColorInstance",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Instance %1  color to %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "field_colour",
      "name": "COLOR",
      "colour": "#ff0000"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}
                    
const instance_set_color_random = {
  "type": "SetColorInstanceRandom",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Instance %1  color to random color %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "item"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}
                    
                    
const whenPlayerConnect = {
  "type": "whenPlayerConnect",
  "tooltip": "",
  "helpUrl": "",
  "message0": "when %1 join the game %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "PLAYER",
      "variable": "player"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 60,
  "inputsInline": true
}

const wait = {
  "type": "wait",
  "tooltip": "",
  "helpUrl": "",
  "message0": "wait %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": false
}
                    
const instance_set_parent = {
  "type": "instance_set_parent",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set instance %1 parent to %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "instance"
    },
    {
      "type": "field_variable",
      "name": "NAME_1",
      "variable": "parent"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}
                    
const instance_set_value = {
  "type": "instance_set_value",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set instance %1 value %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "instance"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}

const instance_get_name = {
  "type": "GetName",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get name of  %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "instance"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 225
}

const instance_get_value = {
  "type": "GetValue",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get value of  %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "instance"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 225
}
                    

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  //addText,
  print,
  new_instance,
  instance_set_name,
  instance_set_position,
  instance_set_parent_to_script,
  instance_set_parent_to_workspace,
  instance_set_parent,
  instance_set_color,
  instance_set_color_random,
  instance_set_value,
  instance_get_name,
  instance_get_value,
  whenPlayerConnect,
  wait,
  vector3
]);
