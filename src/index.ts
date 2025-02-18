import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/robloxlua';
import {luaGenerator} from 'blockly/lua';
import {save, load} from './serialization';
import {toolbox} from './toolbox';

import './index.css';

Blockly.common.defineBlocks(blocks);
Object.assign(luaGenerator.forBlock, forBlock);

const codeDiv = document.getElementById('generatedCode')?.firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

if (!blocklyDiv) {
  throw new Error(`div with id 'blocklyDiv' not found`);
}
const ws = Blockly.inject(blocklyDiv, {toolbox});

const runCode = () => {
  const code = luaGenerator.workspaceToCode(ws as Blockly.Workspace);
  if (codeDiv) codeDiv.textContent = code;

  if (outputDiv) outputDiv.innerHTML = '';
};

if (ws) {
  load(ws);
  runCode();
  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    if (e.isUiEvent) return;
    save(ws);
  });

  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()
    ) {
      return;
    }
    runCode();
  });
}
