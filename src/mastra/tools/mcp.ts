import { MCPClient } from "@mastra/mcp";

export const exa_mcp = new MCPClient({
  servers: {
    exa: {
      command: "npx",
      args: ["-y", "exa-mcp-server"],
      env: {
        EXA_API_KEY: process.env.EXA_API_KEY || "",
      },
    },
  },
});
