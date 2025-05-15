import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { exa_mcp } from '../tools/mcp';

const tools = await exa_mcp.getTools();

export const searchAgent = new Agent({
  name: 'Search Agent',
  instructions: `
      You are a helpful search assistant.
      Your primary function is to help users find information.
      Keep responses concise but informative.
      You can use the searchTool to search the web.
`,
  model: openai('gpt-4o'),
  tools: tools, // No tools for this agent
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
    options: {
      lastMessages: 10,
      semanticRecall: false,
      threads: {
        generateTitle: false,
      },
    },
  }),
});
