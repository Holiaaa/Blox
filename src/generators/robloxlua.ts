/**
 * @license MIT
 * Copyright 2025 Téo JAUFFRET
 */

import {Order} from 'blockly/lua';
import * as Blockly from 'blockly/core';
export const forBlock = Object.create(null);
import { registerFieldColour, FieldColour } from '@blockly/field-colour';

registerFieldColour();

function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, '');
  return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16)
  ];
}

forBlock['print'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const value_print = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
  const code = `print(${value_print})\n`;
  return code;
}

forBlock['instance_new'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const dropdown_type = block.getFieldValue('TYPE');

  const code = `Instance.new("${dropdown_type}")`;
  return [code, Order.NONE];
}

forBlock['instance_set_name'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_variable = generator.getVariableName(block.getFieldValue('VARIABLE'));
  const value_instance = generator.valueToCode(block, 'instance', Order.ATOMIC);

  const code = `${variable_variable}.Name = ${value_instance}\n`;
  return code;
}

forBlock['instance_set_position'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const value_position = generator.valueToCode(block, 'POSITION', Order.ATOMIC);

  const code = `${variable_name}.Position = ${value_position}\n`;
  return code;
}

forBlock['createVector'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_z = generator.valueToCode(block, 'Z', Order.ATOMIC);

  const code = `Vector3.new(${value_x}, ${value_y}, ${value_z})`;
  return [code, Order.NONE];
}

forBlock['SetParentToScript'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));

  const code = `${variable_name}.Parent = script.Parent\n`;
  return code;
}
forBlock['SetParentToWorkspace'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));

  const code = `${variable_name}.Parent = workspace\n`;
  return code;
}

forBlock['SetColorInstance'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const colour_color = block.getFieldValue('COLOR');

  let color = hexToRgb(colour_color);

  const code = `${variable_name}.Color = Color3.fromRGB(${color})\n`;
  return code;
}

forBlock['SetColorInstanceRandom'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));

  const code = `${variable_name}.Color = Color3.fromRGB(math.random(0, 255), math.random(0, 255), math.random(0, 255))\n`;
  return code;
}

forBlock['whenPlayerConnect'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const statement_name = generator.statementToCode(block, 'NAME');

  const code = `game.Players.PlayerAdded:Connect(function(${variable_player})\n${statement_name}end)`;
  return code;
}

forBlock['wait'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);

  const code = `task.wait(${value_name})\n`;
  return code;
}

forBlock['instance_set_parent'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const variable_name_1 = generator.getVariableName(block.getFieldValue('NAME_1'));

  const code = `${variable_name}.Parent = ${variable_name_1}\n`;
  return code;
}

forBlock['instance_set_value'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);

  const code = `${variable_name}.Value = ${value_name}\n`;
  return code;
}

forBlock['GetName'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const code = `${variable_name}.Name`;
  return [code, Order.NONE];
}

forBlock['GetValue'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const code = `${variable_name}.Value`;
  return [code, Order.NONE];
}

forBlock['whenPlayerTouchInstance'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const variable_instance = generator.getVariableName(block.getFieldValue('INSTANCE'));
  const statement_name = generator.statementToCode(block, 'NAME');

  const code = `${variable_instance}.Touched:Connect(function(hit)\n local ${variable_player} = game.Players:GetPlayerFromCharacter(hit.Parent)\n if player and player.Character and hit == player.Character.PrimaryPart then\n${statement_name}\n end\nend)`;
  return code;
}

forBlock['whenPlayerTouchParent'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const statement_name = generator.statementToCode(block, 'NAME');

  const code = `script.Parent.Touched:Connect(function(hit)\n local ${variable_player} = game.Players:GetPlayerFromCharacter(hit.Parent)\n if player and player.Character and hit == player.Character.PrimaryPart then\n${statement_name}\n end\nend)`;
  return code;
}

forBlock['whenParentClicked'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const statement_name = generator.statementToCode(block, 'NAME');
  const code = `script.Parent:FindFirstChild("ClickDetector").MouseClick:Connect(function(${variable_player})\n${statement_name}end)`;
  return code;
}

forBlock['GetValueFromLeaderstats'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const text_name = block.getFieldValue('NAME');
  const code = `player.leaderstats.${text_name}.Value`;
  return [code, Order.NONE];
}

forBlock['SetLeaderboardValue'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const text_name = block.getFieldValue('NAME');
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `player.leaderstats.${text_name}.Value = ${value_name}\n`;
  return code;
}

forBlock['Destroy'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const code = `${variable_name}:Destroy()\n`;
  return code;
}

forBlock['Clone'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  const code = `${variable_name}:Clone()`;
  return [code, Order.NONE];
}

forBlock['workspace'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `workspace`;
  return [code, Order.NONE];
}

forBlock['waitforchild'] = function(block: Blockly.Block,
  generator: Blockly.CodeGenerator) {
  const variable_instance = generator.getVariableName(block.getFieldValue('INSTANCE'));
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `${variable_instance}:WaitForChild(${value_name})`;
  return [code, Order.NONE];
}

forBlock['GetService'] = function(block: Blockly.Block, generator: Blockly.CodeGenerator) {
  const dropdown_service = block.getFieldValue('SERVICE');  // Get the selected service name (as a string)
  const code = `game:GetService("${dropdown_service}")`;  // Correctly format the Lua code
  return [code, Order.NONE];
};

forBlock['playAnimationID'] = function(block: Blockly.Block, generator: Blockly.CodeGenerator) {
  const number_animationid = block.getFieldValue('ID');
  const code = `local anim = Instance.new("Animation")\nanim.AnimationId = "rbxassetid://${number_animationid}"\nlocal animTrack = player.Character.Humanoid:WaitForChild("Animator"):LoadAnimation(anim)\nanimTrack:Play()\n`;
  return code;
}

forBlock['isa'] = function(block: Blockly.Block, generator: Blockly.CodeGenerator) {
  const variable_instance = generator.getVariableName(block.getFieldValue('INSTANCE'));
  const code = `${variable_instance}.Anchored = true\n`;
  return code;
}


/*forBlock['add_text'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `localfunction ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) do

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
end`,
  );
  // Generate the function call for this block.
  const code = `${addText}(${text});\n`;
  return code;
};
*/
